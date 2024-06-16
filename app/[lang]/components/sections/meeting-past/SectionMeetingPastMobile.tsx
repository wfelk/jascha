'use client';

import { FC } from 'react';
import Photos from './components/mobile/MeetingPastPhotosMobile';

const SectionMeetingPastMobile: FC = () => {
  return (
    <div className="md:hidden py-4 from-sky-700/50 to-sky-600/75 bg-gradient-to-tr">
      <Photos />
    </div>
  );
};

export default SectionMeetingPastMobile;
