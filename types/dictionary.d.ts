import type Lang from './lang';

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  sections: {
    hero: {
      heading: string;
      subheading: {
        beforeEmphasis: string;
        emphasis: string;
      };
      button: string;
    };
    nextMeeting: {
      heading: string;
      data: {
        date: {
          day: string;
          date: string;
          month: string;
          year: string;
          dateTime: string;
        };
        time: {
          display: string;
          marker: string;
          dateTime: string;
        };
        location: {
          name: string;
          lang: Lang;
        };
        address: {
          street: string;
          houseNumber: string;
          city: string;
          postCode: string;
        };
      };
      button: string;
    };
    photos: {
      heading: string;
    };
    about: {
      carouselItems: {
        [key: string]: {
          heading: string;
          content: {
            paragraph1?: string;
            paragraph2?: {
              beforeEmphasis: string;
              emphasis: string;
              afterEmphasis?: string;
            };
            paragraph3?: string;
            list?: {
              [key: string]: string;
            };
            button?: string;
          };
        };
      };
    };
    organisers: {
      heading: string;
      [key: string]: {
        heading: string;
        content: {
          paragraph1:
            | string
            | {
                beforeEmphasis: string;
                emphasis: string;
                afterEmphasis?: string;
              };
          paragraph2: {
            beforeEmphasis: string;
            emphasis: string;
            afterEmphasis?: string;
          };
        };
      };
    };
    lookingForward: {
      content: string;
    };
  };
  footer: Record<string, never>;
}

export interface Props {
  dict: Dictionary;
}
