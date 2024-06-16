import { FC } from 'react';
import Mobile from './SectionAboutMobile';
import Desktop from './SectionAboutDesktop';

interface Props {
  dict: any;
}

const SectionAbout: FC<Props> = ({ dict }) => {
  return (
    <section>
      <Mobile dict={dict} />
      <Desktop dict={dict} />
    </section>
  );
};

export default SectionAbout;
