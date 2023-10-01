import { FC } from "react";

interface Props {
  className?: string;
  label: string;
  onClick: () => void;
}
const Button: FC<Props> = ({ className, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-sky-600 hover:bg-sky-500 transition-all cursor-pointer py-4 px-8 rounded-full drop-shadow-2xl font-mono text-sky-950 tracking-wider uppercase font-bold`}
    >
      {label}
    </button>
  );
};

export default Button;
