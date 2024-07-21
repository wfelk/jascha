'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/bundle';
import Image from 'next/image';

interface Props {
  className?: string;
  images: {
    src: any;
    alt: string;
  }[];
  screenSize: 'mobile' | 'desktop';
}

const ImageCarousel: FC<Props> = ({ className, images, screenSize }) => {
  return (
    <Swiper
      effect={'cards'}
      className={className}
      grabCursor={true}
      centeredSlides={true}
      modules={[EffectCards]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <Image
              src={image.src[screenSize]}
              alt={image.alt}
              className={`w-full transition ${!isActive ? 'blur' : 'border-8 rounded border-sky-300/50'}`}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
