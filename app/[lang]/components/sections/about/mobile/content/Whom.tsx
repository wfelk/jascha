import { FC } from "react";

interface Props {
  dict: any;
}

const Whom: FC<Props> = ({ dict }) => {
  return (
    <>
      <ul className="list-disc px-4 flex flex-col gap-4 leading-normal">
        <li>{dict?.carouselItems.item2.content.list.item1}</li>
        <li>{dict?.carouselItems.item2.content.list.item2}</li>
        <li>{dict?.carouselItems.item2.content.list.item3}</li>
        <li>{dict?.carouselItems.item2.content.list.item4}</li>
      </ul>
      <p className="mt-6">
        {dict?.carouselItems.item2.content.paragraph.beforeEmphasis}{" "}
        <span className="font-bold text-sky-200">
          {dict?.carouselItems.item2.content.paragraph.emphasis}
        </span>
      </p>
    </>
  );
};

export default Whom;
