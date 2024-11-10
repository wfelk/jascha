import React from 'react';
import IconArrowUpRight from '../../../icons/IconArrowUpRight';
import useStore from '@/store';

interface Props {
  label: string;
  isNextMeetingScheduled: boolean;
}

const Button = ({ label, isNextMeetingScheduled }: Props) => {
  const address = useStore(state => state.nextMeeting?.address?.full);
  return isNextMeetingScheduled ? (
    <button
      className={`bg-gradient-to-tr uppercase flex font-mono py-6 tracking-widest text-lg items-center justify-center relative overflow-hidden gap-1 md:rounded-b-lg transition-all group via-teal-500/75 to-teal-400/50 from-teal-700 hover:via-teal-700/75 hover:to-teal-800/50 hover:from-teal-900 w-full text-teal-950/75 hover:text-teal-400`}
    >
      <a
        href={`https://www.google.de/maps/search/${address}`}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
      <IconArrowUpRight
        className={`w-8 h-8 transition-all fill-teal-950/40 group-hover:fill-teal-400`}
      />
    </button>
  ) : null;
};

export default Button;
