import React, { FC } from 'react';
import IconArrowUpRight from '../../../icons/IconArrowUpRight';

interface Props {
  label: string;
}

const Button: FC<Props> = ({ label }) => {
  return (
    <button className="bg-gradient-to-tr via-teal-500/75 to-teal-400/50 from-teal-700 hover:via-teal-700/75 hover:to-teal-800/50 hover:from-teal-900 w-full text-teal-950/75 uppercase font-mono py-8 tracking-widest text-lg flex items-center justify-center relative overflow-hidden gap-2 md:rounded-b-lg transition-all hover:text-teal-400 group">
      <a href="https://www.meetup.com/jascha-cologne/" target="_blank">
        {label}
      </a>
      <IconArrowUpRight className="w-8 h-8 fill-teal-950/40 group-hover:fill-teal-400 transition-all" />
    </button>
  );
};

export default Button;
