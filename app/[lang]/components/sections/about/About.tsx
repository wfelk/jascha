import { FC } from "react";
import AboutCarousel from "./AboutCarousel";

interface Props {
  dict: any;
}

const About: FC<Props> = ({ dict }) => {
  return (
    <section className="h-screen will-change-scroll bg-gradient-to-tr from-sky-950 to-sky-900/50">
      <AboutCarousel dict={dict} />
    </section>
  );
};

export default About;
