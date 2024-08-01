import React, { FC } from 'react';
import SectionHeading from '../../SectionHeading';
import SectionOrganisersMobile from './SectionOrganisersMobile';
import type { Props } from '@/types/dictionary';

const SectionOrganisers: FC<Props> = ({ dict }) => {
  return (
    <section className="flex flex-col will-change-scroll mt-20 md:mt-0 md:col-span-8 md:col-start-3 xl:col-start-3 xl:col-span-8">
      <SectionHeading label={dict.sections.organisers.heading} />
      <SectionOrganisersMobile dict={dict} />
    </section>
  );
};

export default SectionOrganisers;
