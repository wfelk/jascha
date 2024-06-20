'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import { ForwardedRef, forwardRef } from 'react';
import photos from '../../../../../../../utils/constants/photoSources';
import NextImage from 'next/image';

const options = {
  type: 'fade',
  heightRatio: 0.75,
  pagination: false,
  arrows: false,
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
              width={photo.width}
              height={photo.height}
            />
          </SplideSlide>
        ))}
      </Splide>
    );
  }
);

export default MeetingPastPhotosDesktop;
