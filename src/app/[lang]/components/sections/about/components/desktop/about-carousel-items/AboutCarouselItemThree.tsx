import React, { FC } from 'react';
import Button from '@/src/app/[lang]/components/Button';
import { classNameDefault } from '@/src/app/[lang]/components/Button';
import type Props from '@/types/className';
import { useTranslations } from 'next-intl';

const AboutCarouselItemThree: FC<Props> = ({ className }) => {
  const t = useTranslations('sections.about.carouselItems.item3.content');
  return (
    <div className={className}>
      <p className="font-light text-xl">{t('paragraph1')}</p>
      <p>
        {t('paragraph2.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-200">
          {t('paragraph2.emphasis')}
        </span>
      </p>
      <Button
        className={`${classNameDefault} mt-8 lg:mt-0 2xl:mt-16 max-w-fit mx-auto`}
      >
        <a href="#">{t('button')}</a>
      </Button>
    </div>
  );
};

export default AboutCarouselItemThree;
