import React, { FC } from 'react';
import Carousel from './components/desktop/AboutCarousel';

const SectionAboutDesktop: FC = () => {
  return (
    <div className="h-full hidden md:block will-change-scroll bg-gradient-to-tr from-sky-900 to-sky-400/50 rounded-lg">
      <Carousel />
    </div>
  );
};

export default SectionAboutDesktop;
