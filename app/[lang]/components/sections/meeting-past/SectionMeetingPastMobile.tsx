'use client';

import { FC } from 'react';
import Photos from './components/mobile/MeetingPastPhotosMobile';

const SectionMeetingPastMobile: FC = () => {
  return (
    <div className="pt-6 pb-10 px-4 from-sky-700/50 to-sky-600/75 bg-gradient-to-tr md:hidden relative">
      <Photos />
    </div>
  );
};

export default SectionMeetingPastMobile;
