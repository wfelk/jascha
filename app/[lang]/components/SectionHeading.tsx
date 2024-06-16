import { FC } from 'react';

interface Props {
  label: string;
  bgColor?: string;
}

const SectionHeading: FC<Props> = ({ label, bgColor = 'sky' }) => {
  return (
    <h2
      className={`sm:text-4xl text-sky-200/75 h-1/8 tracking-wide font-light text-2xl py-4 rounded-l-lg pl-6 bg-sky-600/50 w-1/2 self-end`}
    >
      {label}
    </h2>
  );
};

export default SectionHeading;
