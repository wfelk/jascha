import meeting1 from '/public/images/meetings/jascha-meeting-2022-11-04.jpeg';
import meeting2 from '/public/images/meetings/jascha-meeting-2022-12-09.jpeg';
import meeting3 from '/public/images/meetings/jascha-meeting-2023-05-02.jpeg';

const photoSources: { src: any; alt: string; width: number; height: number }[] =
  [
    { src: meeting1, alt: 'Meeting 1', width: 1280, height: 949 },
    { src: meeting2, alt: 'Meeting 2', width: 1280, height: 949 },
    { src: meeting3, alt: 'Meeting 3', width: 914, height: 914 },
  ];

export default photoSources;
