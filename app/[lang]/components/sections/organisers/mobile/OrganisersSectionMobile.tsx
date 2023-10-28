import { FC } from "react";
import Article from "./OrganisersArticleMobile";
import imgAndrey from "/public/images/organiser-andrey.jpeg";
import imgWilhelm from "/public/images/organiser-wilhelm.jpeg";
import Andrey from "./content/Andrey";
import Wilhelm from "./content/Wilhelm";

interface Props {
  dict: any;
}

const Organisers: FC<Props> = ({ dict }) => {
  return (
    <section className="md:hidden flex flex-col will-change-scroll pb-20 pt-20 bg-pattern-wallpaper">
      <h2 className="sm:text-4xl text-sky-200/75 h-1/8 tracking-wide font-light text-2xl py-4 rounded-l-lg pl-6 bg-sky-800 w-1/2 self-end">
        {dict?.heading}
      </h2>
      <div className="flex flex-col">
        <Article name={dict?.andrey.heading} imgSrc={imgAndrey}>
          <Andrey dict={dict} />
        </Article>
        <Article name={dict?.wilhelm.heading} imgSrc={imgWilhelm}>
          <Wilhelm dict={dict} />
        </Article>
      </div>
    </section>
  );
};

export default Organisers;