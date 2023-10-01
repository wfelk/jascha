import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  heading: string;
}

const AboutCarouselTile: FC<Props> = ({ heading, children }) => {
  return (
    <div className="rounded-lg w-full h-full flex flex-col justify-between">
      <h2 className="p-6 text-sky-400/75 h-1/8 tracking-wide font-light text-xl">
        {heading}
      </h2>
      <div className="w-full bg-sky-800 text-sm py-2 h-full flex flex-col overflow-y-auto">
        <div className="bg-sky-800 overflow-y-auto flex flex-col grow px-6 py-4 w-full h-4/5 gap-4 text-sky-300 leading-loose tracking-wide">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AboutCarouselTile;
