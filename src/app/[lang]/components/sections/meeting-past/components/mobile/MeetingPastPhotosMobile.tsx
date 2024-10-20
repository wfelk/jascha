import React from 'react';
import photos from '@/utils/constants/photoSources';
import SwiperDefault from '@/src/app/[lang]/components/swiper/SwiperDefault';

const classNamePagination =
  'p-[6px] !inline-flex items-center justify-center !bg-sky-300/75';

const MeetingPastPhotosMobile = () => (
  <SwiperDefault
    images={photos}
    screenSize="mobile"
    options={{
      centeredSlides: true,
      spaceBetween: 20,
      pagination: {
        clickable: true,
        renderBullet: (index: number, className: string) => {
          return `<div class="${className} ${classNamePagination}"></div>`;
        },
      },
    }}
    className={{
      swiper: '*:items-center !static',
      slide: '!flex items-center justify-center',
      image: {
        default: 'rounded border-4 border-sky-300/50 self-center',
      },
    }}
  />
);

export default MeetingPastPhotosMobile;
