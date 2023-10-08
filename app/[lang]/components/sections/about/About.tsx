import { FC } from "react";
import AboutCarousel from "./AboutCarousel";
import MobileView from "./mobile/AboutMobileView";

interface Props {
  dict: any;
}

const About: FC<Props> = ({ dict }) => {
  return (
    <section>
      <div className="block md:hidden">
        <MobileView dict={dict} />
      </div>
      <div className="hidden md:block h-screen will-change-scroll bg-gradient-to-tr from-sky-950 to-sky-900/50">
        <AboutCarousel dict={dict} />
      </div>
    </section>
  );
};

export default About;
