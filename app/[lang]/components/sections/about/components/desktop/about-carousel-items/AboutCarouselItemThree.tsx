import React, { FC } from 'react';
import Button from '@/app/[lang]/components/Button';
import { classNameDefault } from '@/app/[lang]/components/Button';

interface Props {
  dict: any;
  className: string;
}

const AboutCarouselItemThree: FC<Props> = ({ dict, className }) => {
  return (
    <div className={className}>
      <p className="font-light text-3xl">
        {dict?.carouselItems.item3.content.paragraph1}
      </p>
      <p>
        {dict?.carouselItems.item3.content.paragraph2.beforeEmphasis}{' '}
        <span className="font-bold text-sky-200">
          {dict?.carouselItems.item3.content.paragraph2.emphasis}
        </span>
      </p>
      <Button className={`${classNameDefault} mt-8`}>
        <a href="#">{dict.carouselItems.item3.content.button}</a>
      </Button>
    </div>
  );
};

export default AboutCarouselItemThree;
