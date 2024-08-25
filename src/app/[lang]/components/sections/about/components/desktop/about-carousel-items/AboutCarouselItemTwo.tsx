import React, { FC } from 'react';
import type Props from '@/types/about-carousel-item';

const AboutCarouselItemTwo: FC<Props> = ({ dict, className }) => {
  return (
    <div className={className}>
      <ul className="list-disc px-6 flex flex-col gap-2">
        <li>{dict.sections.about.carouselItems.item2.content.list?.item1}</li>
        <li>{dict.sections.about.carouselItems.item2.content.list?.item2}</li>
        <li>{dict.sections.about.carouselItems.item2.content.list?.item3}</li>
        <li>{dict.sections.about.carouselItems.item2.content.list?.item4}</li>
      </ul>
      <p>
        {
          dict.sections.about.carouselItems.item2.content.paragraph2
            ?.beforeEmphasis
        }{' '}
        <span className="font-bold text-sky-200">
          {dict.sections.about.carouselItems.item2.content.paragraph2?.emphasis}
        </span>
      </p>
    </div>
  );
};

export default AboutCarouselItemTwo;
