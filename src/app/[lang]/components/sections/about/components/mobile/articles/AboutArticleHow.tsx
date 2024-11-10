'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

const AboutArticleHow: FC = () => {
  const t = useTranslations('sections.about.carouselItems.item3.content');
  return (
    <>
      <p className="text-3xl mb-4 font-light">{t('paragraph1')}</p>
      <p>
        {t('paragraph2.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-200">
          {t('paragraph2.emphasis')}
        </span>
      </p>
    </>
  );
};

export default AboutArticleHow;
