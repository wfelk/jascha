import React, { ReactNode } from 'react';
import One from '@/src/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemOne';
import Two from '@/src/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemTwo';
import Three from '@/src/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemThree';
import { useTranslations } from 'next-intl';

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
  const className = `about-carousel-item max-w-full h-full flex-col flex gap-8 justify-center absolute ${
    isCurrentItem
      ? 'about-carousel-item--current-item'
      : isItemTheNextAfterCurrentItem
        ? 'about-carousel-item--next-item'
        : 'about-carousel-item--previous-item'
  }`;
  return className;
};

const getAboutCarouselItems = (): CarouselItem[] => {
  const t = useTranslations('sections.about.carouselItems');
  const carouselItems = [
    {
      heading: t('item1.heading'),
      getCarouselItem: (
        isCurrentItem: boolean,
        isItemTheNextAfterCurrentItem: boolean,
        index: number
      ) => (
        <One
          className={getClassName(isCurrentItem, isItemTheNextAfterCurrentItem)}
          key={index}
        />
      ),
    },
    {
      heading: t('item2.heading'),
      getCarouselItem: (
        isCurrentItem: boolean,
        isItemTheNextAfterCurrentItem: boolean,
        index: number
      ) => (
        <Two
          className={getClassName(isCurrentItem, isItemTheNextAfterCurrentItem)}
          key={index}
        />
      ),
    },
    {
      heading: t('item3.heading'),
      getCarouselItem: (
        isCurrentItem: boolean,
        isItemTheNextAfterCurrentItem: boolean,
        index: number
      ) => (
        <Three
          className={getClassName(isCurrentItem, isItemTheNextAfterCurrentItem)}
          key={index}
        />
      ),
    },
  ];
  return carouselItems;
};

export default getAboutCarouselItems;
