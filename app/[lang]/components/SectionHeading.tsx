import React, { FC } from 'react';

interface Props {
  label: string;
  bgColor?: string;
}

const SectionHeading: FC<Props> = ({ label }) => {
  return (
    <h2
      className={`sm:text-4xl text-sky-200/75 h-1/8 tracking-wide font-light text-2xl py-4 rounded-l-lg px-6 md:bg-sky-700/25 bg-sky-500/50 w-1/2 self-end md:self-center md:px-8 md:rounded-lg md:w-full md:text-center md:tracking-wider first-letter:uppercase`}
    >
      {label}
    </h2>
  );
};

export default SectionHeading;
