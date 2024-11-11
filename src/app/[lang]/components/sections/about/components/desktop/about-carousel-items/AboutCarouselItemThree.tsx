import React from 'react';
import { useTranslations } from 'next-intl';

const AboutCarouselItemThree = ({ className }: OnlyClassNameProps) => {
  const t = useTranslations('sections.about.carouselItems.item3.content');

  return (
    <div className={`text-xl xl:text-2xl ${className}`}>
      <p className="font-light text-3xl xl:text-4xl">{t('paragraph1')}</p>
      <p>
        {t('paragraph2.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-200">
          {t('paragraph2.emphasis')}
        </span>
      </p>
    </div>
  );
};

export default AboutCarouselItemThree;
