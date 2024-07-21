'use client';

import ImageCarousel from '@/app/[lang]/components/ImageCarousel';
import photos from '../../../../../../../utils/constants/photoSources';

const MeetingPastPhotosDesktop = () => {
  return (
    <div>
      <ImageCarousel images={photos} screenSize="desktop" />
    </div>
  );
};

export default MeetingPastPhotosDesktop;
