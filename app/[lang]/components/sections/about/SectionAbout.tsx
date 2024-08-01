import React, { FC } from 'react';
import Mobile from './SectionAboutMobile';
import Desktop from './SectionAboutDesktop';
import type { Props } from '@/types/dictionary';

const SectionAbout: FC<Props> = ({ dict }) => {
  return (
    <section className="md:col-span-8 md:col-start-3 lg:col-start-7 lg:col-span-5 mt-20 md:mt-0">
      <Mobile dict={dict} />
      <Desktop dict={dict} />
    </section>
  );
};

export default SectionAbout;
