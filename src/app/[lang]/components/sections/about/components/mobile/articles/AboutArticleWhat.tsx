import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
const AboutArticleWhat: FC = () => {
  const t = useTranslations('sections.about.carouselItems.item1.content');
  return (
    <>
      <p>{t('paragraph1')}</p>
      <p>
        {t('paragraph2.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-100">
          {t('paragraph2.emphasis')}
        </span>{' '}
        {t('paragraph2.afterEmphasis')}
      </p>
      <p>{t('paragraph3')}</p>
    </>
  );
};

export default AboutArticleWhat;
