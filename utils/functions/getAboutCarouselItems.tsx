import React from 'react';
import One from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemOne';
import Two from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemTwo';
import Three from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemThree';

export interface CarouselItem {
  heading: string;
  content: (
    isCurrentItem: boolean,
    isIndexTheNextAfterCurrentItem: boolean
  ) => React.ReactNode;
}

const className = (
  isCurrentItem: boolean,
  isIndexTheNextAfterCurrentItem: boolean
) =>
  `transition max-w-full h-full flex-col flex xl:gap-16 gap-8 justify-center absolute duration-1000 ${
    isCurrentItem
      ? 'opacity-100 translate-x-0'
      : isIndexTheNextAfterCurrentItem
        ? 'opacity-0 translate-x-full'
        : 'opacity-0 -translate-x-full'
  }`;

const getAboutCarouselItems = (dict: any): CarouselItem[] => {
  const carouselItems = [
    {
      heading: dict?.carouselItems.item1.heading,
      content: (
        isCurrentItem: boolean,
        isIndexTheNextAfterCurrentItem: boolean
      ) => (
        <One
          dict={dict}
          className={className(isCurrentItem, isIndexTheNextAfterCurrentItem)}
        />
      ),
    },
    {
      heading: dict?.carouselItems.item2.heading,
      content: (
        isCurrentItem: boolean,
        isIndexTheNextAfterCurrentItem: boolean
      ) => (
        <Two
          dict={dict}
          className={className(isCurrentItem, isIndexTheNextAfterCurrentItem)}
        />
      ),
    },
    {
      heading: dict?.carouselItems.item3.heading,
      content: (
        isCurrentItem: boolean,
        isIndexTheNextAfterCurrentItem: boolean
      ) => (
        <Three
          dict={dict}
          className={className(isCurrentItem, isIndexTheNextAfterCurrentItem)}
        />
      ),
    },
  ];

  return carouselItems;
};

export default getAboutCarouselItems;
