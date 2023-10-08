import { FC } from "react";

interface Props {
  dict: any;
}

const AboutArticleWhat: FC<Props> = ({ dict }) => {
  return (
    <article className="bg-gradient-to-tr from-sky-950 to-sky-900 px-6 pb-20 pt-12 flex flex-col gap-12">
      <h2 className="text-sky-400/75 h-1/8 tracking-wider font-light text-right text-2xl">
        {dict.carouselItems.item1.heading}
      </h2>
      <div className="text-lg tracking-wider text-sky-200/90 flex flex-col gap-4">
        <p>{dict?.carouselItems.item1.content.paragraph1}</p>
        <p className="text-lg">
          {dict?.carouselItems.item1.content.paragraph2.beforeEmphasis}{" "}
          <span className="font-bold text-sky-100">
            {dict?.carouselItems.item1.content.paragraph2.emphasis}
          </span>{" "}
          {dict?.carouselItems.item1.content.paragraph2.afterEmphasis}
        </p>
        <p>{dict?.carouselItems.item1.content.paragraph3}</p>
      </div>
    </article>
  );
};

export default AboutArticleWhat;
