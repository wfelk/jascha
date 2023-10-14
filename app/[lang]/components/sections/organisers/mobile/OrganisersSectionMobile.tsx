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
    <section className="md:hidden bg-gradient-to-tr from-sky-800/50 to-sky-700 flex flex-col will-change-scroll pb-20 pt-12 bg-pattern-wallpaper">
      <h2 className="px-[15vw] sm:px-16 sm:text-4xl text-sky-200/75 h-1/8 tracking-wide font-light text-2xl text-right">
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
