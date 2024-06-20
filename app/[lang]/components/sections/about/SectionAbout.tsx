import { FC } from 'react';
import Mobile from './SectionAboutMobile';
import Desktop from './SectionAboutDesktop';

interface Props {
  dict: any;
}

const SectionAbout: FC<Props> = ({ dict }) => {
  return (
    <section className="md:col-span-8 md:col-start-3 xl:col-start-7 xl:col-span-5">
      <Mobile dict={dict} />
      <Desktop dict={dict} />
    </section>
  );
};

export default SectionAbout;
