import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

const AboutArticleWhom: FC = () => {
  const t = useTranslations('sections.about.carouselItems.item2.content');
  return (
    <>
      <ul className="list-disc px-4 flex flex-col gap-4 leading-normal">
        <li>{t('list.item1')}</li>
        <li>{t('list.item2')}</li>
        <li>{t('list.item3')}</li>
        <li>{t('list.item4')}</li>
      </ul>
      <p className="mt-6">
        {t('paragraph.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-200">
          {t('paragraph.emphasis')}
        </span>
      </p>
    </>
  );
};

export default AboutArticleWhom;
