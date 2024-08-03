import React, { FC } from 'react';
import SectionHeading from '../../SectionHeading';
import Organiser from './components/mobile/OrganisersOrganiser';
import imgAndrey from '/public/images/organisers/jascha-organiser-andrey.jpeg';
import imgWilhelm from '/public/images/organisers/jascha-organiser-wilhelm.jpeg';
import Andrey from './components/mobile/OrganisersOrganiserAndrey';
import Wilhelm from './components/mobile/OrganisersOrganiserWilhelm';
import type { Props } from '@/types/dictionary';

const SectionOrganisers: FC<Props> = ({ dict }) => {
  return (
    <section className="flex flex-col will-change-scroll mt-32 md:mt-0 md:col-span-8 md:col-start-3 xl:col-start-2 xl:col-span-10">
      <SectionHeading label={dict.sections.organisers.heading} />
      <div className="flex flex-col xl:flex-row xl:gap-24">
        <Organiser
          name={dict.sections.organisers.wilhelm.heading}
          imgSrc={imgWilhelm}
        >
          <Wilhelm dict={dict} />
        </Organiser>
        <Organiser
          name={dict.sections.organisers.andrey.heading}
          imgSrc={imgAndrey}
        >
          <Andrey dict={dict} />
        </Organiser>
      </div>
    </section>
  );
};

export default SectionOrganisers;
