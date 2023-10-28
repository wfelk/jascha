"use client";

import { FC } from "react";
import Button from "../../../../Button";

interface Props {
  dict: any;
}

const How: FC<Props> = ({ dict }) => {
  return (
    <>
      <p className="text-2xl mb-4 font-light">
        {dict?.carouselItems.item3.content.paragraph1}
      </p>
      <p>
        {dict?.carouselItems.item3.content.paragraph2.beforeEmphasis}{" "}
        <span className="font-bold text-sky-200">
          {dict?.carouselItems.item3.content.paragraph2.emphasis}
        </span>
      </p>
      <Button
        onClick={() => {}}
        className="bg-sky-200 hover:bg-sky-600 transition-all mt-12 cursor-pointer py-4 px-6 rounded-full font-mono text-sky-900 tracking-wider uppercase font-bold border-4 text-sm border-sky-600/75 ring-2 ring-sky-100/50 w-fit self-center sm:self-end"
      >
        <a href="https://www.meetup.com/jascha-cologne/" target="_blank">
          {dict.carouselItems.item3.content.button}
        </a>
      </Button>
    </>
  );
};

export default How;
