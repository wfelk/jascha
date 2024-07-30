'use client';

import { FC } from 'react';
import Photos from './components/desktop/MeetingPastPhotosDesktop';

interface Props {}

const SectionMeetingPastDesktop: FC<Props> = () => {
  return (
    <div className="hidden h-[750px] md:flex flex-col gap-4">
      <Photos />
    </div>
  );
};

export default SectionMeetingPastDesktop;
