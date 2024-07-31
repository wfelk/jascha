'use client';

import React, { useState, FC } from 'react';
import AboutCarouselTile from './AboutCarouselTile';
import getCarouselItems from '../../../../../../../utils/functions/getAboutCarouselItems';
import AboutCarouselControls from './AboutCarouselControls';

interface Props {
  dict: any;
}

const AboutCarousel: FC<Props> = ({ dict }) => {
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
      <div className="w-full max-h-5/6 min-h-5/6 h-5/6 p-12">
        <AboutCarouselTile heading={carouselItems[currentIndex]?.heading}>
          {carouselItems.map((item, index) => {
            const isCurrentItem = index === currentIndex;
            const isIndexTheNextAfterCurrentItem =
              index === (currentIndex + 1) % carouselItems.length;
            return item.content(
              isCurrentItem,
              isIndexTheNextAfterCurrentItem,
              index
            );
          })}
        </AboutCarouselTile>
      </div>
      <AboutCarouselControls
        onLeftClick={prevTile}
        onRightClick={nextTile}
        carouselItems={carouselItems}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default AboutCarousel;
