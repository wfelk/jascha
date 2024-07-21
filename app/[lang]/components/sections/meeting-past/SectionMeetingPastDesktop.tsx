'use client';

import { FC, RefObject } from 'react';
import Photos from './components/desktop/MeetingPastPhotosDesktop';
import { Splide } from '@splidejs/react-splide';
// import Thumbnails from './components/desktop/MeetingPastThumbnailsDesktop';

interface Props {
  mainRef: RefObject<Splide>;
  thumbnailsRef: RefObject<Splide>;
}

const SectionMeetingPastDesktop: FC<Props> = ({ mainRef, thumbnailsRef }) => {
  return (
    <div className="hidden max-h-full md:flex from-sky-700/50 to-sky-600/75 bg-gradient-to-tr py-7 rounded-lg flex-col gap-4">
      <Photos ref={mainRef} />
      {/* <Thumbnails ref={thumbnailsRef} /> */}
    </div>
  );
};

export default SectionMeetingPastDesktop;
