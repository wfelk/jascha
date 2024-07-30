import React from 'react';
import One from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemOne';
import Two from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemTwo';
import Three from '@/app/[lang]/components/sections/about/components/desktop/about-carousel-items/AboutCarouselItemThree';

const getAboutCarouselItems = (dict: any): any[] => {
  const carouselItems = [
    {
      heading: dict?.carouselItems.item1.heading,
      content: <One dict={dict} />,
    },
    {
      heading: dict?.carouselItems.item2.heading,
      content: <Two dict={dict} />,
    },
    {
      heading: dict?.carouselItems.item3.heading,
      content: <Three dict={dict} />,
    },
  ];

  return carouselItems;
};

export default getAboutCarouselItems;
