import React, { FC } from 'react';
import type { Props } from '@/types/dictionary';
const AboutArticleWhat: FC<Props> = ({ dict }) => {
  return (
    <>
      <p>{dict.sections.about.carouselItems.item1.content.paragraph1}</p>
      <p>
        {
          dict.sections.about.carouselItems.item1.content.paragraph2
            ?.beforeEmphasis
        }{' '}
        <span className="font-bold text-sky-100">
          {dict.sections.about.carouselItems.item1.content.paragraph2?.emphasis}
        </span>{' '}
        {
          dict.sections.about.carouselItems.item1.content.paragraph2
            ?.afterEmphasis
        }
      </p>
      <p>{dict.sections.about.carouselItems.item1.content.paragraph3}</p>
    </>
  );
};

export default AboutArticleWhat;
