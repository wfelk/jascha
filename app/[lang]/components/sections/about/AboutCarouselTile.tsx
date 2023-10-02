import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  heading: string;
}

const AboutCarouselTile: FC<Props> = ({ heading, children }) => {
  return (
    <div className="rounded-lg w-full h-full flex flex-col justify-between">
      <h2 className="p-6 text-sky-400/75 bg-gradient-to-r from-sky-950 to-sky-900 h-1/8 tracking-wide font-light text-2xl">
        {heading}
      </h2>
      <div className="w-full bg-gradient-to-b from-sky-400/25 to-sky-600/25 text-sm py-2 h-full flex flex-col overflow-y-auto">
        <div className="overflow-y-auto flex flex-col grow px-8 py-4 w-full h-4/5 gap-4 text-sky-300 leading-loose tracking-wide">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AboutCarouselTile;
