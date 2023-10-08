import React from "react";
import Button from "../../Button";

const getCarouselItems = (dict: any): any[] => {
  const carouselItems = [
    // item 1
    {
      heading: dict?.carouselItems.item1.heading,
      content: (
        <>
          <p>{dict?.carouselItems.item1.content.paragraph1}</p>
          <p className="text-lg">
            {dict?.carouselItems.item1.content.paragraph2.beforeEmphasis}{" "}
            <span className="font-bold text-sky-200">
              {dict?.carouselItems.item1.content.paragraph2.emphasis}
            </span>{" "}
            {dict?.carouselItems.item1.content.paragraph2.afterEmphasis}
          </p>
          <p>{dict?.carouselItems.item1.content.paragraph3}</p>
        </>
      ),
    },
    // item 2
    {
      heading: dict?.carouselItems.item2.heading,
      content: (
        <>
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
        </>
      ),
    },
    // item 3
    {
      heading: dict?.carouselItems.item3.heading,
      content: (
        <>
          <p className="text-2xl font-light">
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
            className="bg-sky-200 hover:bg-sky-600 transition-all cursor-pointer py-3 px-4 rounded-xl font-mono text-sky-900 tracking-wider uppercase font-bold border-4 border-sky-600/75 ring-2 ring-sky-100/50 w-fit self-center"
          >
            <a href="#">{dict.carouselItems.item3.content.button}</a>
          </Button>
        </>
      ),
    },
  ];

  return carouselItems;
};

export default getCarouselItems;
