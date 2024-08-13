import React, { FC } from 'react';
import IconArrowUpRight from '../../../icons/IconArrowUpRight';

interface Props {
  label: string;
  isNextMeetingScheduled: boolean;
}

const Button: FC<Props> = ({ label, isNextMeetingScheduled }) => {
  return (
    <button
      className={`bg-gradient-to-tr uppercase font-mono py-8 tracking-widest text-lg flex items-center justify-center relative overflow-hidden gap-2 md:rounded-b-lg transition-all group ${isNextMeetingScheduled ? 'via-teal-500/75 to-teal-400/50 from-teal-700 hover:via-teal-700/75 hover:to-teal-800/50 hover:from-teal-900 w-full text-teal-950/75 hover:text-teal-400' : 'via-orange-500/75 to-orange-400/50 from-orange-700 hover:via-orange-700/75 hover:to-orange-800/50 hover:from-orange-900 w-full text-orange-950/75 hover:text-orange-400 cursor-not-allowed'}`}
      disabled={!isNextMeetingScheduled}
    >
      <a
        href="https://www.meetup.com/jascha-cologne/"
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
      <IconArrowUpRight
        className={`w-8 h-8 transition-all ${isNextMeetingScheduled ? 'fill-teal-950/40 group-hover:fill-teal-400' : 'fill-orange-950/40 group-hover:fill-orange-400'}`}
      />
    </button>
  );
};

export default Button;
