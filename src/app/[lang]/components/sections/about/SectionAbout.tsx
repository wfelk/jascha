import React, { FC } from 'react';
import Mobile from './SectionAboutMobile';
import Desktop from './SectionAboutDesktop';

const SectionAbout: FC = () => {
  return (
    <section className="md:col-span-8 md:col-start-3 lg:col-start-7 lg:col-span-5 mt-32 md:mt-0">
      <Mobile />
      <Desktop />
    </section>
  );
};

export default SectionAbout;
