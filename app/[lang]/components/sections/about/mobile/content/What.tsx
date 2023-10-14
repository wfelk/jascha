import { FC } from "react";

interface Props {
  dict: any;
}

const What: FC<Props> = ({ dict }) => {
  return (
    <>
      <p>{dict?.carouselItems.item1.content.paragraph1}</p>
      <p>
        {dict?.carouselItems.item1.content.paragraph2.beforeEmphasis}{" "}
        <span className="font-bold text-sky-100">
          {dict?.carouselItems.item1.content.paragraph2.emphasis}
        </span>{" "}
        {dict?.carouselItems.item1.content.paragraph2.afterEmphasis}
      </p>
      <p>{dict?.carouselItems.item1.content.paragraph3}</p>
    </>
  );
};

export default What;
