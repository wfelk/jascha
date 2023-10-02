"use client";

import { FC } from "react";
import Button from "../../Button";
import HeroHeading from "./HeroHeading";
import HeroSubheading from "./HeroSubheading";
import HeroVideo from "./HeroVideo";

interface Props {
  dict: any;
}

const Hero: FC<Props> = ({ dict }) => {
  return (
    <section className="relative bg-sky-950/80 border-t-8 border-t-sky-500/50 h-screen flex-col flex justify-center items-center snap-start will-change-scroll">
      <HeroHeading label={dict.heading} />
      <HeroSubheading
        beforeEmphasis={dict.subheading.beforeEmphasis}
        emphasis={dict.subheading.emphasis}
      />
      <div className="w-full grow flex flex-col items-center justify-center">
        <Button onClick={() => {}}>{dict.button}</Button>
      </div>
      <HeroVideo videoSrc="https://v3.cdnpk.net/videvo_files/video/free/2020-02/large_watermarked/200223_Cafe_03_03_preview.mp4" />
    </section>
  );
};

export default Hero;
