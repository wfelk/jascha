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
      <div className="md:hidden py-4 from-sky-700/50 to-sky-600/75 bg-gradient-to-tr">
        <PhotosMobile />
      </div>
      <div className="hidden md:flex from-sky-700/50 to-sky-600/75 bg-gradient-to-tr py-6 flex-col gap-4">
        <PhotosDesktop ref={main} />
        <Thumbnails ref={thumbnails} />
      </div>
    </>
  );
};

export default PhotoCarousel;
