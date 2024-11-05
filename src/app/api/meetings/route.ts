import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import structureFetchedDataOnMeetings from '@/utils/functions/structureFetchedDataOnMeetings';
import getCoordinates from '@/utils/functions/getCoordinates';

const notion = new Client({ auth: process.env.NOTION_KEY });

// Notion's API accepts only POST requests to query the database
export const POST = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
    });

    const result = NextResponse.json(response);
    const notionData = await result.json();

    // Prepare data
    const meetings = structureFetchedDataOnMeetings(notionData.results);
    const nextMeeting = meetings
      .filter((meeting: StructuredMeeting) => {
        const meetingDate = new Date(meeting.date);
        return meetingDate > new Date();
      })
      .sort((a: StructuredMeeting, b: StructuredMeeting) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      })[0];
    const isNextMeetingScheduled = meetings.some(
      (meeting: StructuredMeeting) => {
        const meetingDate = new Date(meeting.date);
        return meetingDate > new Date();
      }
    );
    // ! It does not work at the moment. Alternatively, the coordinates are fetched on the client side.
    if (nextMeeting.address.full) {
      const coordinates = await getCoordinates(nextMeeting.address.full);
      if (coordinates) {
        nextMeeting.address.coordinates = coordinates;
      }
    }

    const infoOnMeetings: InfoOnMeetings = {
      meetings,
      isNextMeetingScheduled,
      nextMeeting,
    };

    return NextResponse.json(infoOnMeetings);
  } catch (error) {
    console.error('Error querying Notion database', error);

    return NextResponse.json(
      { error: 'Failed to query Notion database' },
      { status: 500 }
    );
  }
};
