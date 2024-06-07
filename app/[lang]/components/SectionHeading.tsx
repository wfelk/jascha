import { FC } from 'react';

interface Props {
  className: string;
  label: string;
}

const classNameDefault =
  'bg-sky-100 hover:bg-sky-600 hover:text-sky-100 transition-all cursor-pointer py-4 px-8 rounded-full font-mono text-sky-900 tracking-wider uppercase font-bold border-4 border-sky-600/75 ring-2 ring-sky-100/50';

const Heading: FC<Props> = ({ className = classNameDefault, label }) => {
  return (
    <h2 className="sm:text-4xl text-sky-200/75 h-1/8 tracking-wide font-light text-2xl py-4 rounded-l-lg pl-6 bg-teal-600/50 w-1/2 self-end">
      {label}
    </h2>
  );
};

export default Heading;
