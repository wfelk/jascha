import { FC } from 'react';
import Organiser from './components/mobile/OrganisersOrganiser';
import imgAndrey from '/public/images/organisers/jascha-organiser-andrey.jpeg';
import imgWilhelm from '/public/images/organisers/jascha-organiser-wilhelm.jpeg';
import Andrey from './components/mobile/OrganisersOrganiserAndrey';
import Wilhelm from './components/mobile/OrganisersOrganiserWilhelm';

interface Props {
  dict: any;
}

const SectionOrganisersMobile: FC<Props> = ({ dict }) => {
  return (
    <div className="flex flex-col md:hidden">
      <Organiser name={dict?.wilhelm.heading} imgSrc={imgWilhelm}>
        <Wilhelm dict={dict} />
      </Organiser>
      <Organiser name={dict?.andrey.heading} imgSrc={imgAndrey}>
        <Andrey dict={dict} />
      </Organiser>
    </div>
  );
};

export default SectionOrganisersMobile;
