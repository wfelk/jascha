import { FC } from "react";
import AboutCarousel from "./AboutCarousel";

interface Props {
  dict: any;
}

const About: FC<Props> = ({ dict }) => {
  return (
    <section className="h-screen snap-start will-change-scroll">
      <AboutCarousel dict={dict} />
    </section>
  );
};

export default About;
