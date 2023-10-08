"use client";

import { FC } from "react";
import Button from "../../../Button";

interface Props {
  dict: any;
}

const AboutArticleHow: FC<Props> = ({ dict }) => {
  return (
    <article className="bg-gradient-to-tr from-sky-950 to-sky-900 px-6 pb-20 pt-12 flex flex-col gap-12">
      <h2 className="text-sky-300/75 h-1/8 tracking-wider font-light text-right text-2xl">
        {dict.carouselItems.item3.heading}
      </h2>
      <div className="text-lg tracking-wider text-sky-200/90 flex flex-col gap-6">
        <p className="text-xl font-light">
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
          className="bg-sky-200 hover:bg-sky-600 transition-all mt-12 cursor-pointer py-4 px-6 rounded-xl font-mono text-sky-900 tracking-wider uppercase font-bold border-4 text-sm border-sky-600/75 ring-2 ring-sky-100/50 w-fit self-center"
        >
          <a href="#">{dict.carouselItems.item3.content.button}</a>
        </Button>
      </div>
    </article>
  );
};

export default AboutArticleHow;
