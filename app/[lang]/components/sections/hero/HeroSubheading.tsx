import React, { FC } from "react";

const HeroSubheading: FC<{ beforeEmphasis: string; emphasis: string }> = ({
  beforeEmphasis,
  emphasis,
}) => {
  return (
    <div className="w-full flex flex-col drop-shadow-2xl items-center gap-2 justify-center bg-gradient-to-t from-sky-600/50 to-sky-400/50 py-4">
      <span className="tracking-widest font-semibold inline-block text-sky-200 text-center">
        {beforeEmphasis}
      </span>
      <span className="text-2xl text-sky-300 font-light inline-block uppercase tracking-widest">
        {emphasis}
      </span>
    </div>
  );
};

export default HeroSubheading;
