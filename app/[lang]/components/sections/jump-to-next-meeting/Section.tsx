import { FC } from "react";
import Button from "../../Button";

interface Props {
  dict: any;
}

const Section: FC<Props> = ({ dict: any }) => {
  return (
    <section className="flex flex-col will-change-scroll">
      <span className="sm:text-4xl text-sky-200/75 h-1/8 tracking-wide font-light text-2xl py-4 rounded-l-lg pl-6 bg-sky-900 w-1/2 self-end">
        Interessiert?
      </span>
      <div className="from-sky-950 to-sky-900 bg-gradient-to-tr">
        <span>Wir freuen uns auf deinen Besuch!</span>
      </div>
    </section>
  );
};

export default Section;
