"use client";

import { useState, FC } from "react";
import IconArrowLeft from "../../icons/IconArrowLeft";
import IconArrowRight from "../../icons/IconArrowRight";
import Button from "../../Button";
import AboutCarouselTile from "./AboutCarouselTile";
import getCarouselTiles from "./getCarouselTiles";

interface Props {
  dict: any;
}

const TextCarousel: FC<Props> = ({ dict }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselTiles = getCarouselTiles(dict);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTiles.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselTiles.length) % carouselTiles.length
    );
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-between">
      <div className="w-full max-h-5/6 min-h-5/6 h-5/6">
        <AboutCarouselTile heading={carouselTiles[currentIndex]?.heading}>
          {carouselTiles[currentIndex].content}
        </AboutCarouselTile>
      </div>
      <div className="w-full flex items-center max-h-1/6 min-h-1/6 h-1/6 justify-evenly gap-16 py-6">
        <Button onClick={prevItem} className="">
          <IconArrowLeft className="fill-sky-200/75 w-12 h-12" />
        </Button>
        <Button onClick={nextItem} className="">
          <IconArrowRight className="fill-sky-200/75 w-12 h-12" />
        </Button>
      </div>
    </div>
  );
};

export default TextCarousel;
