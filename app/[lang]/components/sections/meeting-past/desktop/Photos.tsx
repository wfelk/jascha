"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import { forwardRef } from "react";
import photos from "../photoSources";
import NextImage from "next/image";

const options = {
  type: "fade",
  heightRatio: 0.75,
  pagination: false,
  arrows: false,
  cover: true,
};

const Photos = forwardRef((_, ref) => {
  return (
    <Splide ref={ref} options={options} aria-label="Text">
      {photos.map((photo, index) => (
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
});

Photos.displayName = "Photos";

export default Photos;
