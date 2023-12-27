import { FC } from "react";
import Button from "../../Button";

interface Props {
  dict: any;
}

const LookingForward: FC<Props> = ({ dict }) => {
  return (
    <section className="flex flex-col items-center gap-12 py-12 mb-20 bg-gradient-to-tr from-sky-950 to-sky-900 border-b-4 border-b-sky-200/25">
      <div className="bg-gradient-to-tr from-sky-700/75 via-sky-600/75 to-sky-400/75 w-full p-4 text-sky-950/90 tracking-wide flex items-center justify-center text-2xl drop-shadow-2xl">
        {dict.content}
      </div>
      <Button>
        <a href="#next-meeting">
          <span>zum nächsten Treffen</span>
        </a>
      </Button>
    </section>
  );
};

export default LookingForward;
