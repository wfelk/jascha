import { FC } from "react";
import Organiser from "./Organiser";
import imgAndrey from "/public/images/organisers/jascha-organiser-andrey.jpeg";
import imgWilhelm from "/public/images/organisers/jascha-organiser-wilhelm.jpeg";
import Andrey from "./organisers/Andrey";
import Wilhelm from "./organisers/Wilhelm";

interface Props {
  dict: any;
}

const Organisers: FC<Props> = ({ dict }) => {
  return (
    <section className="md:hidden flex flex-col will-change-scroll pb-20 pt-20">
      <h2 className="sm:text-4xl text-sky-200/75 h-1/8 tracking-wide font-light text-2xl py-4 rounded-l-lg pl-6 bg-sky-700 w-1/2 self-end">
        {dict?.heading}
      </h2>
      <div className="flex flex-col">
        <Organiser name={dict?.wilhelm.heading} imgSrc={imgWilhelm}>
          <Wilhelm dict={dict} />
        </Organiser>
        <Organiser name={dict?.andrey.heading} imgSrc={imgAndrey}>
          <Andrey dict={dict} />
        </Organiser>
      </div>
    </section>
  );
};

export default Organisers;
