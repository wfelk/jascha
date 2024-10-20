import meeting1Desktop from '/public/images/meetings/desktop/jascha-meeting-2022-11-04-desktop.jpeg';
import meeting3aDesktop from '/public/images/meetings/desktop/jascha-meeting-2022-12-09-01-desktop.jpeg';
import meeting3bDesktop from '/public/images/meetings/desktop/jascha-meeting-2022-12-09-02-desktop.jpeg';
import meeting4Desktop from '/public/images/meetings/desktop/jascha-meeting-2023-02-05-desktop.jpeg';
import meeting5Desktop from '/public/images/meetings/desktop/jascha-meeting-2023-03-19-desktop.jpeg';
import meeting1Mobile from '/public/images/meetings/mobile/jascha-meeting-2022-11-04-mobile.jpeg';
import meeting3aMobile from '/public/images/meetings/mobile/jascha-meeting-2022-12-09-01-mobile.jpeg';
import meeting3bMobile from '/public/images/meetings/mobile/jascha-meeting-2022-12-09-02-mobile.jpeg';
import meeting4Mobile from '/public/images/meetings/mobile/jascha-meeting-2023-02-05-mobile.jpeg';
import meeting5Mobile from '/public/images/meetings/mobile/jascha-meeting-2023-03-19-mobile.jpeg';

// NOTE The months are shifted negatively by one as the counting is zero-indexed, e.g., February is "1".

interface PhotoSource {
  src: {
    mobile: any;
    desktop: any;
  };
  alt: string;
  dimensions: {
    mobile: {
      width: number;
      height: number;
    };
    desktop: {
      width: number;
      height: number;
    };
  };
  date: {
    day: number;
    month: number;
    year: number;
  };
  location: {
    venue: string;
    district: string;
  };
}

const PHOTO_SOURCES: PhotoSource[] = [
  {
    src: {
      desktop: meeting1Desktop,
      mobile: meeting1Mobile,
    },
    alt: '1st meeting',
    dimensions: {
      mobile: {
        width: 500,
        height: 300,
      },
      desktop: {
        width: 833,
        height: 500,
      },
    },
    date: {
      day: 4,
      month: 10, // November (zero-indexed 10)
      year: 2022,
    },
    location: { venue: 'Jonny Turista', district: 'Sülz' },
  },
  {
    src: {
      desktop: meeting3aDesktop,
      mobile: meeting3aMobile,
    },
    alt: '3rd meeting',
    dimensions: {
      mobile: {
        width: 488,
        height: 300,
      },
      desktop: {
        width: 813,
        height: 500,
      },
    },
    date: {
      day: 9,
      month: 11, // December (zero-indexed 11)
      year: 2022,
    },
    location: { venue: 'Stadtgarten', district: 'Ehrenfeld' },
  },
  {
    src: {
      desktop: meeting3bDesktop,
      mobile: meeting3bMobile,
    },
    alt: '3rd meeting',
    dimensions: {
      mobile: {
        width: 487,
        height: 300,
      },
      desktop: {
        width: 812,
        height: 500,
      },
    },
    date: {
      day: 9,
      month: 11, // December (zero-indexed 11)
      year: 2022,
    },
    location: { venue: 'HoteLux KGB BAR', district: 'Sülz' },
  },
  {
    src: {
      desktop: meeting4Desktop,
      mobile: meeting4Mobile,
    },
    alt: '4th meeting',
    dimensions: {
      mobile: {
        width: 452,
        height: 300,
      },
      desktop: {
        width: 753,
        height: 500,
      },
    },
    date: {
      day: 2,
      month: 4, // May (zero-indexed 4)
      year: 2023,
    },
    location: { venue: 'Casita Mexicana', district: 'Sülz' },
  },
  {
    src: {
      desktop: meeting5Desktop,
      mobile: meeting5Mobile,
    },
    alt: '5th meeting',
    dimensions: {
      mobile: {
        width: 532,
        height: 300,
      },
      desktop: {
        width: 887,
        height: 500,
      },
    },
    date: {
      day: 19,
      month: 2, // March (zero-indexed 2)
      year: 2023,
    },
    location: { venue: 'Bagatelle', district: 'Sülz' },
  },
];

export default PHOTO_SOURCES;
