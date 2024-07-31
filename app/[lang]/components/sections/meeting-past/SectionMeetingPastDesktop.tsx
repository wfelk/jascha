import React, { FC } from 'react';
import Photos from './components/desktop/MeetingPastPhotosDesktop';

const SectionMeetingPastDesktop: FC = () => {
  return (
    <div className="hidden h-[750px] md:flex flex-col gap-4">
      <Photos />
    </div>
  );
};

export default SectionMeetingPastDesktop;
