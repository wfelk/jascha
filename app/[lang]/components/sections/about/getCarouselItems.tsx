import React from "react";
import Button from "../../Button";

const getCarouselTiles = (dict: any): any[] => {
  const carouselTiles = [
    // tile 1
    {
      heading: dict?.carouselTiles.tile1.heading,
      content: (
        <>
          <p>{dict?.carouselTiles.tile1.content.paragraph1}</p>
          <p className="text-lg">
            {dict?.carouselTiles.tile1.content.paragraph2.beforeEmphasis}{" "}
            <span className="font-bold text-sky-200">
              {dict?.carouselTiles.tile1.content.paragraph2.emphasis}
            </span>{" "}
            {dict?.carouselTiles.tile1.content.paragraph2.afterEmphasis}
          </p>
          <p>{dict?.carouselTiles.tile1.content.paragraph3}</p>
        </>
      ),
    },
    // tile 2
    {
      heading: dict?.carouselTiles.tile2.heading,
      content: (
        <>
          <ul className="list-disc px-4 flex flex-col gap-2">
            <li>{dict?.carouselTiles.tile2.content.list.item1}</li>
            <li>{dict?.carouselTiles.tile2.content.list.item2}</li>
            <li>{dict?.carouselTiles.tile2.content.list.item3}</li>
            <li>{dict?.carouselTiles.tile2.content.list.item4}</li>
          </ul>
          <p className="text-lg">
            {dict?.carouselTiles.tile2.content.paragraph.beforeEmphasis}{" "}
            <span className="font-bold text-sky-200">
              {dict?.carouselTiles.tile2.content.paragraph.emphasis}
            </span>
          </p>
        </>
      ),
    },
    // tile 3
    {
      heading: dict?.carouselTiles.tile3.heading,
      content: (
        <>
          <p className="text-2xl font-light">
            {dict?.carouselTiles.tile3.content.paragraph1}
          </p>
          <p>
            {dict?.carouselTiles.tile3.content.paragraph2.beforeEmphasis}{" "}
            <span className="font-bold text-sky-200">
              {dict?.carouselTiles.tile3.content.paragraph2.emphasis}
            </span>
          </p>
          <Button
            onClick={() => {}}
            className="bg-sky-200 hover:bg-sky-600 transition-all cursor-pointer py-3 px-4 rounded-xl font-mono text-sky-900 tracking-wider uppercase font-bold border-4 border-sky-600/75 ring-2 ring-sky-100/50 w-fit self-center"
          >
            <a href="#">{dict.carouselTiles.tile3.content.button}</a>
          </Button>
        </>
      ),
    },
  ];

  return carouselTiles;
};

export default getCarouselTiles;
