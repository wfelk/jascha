import React from 'react';
import One from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemOne';
import Two from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemTwo';
import Three from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemThree';

export interface CarouselItem {
  heading: string;
  content: (
    isCurrentItem: boolean,
    isIndexTheNextAfterCurrentItem: boolean,
    index: number
  ) => React.ReactNode;
}

const getClassName = (
  isCurrentItem: boolean,
  isIndexTheNextAfterCurrentItem: boolean
) => {
  const className = `max-w-full h-full flex-col flex xl:gap-16 gap-8 justify-center absolute duration-1000 ${
    isCurrentItem
      ? 'opacity-100 translate-x-0'
      : isIndexTheNextAfterCurrentItem
        ? 'opacity-0 translate-x-full'
        : 'opacity-0 -translate-x-full'
  }`;
  console.log(className);
  return className;
};

const getAboutCarouselItems = (dict: any): CarouselItem[] => {
  const carouselItems = [
    {
      heading: dict?.carouselItems.item1.heading,
      content: (
        isCurrentItem: boolean,
        isIndexTheNextAfterCurrentItem: boolean,
        index: number
      ) => (
        <One
          dict={dict}
          className={getClassName(
            isCurrentItem,
            isIndexTheNextAfterCurrentItem
          )}
          key={index}
        />
      ),
    },
    {
      heading: dict?.carouselItems.item2.heading,
      content: (
        isCurrentItem: boolean,
        isIndexTheNextAfterCurrentItem: boolean,
        index: number
      ) => (
        <Two
          dict={dict}
          className={getClassName(
            isCurrentItem,
            isIndexTheNextAfterCurrentItem
          )}
          key={index}
        />
      ),
    },
    {
      heading: dict?.carouselItems.item3.heading,
      content: (
        isCurrentItem: boolean,
        isIndexTheNextAfterCurrentItem: boolean,
        index: number
      ) => (
        <Three
          dict={dict}
          className={getClassName(
            isCurrentItem,
            isIndexTheNextAfterCurrentItem
          )}
          key={index}
        />
      ),
    },
  ];
  return carouselItems;
};

export default getAboutCarouselItems;
