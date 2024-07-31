import React from 'react';
import photos from '../../../../../../../utils/constants/photoSources';
import SwiperDefault from '@/app/[lang]/components/swiper/SwiperDefault';
const classNamePagination =
  'p-[6px] !inline-flex items-center justify-center !bg-sky-300/75';

const MeetingPastPhotosMobile = () => {
  return (
    <SwiperDefault
      images={photos}
      screenSize="mobile"
      options={{
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        pagination: {
          clickable: true,
          renderBullet: (index: number, className: string) => {
            return `<div class="${className} ${classNamePagination}"></div>`;
          },
        },
      }}
      className={{
        // Style the class "swiper wrapper" with the asterisk modifier as it is not acceessible within React
        swiper: '*:items-center !static',
        slide: '!flex items-center justify-center',
        image: {
          default: 'rounded border-4 border-sky-300/50 self-center',
        },
      }}
    />
  );
};

export default MeetingPastPhotosMobile;
