import MEETINGS_TABLE_COLUMNS from '@/utils/constants/meetingsTableColumns';

const structureFetchedDataOnMeetings = (
  rawData: Object[]
): StructuredMeeting[] => {
  const structuredDataOnMeetings = rawData.map((rawMeetingData: any) => {
    const props = rawMeetingData.properties;
    return {
      id: props[MEETINGS_TABLE_COLUMNS.id].title[0].plain_text,
      date: props[MEETINGS_TABLE_COLUMNS.date].date.start,
      address: props[MEETINGS_TABLE_COLUMNS.address].rich_text[0].plain_text,
      location: {
        name: props[MEETINGS_TABLE_COLUMNS.location].rich_text[0].plain_text,
        url: props[MEETINGS_TABLE_COLUMNS.location].rich_text[0].href,
      },
      attendees: props[MEETINGS_TABLE_COLUMNS.attendees].number,
    };
  });
  return structuredDataOnMeetings.sort((a, b) => a.id.localeCompare(b.id));
};

export default structureFetchedDataOnMeetings;
