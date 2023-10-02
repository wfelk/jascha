import { FC } from "react";
import AboutCarousel from "./AboutCarousel";

interface Props {
  dict: any;
}

const About: FC<Props> = ({ dict }) => {
  return (
    <section className="h-screen snap-start will-change-scroll border-t-8 border-t-sky-400/50">
      <AboutCarousel dict={dict} />
    </section>
  );
};

export default About;
