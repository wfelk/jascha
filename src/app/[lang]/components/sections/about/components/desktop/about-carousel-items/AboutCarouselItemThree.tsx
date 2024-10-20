import React, { FC } from 'react';
import Button from '@/src/app/[lang]/components/Button';
import { classNameDefault } from '@/src/app/[lang]/components/Button';
import { useTranslations } from 'next-intl';
import isNextMeetingScheduled from '@/utils/constants/isNextMeetingScheduled';
import scrollSmoothlyTo from '@/utils/functions/scrollSmoothlyTo';
import useBelowBreakpointCheck from '@/utils/hooks/useBelowBreakpointCheck';

const AboutCarouselItemThree: FC<OnlyClassNameProps> = ({ className }) => {
  const t = useTranslations('sections.about.carouselItems.item3.content');
  const isMobileScreen = useBelowBreakpointCheck(1024);
  const handleClick = () => {
    scrollSmoothlyTo('next-meeting');
  };

  return (
    <div className={className}>
      <p className="font-light text-xl">{t('paragraph1')}</p>
      <p>
        {t('paragraph2.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-200">
          {t('paragraph2.emphasis')}
        </span>
      </p>
      {isNextMeetingScheduled ? (
        <Button
          className={`${classNameDefault} mt-8 lg:mt-0 2xl:mt-16 max-w-fit mx-auto`}
        >
          <a onClick={handleClick}>{t('button.nextMeetingScheduled')}</a>
        </Button>
      ) : isMobileScreen ? (
        <Button
          className={`${classNameDefault} mt-8 lg:mt-0 2xl:mt-16 max-w-fit mx-auto`}
        >
          <a onClick={handleClick}>{t('button.nextMeetingUnscheduled')}</a>
        </Button>
      ) : null}
    </div>
  );
};

export default AboutCarouselItemThree;
