import React, { FC } from 'react';

interface Props {
  label: string;
  bgColor?: string;
}

const SectionHeading: FC<Props> = ({ label }) => {
  return (
    <h2
      className={`sm:text-4xl text-teal-200/75 h-1/8 tracking-wide font-light text-2xl py-4 rounded-l-lg pl-6 md:bg-teal-700/40 bg-teal-600/50 w-1/2 self-end md:self-center md:px-8 md:rounded-lg md:w-full md:text-center md:tracking-wider`}
    >
      {label}
    </h2>
  );
};

export default SectionHeading;
