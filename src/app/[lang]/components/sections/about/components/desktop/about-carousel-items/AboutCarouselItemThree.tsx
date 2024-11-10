import React, { FC } from 'react';
import Button from '@/src/app/[lang]/components/Button';
import { classNameDefault } from '@/src/app/[lang]/components/Button';
import { useTranslations } from 'next-intl';
import scrollSmoothlyTo from '@/utils/functions/scrollSmoothlyTo';
import useBelowBreakpointCheck from '@/utils/hooks/useBelowBreakpointCheck';
import useStore from '@/store';

const AboutCarouselItemThree: FC<OnlyClassNameProps> = ({ className }) => {
  const t = useTranslations('sections.about.carouselItems.item3.content');
  const { isNextMeetingScheduled } = useStore();
  const isMobileScreen = useBelowBreakpointCheck(1024);
  const handleClick = () => {
    scrollSmoothlyTo('next-meeting');
  };

  return (
    <div className={`text-xl xl:text-2xl ${className}`}>
      <p className="font-light text-3xl xl:text-4xl">{t('paragraph1')}</p>
      <p className="leading-loose">
        {t('paragraph2.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-200">
          {t('paragraph2.emphasis')}
        </span>
      </p>
    </div>
  );
};

export default AboutCarouselItemThree;
