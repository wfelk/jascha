import React, { FC, ReactNode } from 'react';
interface Props {
  className?: string;
  children: string | ReactNode;
  onClick?: () => void;
}

export const classNameDefault =
  'bg-sky-100 hover:bg-sky-600 hover:text-sky-100 transition-all cursor-pointer py-4 px-8 rounded-full font-mono text-sky-900 tracking-wider uppercase font-bold border-4 border-sky-600/75 ring-2 ring-sky-100/50 mx-2 w-fit-content';

const Button: FC<Props> = ({
  className = classNameDefault,
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
