interface StructuredMeeting {
  id?: string;
  date?: string;
  address?: {
    full?: string;
    street?: string;
    houseNumber?: string | null;
    postCode?: string;
    city?: string;
    coordinates?: {
      lat?: number;
      lon?: number;
    } | null;
  };
  location?: {
    name?: string;
    url?: string;
  };
  attendees?: number;
}
