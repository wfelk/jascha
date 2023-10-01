import { FC } from "react";
import AboutCarousel from "./AboutCarousel";

interface Props {
  dict: any;
}

const About: FC<Props> = ({ dict }) => {
  return (
    <div className="w-screen h-screen border-8 border-sky-900/50">
      <AboutCarousel dict={dict} />
    </div>
  );
};

export default About;
