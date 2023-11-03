import { FC } from "react";
import Flag from "./Flag";

interface Props {
  dict: any;
}

const Footer: FC<Props> = ({ dict }) => {
  return (
    <footer className="flex flex-col items-center gap-2 justify-center w-full text py-4 border-b-8 border-sky-800/50 bg-sky-900/50 opacity-75">
      <div className="flex items-center justify-around gap-8 py-4 px-6">
        <Flag
          className="w-[75px] h-[50px]"
          numOfColumns={20}
          staggeredDelay={17}
          flag="russia"
        />
        <Flag
          className="w-[75px] h-[50px]"
          numOfColumns={20}
          staggeredDelay={17}
          flag="ukraine"
        />
        <Flag
          className="w-[75px] h-[50px]"
          numOfColumns={20}
          staggeredDelay={17}
          flag="belarus"
        />
      </div>
    </footer>
  );
};

export default Footer;
