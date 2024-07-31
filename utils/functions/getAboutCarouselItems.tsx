import React, { ReactNode } from 'react';
import One from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemOne';
import Two from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemTwo';
import Three from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemThree';
import { Dictionary } from '@/types/dictionary';

export interface CarouselItem {
  heading: string;
  getCarouselItem: (
    isCurrentItem: boolean,
    isItemTheNextAfterCurrentItem: boolean,
    index: number
  ) => ReactNode;
}

const getClassName = (
  isCurrentItem: boolean,
  isItemTheNextAfterCurrentItem: boolean
) => {
  const className = `about-carousel-item max-w-full h-full flex-col flex xl:gap-16 gap-8 justify-center absolute ${
    isCurrentItem
      ? 'about-carousel-item--current-item'
      : isItemTheNextAfterCurrentItem
        ? 'about-carousel-item--next-item'
        : 'about-carousel-item--previous-item'
  }`;
  return className;
};

const getAboutCarouselItems = (dict: Dictionary): CarouselItem[] => {
  const carouselItems = [
    {
      heading: dict.sections.about.carouselItems.item1.heading,
      getCarouselItem: (
        isCurrentItem: boolean,
        isItemTheNextAfterCurrentItem: boolean,
        index: number
      ) => (
        <One
          dict={dict}
          className={getClassName(isCurrentItem, isItemTheNextAfterCurrentItem)}
          key={index}
        />
      ),
    },
    {
      heading: dict.sections.about.carouselItems.item2.heading,
      getCarouselItem: (
        isCurrentItem: boolean,
        isItemTheNextAfterCurrentItem: boolean,
        index: number
      ) => (
        <Two
          dict={dict}
          className={getClassName(isCurrentItem, isItemTheNextAfterCurrentItem)}
          key={index}
        />
      ),
    },
    {
      heading: dict.sections.about.carouselItems.item3.heading,
      getCarouselItem: (
        isCurrentItem: boolean,
        isItemTheNextAfterCurrentItem: boolean,
        index: number
      ) => (
        <Three
          dict={dict}
          className={getClassName(isCurrentItem, isItemTheNextAfterCurrentItem)}
          key={index}
        />
      ),
    },
  ];
  return carouselItems;
};

export default getAboutCarouselItems;
