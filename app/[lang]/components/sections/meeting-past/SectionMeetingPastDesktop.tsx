'use client';

import { FC } from 'react';
import Photos from './components/desktop/MeetingPastPhotosDesktop';

interface Props {}

const SectionMeetingPastDesktop: FC<Props> = () => {
  return (
    <div className="hidden max-h-full md:flex from-sky-700/50 to-sky-600/75 bg-gradient-to-tr py-7 rounded-lg flex-col gap-4">
      <Photos />
    </div>
  );
};

export default SectionMeetingPastDesktop;
