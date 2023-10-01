import { FC } from "react";
import AboutCarousel from "./AboutCarousel";

interface Props {
  dict: any;
}

const About: FC<Props> = ({ dict }) => {
  return (
    <section className="h-screen snap-start border-8 border-sky-900/50 will-change-scroll">
      <AboutCarousel dict={dict} />
    </section>
  );
};

export default About;
