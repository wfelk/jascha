"use client";

import { FC } from "react";
import Button from "../../Button";

interface Props {
  dict: any;
}

const Hero: FC<Props> = ({ dict }) => {
  return (
    <section className="border-8 border-sky-500/50 relative bg-sky-950/80 h-screen flex-col flex justify-center items-center snap-start will-change-scroll">
      <div className="w-full grow flex flex-col items-center justify-end mb-12">
        <h1 className="text-7xl text-sky-100/80 uppercase tracking-wider font-thin">
          {dict.heading}
        </h1>
      </div>
      <div className="w-full flex flex-col items-center gap-2 justify-center bg-sky-500/50 py-4">
        <span className="tracking-wide font-semibold inline-block text-sky-200 text-center">
          {dict.subheading.beforeEmphasis}
        </span>
        <span className="text-2xl text-sky-300 font-light inline-block uppercase tracking-widest">
          {dict.subheading.emphasis}
        </span>
      </div>
      <div className="w-full grow flex flex-col items-center justify-center">
        <Button onClick={() => {}}>{dict.button}</Button>
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
    </section>
  );
};

export default Hero;
