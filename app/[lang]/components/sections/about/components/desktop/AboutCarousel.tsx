'use client';

import React, { useState, FC, ReactNode } from 'react';
import AboutCarouselTile from './AboutCarouselItem';
import getCarouselItems, { CarouselItem } from '../getAboutCarouselItems';
import AboutCarouselControls from './AboutCarouselControls';
import type { Props } from '@/types/dictionary';

const AboutCarousel: FC<Props> = ({ dict }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems: CarouselItem[] = getCarouselItems(dict);

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
          {carouselItems.map((item: CarouselItem, index: number): ReactNode => {
            const isCurrentItem = index === currentIndex;
            const isItemTheNextAfterCurrentItem =
              index === (currentIndex + 1) % carouselItems.length;
            const carouselItem = item.getCarouselItem(
              isCurrentItem,
              isItemTheNextAfterCurrentItem,
              index
            );
            return carouselItem;
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
