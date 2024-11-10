import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

const AboutCarouselItemOne: FC<OnlyClassNameProps> = ({ className }) => {
  const t = useTranslations('sections.about.carouselItems.item1.content');
  return (
    <div className={`text-lg xl:text-2xl ${className}`}>
      <p>{t('paragraph1')}</p>
      <p>
        {t('paragraph2.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-200">
          {t('paragraph2.emphasis')}
        </span>{' '}
        {t('paragraph2.afterEmphasis')}
      </p>
      <p>{t('paragraph3')}</p>
    </div>
  );
};

export default AboutCarouselItemOne;
