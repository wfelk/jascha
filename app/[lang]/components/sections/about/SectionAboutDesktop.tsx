import React, { FC } from 'react';
import Carousel from './components/desktop/AboutCarousel';
import type { Props } from '@/types/dictionary';

const SectionAboutDesktop: FC<Props> = ({ dict }) => {
  return (
    <div className="h-full hidden md:block will-change-scroll bg-gradient-to-tr from-sky-900 to-sky-400/50 rounded-lg">
      <Carousel dict={dict} />
    </div>
  );
};

export default SectionAboutDesktop;
