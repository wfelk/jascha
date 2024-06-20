import meeting1 from '/public/images/meetings/jascha-meeting-2022-11-04.jpeg';
import meeting3a from '/public/images/meetings/jascha-meeting-2022-12-09-01.jpeg';
import meeting3b from '/public/images/meetings/jascha-meeting-2022-12-09-02.jpeg';
import meeting4 from '/public/images/meetings/jascha-meeting-2023-05-02.jpeg';
import meeting5 from '/public/images/meetings/jascha-meeting-2023-03-19.jpeg';

// NOTE The month are shifted negatively by one as the counting is zero-indexed, e.g. February is "1".

const photoSources: {
  src: any;
  alt: string;
  width: number;
  height: number;
  date: {
    day: number;
    month: number;
    year: number;
  };
  location: {
    venue: string;
    district: string;
  };
}[] = [
  {
    src: meeting1,
    alt: '1st meeting',
    width: 1280,
    height: 949,
    date: {
      day: 4,
      month: 10,
      year: 2022,
    },
    location: { venue: 'Jonny Turista', district: 'Sülz' },
  },
  {
    src: meeting3a,
    alt: '3rd meeting',
    width: 1280,
    height: 949,
    date: {
      day: 9,
      month: 11,
      year: 2022,
    },
    location: { venue: 'Stadtgarten', district: 'Ehrenfeld' },
  },
  {
    src: meeting3b,
    alt: '3rd meeting',
    width: 1280,
    height: 949,
    date: {
      day: 9,
      month: 11,
      year: 2022,
    },
    location: { venue: 'HoteLux KGB BAR', district: 'Sülz' },
  },
  {
    src: meeting4,
    alt: '4th meeting',
    width: 914,
    height: 914,
    date: {
      day: 5,
      month: 1,
      year: 2023,
    },
    location: { venue: 'Casita Mexicana', district: 'Sülz' },
  },
  {
    src: meeting5,
    alt: '5th meeting',
    width: 914,
    height: 914,
    date: {
      day: 19,
      month: 2,
      year: 2023,
    },
    location: { venue: 'Bagatelle', district: 'Sülz' },
  },
];

export default photoSources;
