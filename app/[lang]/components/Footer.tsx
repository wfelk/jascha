import { FC } from 'react';
import Flag from './Flag';

const flagProps = {
  className: 'w-[50px] h-[35px]',
  numOfColumns: 20,
  staggeredDelay: 17,
};

const Footer: FC = () => {
  return (
    <footer className="flex flex-col text-sky-800 items-center gap-2 justify-center w-full text py-4 border-b-8 border-sky-800/50 opacity-75 mt-40">
      Jascha
    </footer>
  );
};

export default Footer;
