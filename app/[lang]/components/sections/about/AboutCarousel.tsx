"use client";

import { useState, FC } from "react";
import AboutCarouselTile from "./AboutCarouselItem";
import getCarouselTiles from "./getCarouselItems";
import AboutControls from "./AboutControls";

interface Props {
  dict: any;
}

const TextCarousel: FC<Props> = ({ dict }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselTiles = getCarouselTiles(dict);

  const nextTile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTiles.length);
  };

  const prevTile = () => {
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
      <AboutControls
        onLeftClick={prevTile}
        onRightClick={nextTile}
        carouselTiles={carouselTiles}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default TextCarousel;
