import { FC } from 'react';
import Carousel from './components/desktop/AboutCarousel';

interface Props {
  dict: any;
}

const SectionAboutDesktop: FC<Props> = ({ dict }) => {
  return (
    <div className="hidden md:block h-screen will-change-scroll bg-gradient-to-tr from-sky-950 to-sky-900/50">
      <Carousel dict={dict} />
    </div>
  );
};

export default SectionAboutDesktop;
