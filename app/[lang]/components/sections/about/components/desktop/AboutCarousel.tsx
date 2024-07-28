'use client';

import { useState, FC } from 'react';
import AboutCarouselTile from './AboutCarouselTile';
import getCarouselItems from '../../../../../../../utils/functions/getAboutCarouselItems';
import AboutControls from './AboutControls';

interface Props {
  dict: any;
}

const TextCarousel: FC<Props> = ({ dict }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = getCarouselItems(dict);

  const nextTile = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
  };

  const prevTile = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-between">
      <div className="w-full max-h-5/6 min-h-5/6 h-5/6 p-4">
        <AboutCarouselTile heading={carouselItems[currentIndex]?.heading}>
          {carouselItems[currentIndex].content}
        </AboutCarouselTile>
      </div>
      <AboutControls
        onLeftClick={prevTile}
        onRightClick={nextTile}
        carouselItems={carouselItems}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default TextCarousel;
