'use client';

import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/bundle';
import Image from 'next/image';
import type Props from '../../../../../types/swiper';

const SwiperEffectCards: FC<Props> = ({ className, images, screenSize }) => {
  return (
    <Swiper
      effect={'cards'}
      className={className?.swiper}
      grabCursor={true}
      centeredSlides={true}
      modules={[EffectCards]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={className?.slide}>
          {({ isActive }) => (
            <Image
              src={image.src[screenSize]}
              alt={image.alt}
              className={`${className?.image?.default} ${isActive ? className?.image?.isActive : className?.image?.isNotActive}`}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperEffectCards;
