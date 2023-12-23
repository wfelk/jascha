"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import { forwardRef } from "react";
import photoSources from "../photoSources";
import NextImage from "next/image";

const options = {
  rewind: true,
  fixedWidth: 104,
  fixedHeight: 58,
  isNavigation: true,
  gap: 10,
  focus: "center",
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

const Thumbnails = forwardRef((_, ref) => {
  return (
    <Splide ref={ref} options={options} aria-label="Text">
      {photoSources.map((photo, index) => (
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

Thumbnails.displayName = "Thumbnails";

export default Thumbnails;
