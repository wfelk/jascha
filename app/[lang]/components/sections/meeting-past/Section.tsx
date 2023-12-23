"use client";

import { FC } from "react";
import Wrapper from "./Wrapper";

interface Props {
  dict: any;
}

const Section: FC<Props> = ({ dict }) => {
  return (
    <section className="flex flex-col will-change-scroll pb-20 pt-20">
      <h2 className="sm:text-4xl text-sky-200/75 h-1/8 tracking-wide font-light text-2xl py-4 rounded-l-lg pl-6 bg-sky-700 w-1/2 self-end">
        {dict?.heading}
      </h2>
      <Wrapper />
    </section>
  );
};

export default Section;
