'use client';

import React, { useEffect, useState } from 'react';
import structureFetchedDataOnMeetings from '@/utils/functions/structureFetchedDataOnMeetings';

interface Info {
  isNextMeetingScheduled: boolean;
}

const useInfoOnMeetings = () => {
  const [info, setInfo] = useState<Info>({ isNextMeetingScheduled: false });
  useEffect(() => {
    const getDataOnMeetings = async () => {
      let notionData = null;

      try {
        const response = await fetch('http://localhost:3000/api/notion', {
          method: 'POST',
        });

        notionData = await response.json();
        const structuredDataOnMeetings = structureFetchedDataOnMeetings(
          notionData.results
        );

        const isNextMeetingScheduled = structuredDataOnMeetings.some(
          (meeting: StructuredMeeting) => {
            const meetingDate = new Date(meeting.date);
            return meetingDate > new Date();
          }
        );

        setInfo({
          isNextMeetingScheduled,
        });
        console.log('🟣 isNextMeetingScheduled', isNextMeetingScheduled);
        console.log('🟣 Meetings', structuredDataOnMeetings);
      } catch (error) {
        console.error(
          'An error has occurred while trying to fetch information on the meetings from Notion.',
          error
        );
      }
    };
    getDataOnMeetings();
  }, []);
  return info;
};

export default useInfoOnMeetings;
