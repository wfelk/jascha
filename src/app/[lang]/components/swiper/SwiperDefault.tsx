import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css/bundle';
import { Pagination } from 'swiper/modules';
import type Props from '../../../../types/swiper';

const SwiperDefault: FC<Props> = ({
  className,
  images,
  screenSize,
  options,
}) => {
  return (
    <Swiper
      className={className?.swiper}
      {...options}
      // TODO: Optimise
      modules={options?.pagination ? [Pagination] : []}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={className?.slide}>
          {() => (
            <Image
              src={image.src[screenSize]}
              alt={image.alt}
              className={className?.image?.default}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperDefault;
