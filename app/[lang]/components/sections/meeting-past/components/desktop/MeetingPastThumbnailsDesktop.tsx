'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import { ForwardedRef, forwardRef } from 'react';
import photoSources from '../../../../../../../utils/constants/photoSources';
import NextImage from 'next/image';

const options = {
  rewind: false,
  fixedWidth: 104,
  fixedHeight: 58,
  isNavigation: true,
  gap: 15,
  focus: 'center' as const,
  pagination: false,
  cover: true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints: {
    640: {
      fixedWidth: 66,
      fixedHeight: 38,
    },
  },
};

const MeetingPastThumbnailsDesktop = forwardRef<Splide>(
  (_, ref: ForwardedRef<Splide>) => {
    return (
      <Splide ref={ref} options={options} aria-label="Text">
        {photoSources.map((photo: any, index: number) => (
          <SplideSlide key={index} style={{}}>
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

export default MeetingPastThumbnailsDesktop;
