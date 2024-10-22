'use client';

import React, { FC } from 'react';
import MeetingPastMobile from './SectionMeetingPastMobile';
import MeetingPastDesktop from './SectionMeetingPastDesktop';
import SectionHeading from '../../SectionHeading';
import { useTranslations } from 'next-intl';

const SectionMeetingPast: FC = () => {
  const t = useTranslations('sections.photos');
  return (
    <section className="flex flex-col max-h-full will-change-scroll mt-32 md:mt-0 gap-12 md:col-span-8 md:col-start-3 xl:col-start-3 xl:col-span-8 overflow-y-clip">
      <SectionHeading label={t('heading')} />
      <MeetingPastMobile />
      <MeetingPastDesktop />
    </section>
  );
};

export default SectionMeetingPast;
