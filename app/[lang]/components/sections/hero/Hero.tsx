"use client";

import { FC } from "react";
import Button from "../../Button";
import HeroHeading from "./HeroHeading";
import HeroSubheading from "./HeroSubheading";
import HeroImage from "./HeroImage";
import cafe from "/public/images/cafe-1920-1280.jpeg";
import HeroSocial from "./HeroSocial";

interface Props {
  dict: any;
}

const Hero: FC<Props> = ({ dict }) => {
  return (
    <section className="relative bg-sky-950/80 border-t-8 border-t-sky-500/50 h-screen flex-col flex justify-center items-center will-change-scroll">
      <HeroSocial />
      <HeroHeading label={dict.heading} />
      <HeroSubheading
        beforeEmphasis={dict.subheading.beforeEmphasis}
        emphasis={dict.subheading.emphasis}
      />
      <HeroImage src={cafe} alt="people talking in a cafe" />
      <div className="w-full grow flex flex-col items-center justify-center">
        <Button onClick={() => {}}>{dict.button}</Button>
      </div>
    </section>
  );
};

export default Hero;
