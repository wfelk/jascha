import React, { FC } from 'react';
import type { Props } from '@/types/dictionary';
const AboutArticleWhom: FC<Props> = ({ dict }) => {
  return (
    <>
      <ul className="list-disc px-4 flex flex-col gap-4 leading-normal">
        <li>{dict.sections.about.carouselItems.item2.content.list?.item1}</li>
        <li>{dict.sections.about.carouselItems.item2.content.list?.item2}</li>
        <li>{dict.sections.about.carouselItems.item2.content.list?.item3}</li>
        <li>{dict.sections.about.carouselItems.item2.content.list?.item4}</li>
      </ul>
      <p className="mt-6">
        {
          dict.sections.about.carouselItems.item2.content.paragraph2
            ?.beforeEmphasis
        }{' '}
        <span className="font-bold text-sky-200">
          {dict.sections.about.carouselItems.item2.content.paragraph2?.emphasis}
        </span>
      </p>
    </>
  );
};

export default AboutArticleWhom;
