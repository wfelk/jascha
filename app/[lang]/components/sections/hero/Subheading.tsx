import { FC } from "react";

const Subheading: FC<{ beforeEmphasis: string; emphasis: string }> = ({
  beforeEmphasis,
  emphasis,
}) => {
  return (
    <div className="w-full flex flex-col drop-shadow-2xl items-center gap-2 justify-center bg-gradient-to-t px-4 sm:py-8 from-sky-600/60 to-sky-400/60 py-6">
      <span className="tracking-widest font-semibold inline-block text-sky-100/80 text-center sm:text-2xl">
        {beforeEmphasis}
      </span>
      <span className="text-2xl text-sky-300/75 font-light inline-block uppercase tracking-widest">
        {emphasis}
      </span>
    </div>
  );
};

export default Subheading;
