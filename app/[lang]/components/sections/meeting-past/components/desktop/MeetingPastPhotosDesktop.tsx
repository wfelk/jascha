'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import { ForwardedRef, forwardRef } from 'react';
import photos from '../../../../../../../utils/constants/photoSources';
import NextImage from 'next/image';

const options = {
  type: 'fade',
  heightRatio: 1,
  pagination: false,
  paginationKeyboard: true,
  padding: 70,
  drag: true,
  arrows: true,
  autoplay: true,
  interval: 5000,
};

const MeetingPastPhotosDesktop = forwardRef<Splide>(
  (props, ref: ForwardedRef<Splide>) => {
    return (
      <Splide ref={ref} options={options} aria-label="Text">
        {photos.map((photo: any, index: any) => (
          <SplideSlide key={index}>
            <NextImage
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto"
            />
          </SplideSlide>
        ))}
      </Splide>
    );
  }
);

export default MeetingPastPhotosDesktop;
