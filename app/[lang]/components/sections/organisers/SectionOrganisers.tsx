import { FC } from 'react';
import SectionHeading from '../../SectionHeading';
import SectionOrganisersMobile from './SectionOrganisersMobile';

interface Props {
  dict: any;
}

const SectionOrganisers: FC<Props> = ({ dict }) => {
  return (
    <section className="flex flex-col will-change-scroll pb-20 pt-20 md:col-span-8 md:col-start-3 xl:col-start-7 xl:col-span-5">
      <SectionHeading label={dict?.heading} />
      <SectionOrganisersMobile dict={dict} />
    </section>
  );
};

export default SectionOrganisers;
