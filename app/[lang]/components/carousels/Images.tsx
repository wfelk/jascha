"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import Image from "next/image";

interface Props {
  className?: string;
  images: {
    src: any;
    alt: string;
  }[];
}

const Images: FC<Props> = ({ className, images }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className={className}
      modules={[Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Images;
