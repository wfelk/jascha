import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  heading: string;
}

const AboutCarouselTile: FC<Props> = ({ heading, children }) => {
  return (
    <div className="rounded-lg w-full h-full flex flex-col justify-between">
      <h2 className="p-8 text-sky-400/75 h-1/8 tracking-wide font-light text-right text-2xl">
        {heading}
      </h2>
      <div className="text-sm h-full flex flex-col px-8 overflow-y-auto">
        <div className="overflow-y-auto flex flex-col justify-evenly h-full w-full rounded gap-4 text-sky-300 leading-loose tracking-wide">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AboutCarouselTile;
