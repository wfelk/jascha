"use client";

import { FC, useEffect, useRef } from "react";
import PhotosDesktop from "./desktop/Photos";
import PhotosMobile from "./mobile/Photos";
import Thumbnails from "./desktop/Thumbnails";
import { Splide } from "@splidejs/react-splide";

const PhotoCarousel: FC = () => {
  const main = useRef<Splide>();
  const thumbnails = useRef<Splide>();

  useEffect(() => {
    main?.current?.sync(thumbnails?.current?.splide);
  }, [main, thumbnails]);

  return (
    <>
      <div className="md:hidden">
        <PhotosMobile />
      </div>
      <div className="hidden md:block">
        <PhotosDesktop ref={main} />
        <Thumbnails ref={thumbnails} />
      </div>
    </>
  );
};

export default PhotoCarousel;
