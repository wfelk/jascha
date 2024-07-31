import React, { FC } from 'react';
import type Props from '@/types/about-carousel-item';

const AboutCarouselItemOne: FC<Props> = ({ dict, className }) => {
  return (
    <div className={className}>
      <p>{dict.sections.about.carouselItems.item1.content.paragraph1}</p>
      <p>
        {
          dict.sections.about.carouselItems.item1.content.paragraph2
            ?.beforeEmphasis
        }{' '}
        <span className="font-bold text-sky-200">
          {dict.sections.about.carouselItems.item1.content.paragraph2?.emphasis}
        </span>{' '}
        {
          dict.sections.about.carouselItems.item1.content.paragraph2
            ?.afterEmphasis
        }
      </p>
      <p>{dict.sections.about.carouselItems.item1.content.paragraph3}</p>
    </div>
  );
};

export default AboutCarouselItemOne;
