import { FC } from "react";

interface Props {
  dict: any;
}

const AboutArticleWhom: FC<Props> = ({ dict }) => {
  return (
    <article className="bg-gradient-to-tr from-sky-700/50 to-sky-600/75 px-6 pb-20 pt-12 flex flex-col gap-12">
      <h2 className="text-sky-300/75 h-1/8 tracking-wider font-light text-right text-2xl">
        {dict.carouselItems.item2.heading}
      </h2>
      <div className="text-lg tracking-wider text-sky-200/90 flex flex-col gap-4">
        <ul className="list-disc px-4 flex flex-col gap-2">
          <li>{dict?.carouselItems.item2.content.list.item1}</li>
          <li>{dict?.carouselItems.item2.content.list.item2}</li>
          <li>{dict?.carouselItems.item2.content.list.item3}</li>
          <li>{dict?.carouselItems.item2.content.list.item4}</li>
        </ul>
        <p className="text-lg">
          {dict?.carouselItems.item2.content.paragraph.beforeEmphasis}{" "}
          <span className="font-bold text-sky-200">
            {dict?.carouselItems.item2.content.paragraph.emphasis}
          </span>
        </p>
      </div>
    </article>
  );
};

export default AboutArticleWhom;
