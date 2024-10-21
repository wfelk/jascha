import React, { FC } from 'react';
import IconArrowUpRight from '../../../icons/IconArrowUpRight';

interface Props {
  label: string;
  isNextMeetingScheduled: boolean;
}

const Button: FC<Props> = ({ label, isNextMeetingScheduled }) => {
  return isNextMeetingScheduled ? (
    <button
      className={`bg-gradient-to-tr uppercase font-mono py-8 tracking-widest text-lg flex items-center justify-center relative overflow-hidden gap-2 md:rounded-b-lg transition-all group via-teal-500/75 to-teal-400/50 from-teal-700 hover:via-teal-700/75 hover:to-teal-800/50 hover:from-teal-900 w-full text-teal-950/75 hover:text-teal-400`}
    >
      <a href="#" target="_blank" rel="noreferrer">
        {label}
      </a>
      <IconArrowUpRight
        className={`w-8 h-8 transition-all fill-teal-950/40 group-hover:fill-teal-400`}
      />
    </button>
  ) : null;
};

export default Button;
