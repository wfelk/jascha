import { FC } from 'react';
import SectionHeading from '../../SectionHeading';
import SectionOrganisersMobile from './SectionOrganisersMobile';

interface Props {
  dict: any;
}

const SectionOrganisers: FC<Props> = ({ dict }) => {
  return (
    <section className="flex flex-col will-change-scroll pb-20 pt-20">
      <SectionHeading label={dict?.heading} />
      <SectionOrganisersMobile dict={dict} />
    </section>
  );
};

export default SectionOrganisers;
