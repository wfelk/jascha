import { FC } from "react";
import Flag from "./Flag";

interface Props {
  dict: any;
}

const Footer: FC<Props> = ({ dict }) => {
  return (
    <footer className="flex flex-col items-center gap-2 justify-center w-full text py-4 border-b-8 border-sky-800/50">
      <Flag
        className="w-[125px] h-[100px]"
        numOfColumns={20}
        staggeredDelay={17}
      />
      <div>
        <span className="text-sky-200/40 mr-2">{dict.quote.left}</span>
        <a
          href="https://www.youtube.com/watch?v=XPVIWPap7X0&ab_channel=MaxKorzh"
          target="_blank"
          className="text-sky-200/50 text-lg"
        >
          {dict.quote.center}
        </a>
        <span className="text-sky-200/40 ml-2">{dict.quote.right}</span>
      </div>
    </footer>
  );
};

export default Footer;
