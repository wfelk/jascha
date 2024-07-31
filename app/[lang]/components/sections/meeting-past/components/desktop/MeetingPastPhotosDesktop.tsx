import React from 'react';
import SwiperEffectCards from '@/app/[lang]/components/swiper/SwiperEffectCards';
import photos from '../../../../../../../utils/constants/photoSources';

const MeetingPastPhotosDesktop = () => {
  return (
    // Wrapping div element is somehow necessary for the SwiperEffectCards to work properly
    <div>
      <SwiperEffectCards
        images={photos}
        screenSize="desktop"
        className={{
          image: {
            default: 'w-full transition',
            isActive: 'border-8 rounded border-sky-300/50',
            isNotActive: 'blur',
          },
        }}
      />
    </div>
  );
};

export default MeetingPastPhotosDesktop;
