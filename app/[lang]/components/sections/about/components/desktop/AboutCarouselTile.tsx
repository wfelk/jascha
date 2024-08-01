import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  heading: string;
}

const AboutCarouselTile: FC<Props> = ({ heading, children }) => {
  return (
    <div className="rounded-lg w-full h-full min-h-[500px] flex flex-col justify-between">
      <h2 className="text-sky-950 h-1/8 tracking-wide font-light text-right text-4xl 2xl:text-5xl">
        {heading}
      </h2>
      <div className="relative text-md xl:text-2xl 2xl:text-3xl font-light tracking-widest h-full overflow-hidden w-full text-sky-300 leading-loose">
        {children}
      </div>
    </div>
  );
};

export default AboutCarouselTile;
