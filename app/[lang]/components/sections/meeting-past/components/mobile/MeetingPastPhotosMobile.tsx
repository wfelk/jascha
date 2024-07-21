'use client';

import ImageCarousel from '@/app/[lang]/components/ImageCarousel';
import photos from '../../../../../../../utils/constants/photoSources';

const MeetingPastPhotosMobile = () => {
  return (
    <div>
      <ImageCarousel images={photos} screenSize="mobile" />
    </div>
  );
};

export default MeetingPastPhotosMobile;
