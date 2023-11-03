import { FC } from "react";
import Flag from "./Flag";

const flagProps = {
  className: "w-[50px] h-[35px]",
  numOfColumns: 20,
  staggeredDelay: 17,
};

const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center gap-2 justify-center w-full text py-4 border-b-8 border-sky-800/50 opacity-75">
      <div className="flex items-center justify-around gap-8 rounded-2xl bg-sky-900 py-8 px-10">
        <Flag
          className={flagProps.className}
          numOfColumns={flagProps.numOfColumns}
          staggeredDelay={flagProps.staggeredDelay}
          flag="russia"
        />
        <Flag
          className={flagProps.className}
          numOfColumns={flagProps.numOfColumns}
          staggeredDelay={flagProps.staggeredDelay}
          flag="ukraine"
        />
        <Flag
          className={flagProps.className}
          numOfColumns={flagProps.numOfColumns}
          staggeredDelay={flagProps.staggeredDelay}
          flag="belarus"
        />
      </div>
    </footer>
  );
};

export default Footer;
