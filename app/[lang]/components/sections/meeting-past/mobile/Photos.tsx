"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import { FC } from "react";
import photos from "../photoSources";
import NextImage from "next/image";

const options = {
  type: "loop",
  cover: true,
  arrows: false,
  heightRatio: 0.75,
};

const Photos: FC = () => {
  return (
    <Splide options={options} aria-label="Text">
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
};

export default Photos;
