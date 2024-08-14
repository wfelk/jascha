import React, { FC } from 'react';

interface Props {
  label: string;
  isNextMeetingScheduled: boolean;
}

const SectionHeading: FC<Props> = ({ label, isNextMeetingScheduled }) => {
  return (
    <h2
      className={`sm:text-4xl  h-1/8 tracking-wide font-light text-2xl p-4 rounded-l-lg px-6w-1/2 self-end md:self-center md:px-8 md:rounded-lg md:w-full md:text-center md:tracking-wider ${isNextMeetingScheduled ? 'md:bg-teal-700/40 bg-teal-600/50 text-teal-200/75' : ' md:bg-orange-700/40 bg-orange-600/50 text-orange-200/75 '}`}
    >
      {label}
    </h2>
  );
};

export default SectionHeading;
