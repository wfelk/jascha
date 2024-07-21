'use client';

import photos from '../../../../../../../utils/constants/photoSources';
import NextImage from 'next/image';

const MeetingPastPhotosDesktop = () => {
  return (
    <div>
      {photos.map((photo: any, index: any) => (
        <NextImage src={photo.src} alt={photo.alt} />
      ))}
    </div>
  );
};

export default MeetingPastPhotosDesktop;
