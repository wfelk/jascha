"use client";

import { useState, FC } from "react";
import IconArrowLeft from "../../icons/IconArrowLeft";
import IconArrowRight from "../../icons/IconArrowRight";
import Button from "../../Button";
import AboutCarouselTile from "./AboutCarouselTile";
import getCarouselTiles from "./getCarouselTiles";
import { Transition } from "@headlessui/react";

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
      <div className="w-full flex items-center justify-center max-h-1/6 min-h-1/6 h-1/6 py-6 px-4 gap-6">
        <Button onClick={prevItem} className="flex items-center">
          <IconArrowLeft className="fill-sky-200/75 w-12 h-12" />
        </Button>
        <div className="w-1/3 flex items-center justify-center">
          {carouselTiles.map((_, index) => (
            <span
              key={index}
              className={`inline-block mx-1 w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-sky-200/50" : "bg-sky-800"
              }`}
            ></span>
          ))}
        </div>
        <Button onClick={nextItem} className="flex items-center justify-end">
          <IconArrowRight className="fill-sky-200/75 w-12 h-12" />
        </Button>
      </div>
    </div>
  );
};

export default TextCarousel;
