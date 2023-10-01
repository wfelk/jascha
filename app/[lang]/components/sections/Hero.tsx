import { FC } from "react";

interface Props {
  dict: any;
}

const Hero: FC<Props> = ({ dict }) => {
  return (
    <div className="border-2 w-screen h-screen flex-col flex justify-center items-center">
      <h1 className="text-7xl font-thin">{dict.sections.hero.heading}</h1>
      <span className="text-xl font-bold">{dict.sections.hero.subheading}</span>
    </div>
  );
};

export default Hero;
