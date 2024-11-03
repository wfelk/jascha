interface StructuredMeeting {
  id: string;
  date: string;
  address: {
    full: string;
    street?: string;
    houseNumber?: string | null;
    postCode?: string;
    city?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  location: {
    name: string;
    url?: string;
  };
  attendees: number?;
}
