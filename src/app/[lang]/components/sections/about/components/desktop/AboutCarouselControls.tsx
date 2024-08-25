import React, { FC } from 'react';
import Button from '../../../../Button';
import IconArrowLeft from '../../../../icons/IconArrowLeft';
import IconArrowRight from '../../../../icons/IconArrowRight';
import type { CarouselItem } from '../getAboutCarouselItems';

interface Props {
  onLeftClick: () => void;
  onRightClick: () => void;
  carouselItems: CarouselItem[];
  currentIndex: number;
}

const AboutCarouselControls: FC<Props> = ({
  onLeftClick,
  onRightClick,
  carouselItems,
  currentIndex,
}) => {
  return (
    <div className="w-full flex items-center justify-center max-h-1/6 min-h-1/6 h-1/6 p-8 gap-6">
      <Button
        onClick={onLeftClick}
        className="flex items-center opacity-50 focus:outline-none"
      >
        <IconArrowLeft className="fill-sky-950 hover:fill-sky-300 transition-colors last:w-12 h-12" />
      </Button>
      <div className="w-1/3 flex items-center justify-center">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`inline-block mx-1 w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-sky-300/50' : 'bg-sky-950/50'
            }`}
          ></span>
        ))}
      </div>
      <Button
        onClick={onRightClick}
        className="flex items-center justify-end opacity-50 focus:outline-none"
      >
        <IconArrowRight className="fill-sky-950 w-12 h-12 hover:fill-sky-300 transition-colors" />
      </Button>
    </div>
  );
};

export default AboutCarouselControls;
