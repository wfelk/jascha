'use client';

import React, { FC } from 'react';
import MeetingPastMobile from './SectionMeetingPastMobile';
import MeetingPastDesktop from './SectionMeetingPastDesktop';
import SectionHeading from '../../SectionHeading';

interface Props {
  dict: any;
}

const SectionMeetingPast: FC<Props> = ({ dict }) => {
  return (
    <section className="flex flex-col will-change-scroll mt-20 md:mt-0 gap-12 md:col-span-8 md:col-start-3 xl:col-start-3 xl:col-span-8">
      <SectionHeading label={dict?.heading} />
      <MeetingPastMobile />
      <MeetingPastDesktop />
    </section>
  );
};

export default SectionMeetingPast;
