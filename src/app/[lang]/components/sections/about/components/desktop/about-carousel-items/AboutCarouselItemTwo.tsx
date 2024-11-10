import React from 'react';
import { useTranslations } from 'next-intl';

const AboutCarouselItemTwo = ({ className }: OnlyClassNameProps) => {
  const t = useTranslations('sections.about.carouselItems.item2.content');
  return (
    <div className={`text-lg leading-loose xl:text-xl ${className}`}>
      <ul className="list-disc px-6 flex flex-col gap-2 xl:gap-6">
        <li>{t('list.item1')}</li>
        <li>{t('list.item2')}</li>
        <li>{t('list.item3')}</li>
        <li>{t('list.item4')}</li>
      </ul>
      <p className="xl:text-2xl leading-loose">
        {t('paragraph.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-200">
          {t('paragraph.emphasis')}
        </span>
      </p>
    </div>
  );
};

export default AboutCarouselItemTwo;
