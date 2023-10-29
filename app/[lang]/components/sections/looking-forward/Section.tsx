import { FC } from "react";

interface Props {
  dict: any;
}

const LookingForward: FC<Props> = ({ dict }) => {
  return (
    <section className="bg-gradient-to-tr from-sky-700/75 via-sky-600/75 to-sky-400/75 w-full p-4 text-sky-950/90 tracking-wide flex items-center justify-center text-2xl drop-shadow-2xl">
      {dict.content}
    </section>
  );
};

export default LookingForward;
