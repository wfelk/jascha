import React, { FC } from 'react';
import Button from '@/app/[lang]/components/Button';
import { classNameDefault } from '@/app/[lang]/components/Button';
import type Props from '@/types/about-carousel-item';

const AboutCarouselItemThree: FC<Props> = ({ dict, className }) => {
  return (
    <div className={className}>
      <p className="font-light text-3xl">
        {dict.sections.about.carouselItems.item3.content.paragraph1}
      </p>
      <p>
        {
          dict.sections.about.carouselItems.item3.content.paragraph2
            ?.beforeEmphasis
        }{' '}
        <span className="font-bold text-sky-200">
          {dict.sections.about.carouselItems.item3.content.paragraph2?.emphasis}
        </span>
      </p>
      <Button className={`${classNameDefault} mt-8`}>
        <a href="#">{dict.sections.about.carouselItems.item3.content.button}</a>
      </Button>
    </div>
  );
};

export default AboutCarouselItemThree;
