import React, { FC } from 'react';

interface Props {
  dict: any;
}

const AboutCarouselItemTwo: FC<Props> = ({ dict }) => {
  return (
    <>
      <ul className="list-disc px-6 flex flex-col gap-2">
        <li>{dict?.carouselItems.item2.content.list.item1}</li>
        <li>{dict?.carouselItems.item2.content.list.item2}</li>
        <li>{dict?.carouselItems.item2.content.list.item3}</li>
        <li>{dict?.carouselItems.item2.content.list.item4}</li>
      </ul>
      <p>
        {dict?.carouselItems.item2.content.paragraph.beforeEmphasis}{' '}
        <span className="font-bold text-sky-200">
          {dict?.carouselItems.item2.content.paragraph.emphasis}
        </span>
      </p>
    </>
  );
};

export default AboutCarouselItemTwo;
