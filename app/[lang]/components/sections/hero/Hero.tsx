"use client";

import { FC } from "react";
import Button from "../../Button";

interface Props {
  dict: any;
}

const Hero: FC<Props> = ({ dict }) => {
  return (
    <div className="border-8 border-sky-600 relative bg-sky-950/80 w-screen h-screen flex-col flex justify-center items-center">
      <div className="w-full grow flex flex-col items-center justify-end gap-12">
        <h1 className="text-8xl text-sky-100 uppercase tracking-wider font-thin">
          {dict.sections.hero.heading}
        </h1>
        <span className="max-w-1/2 text-xl font-semibold inline-block text-sky-200/75 text-center">
          {dict.sections.hero.subheading}
        </span>
      </div>
      <div className="w-full grow flex flex-col items-center justify-center">
        <Button label={dict.sections.hero.button} onClick={() => {}} />
      </div>
      <div className="absolute w-full h-full left-0 top-0 overflow-hidden -z-10">
        <video
          className="absolute w-full h-full left-0 top-0 object-cover"
          autoPlay
          muted
          loop
        >
          <source
            src="https://v3.cdnpk.net/videvo_files/video/free/2020-02/large_watermarked/200223_Cafe_03_03_preview.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Hero;
