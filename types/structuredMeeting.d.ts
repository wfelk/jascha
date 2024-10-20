interface StructuredMeeting {
  id: string;
  date: string;
  address: string;
  location: {
    name: string;
    url?: string;
  };
  attendees: number?;
}
