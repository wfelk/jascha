import { FC } from "react";
import OrganiserCard from "./OrganiserCard";
import imgAndrey from "/public/images/organiser-andrey.jpeg";
import imgWilhelm from "/public/images/organiser-wilhelm.jpeg";

interface Props {
  dict: any;
}

const Organisers: FC<Props> = ({ dict }) => {
  return (
    <section className="h-screen snap-start flex flex-col will-change-scroll">
      <h2 className="p-6 bg-gradient-to-r from-sky-950 to-sky-900 text-sky-400/75 h-1/8 tracking-wide font-light text-2xl">
        {dict?.heading}
      </h2>
      <div className="flex flex-col w-full h-7/8 overflow-y-auto">
        <OrganiserCard name={dict?.andrey.heading} imgSrc={imgAndrey}>
          <>
            <p>
              {dict?.andrey.content.paragraph1.beforeEmphasis}{" "}
              <span className="font-bold text-sky-100">
                {dict?.andrey.content.paragraph1.emphasis}
              </span>
            </p>
            <p>
              {dict?.andrey.content.paragraph2.beforeEmphasis}{" "}
              <span className="font-bold text-sky-100">
                {dict?.andrey.content.paragraph2.emphasis}
              </span>{" "}
              {dict?.andrey.content.paragraph2.afterEmphasis}
            </p>
          </>
        </OrganiserCard>
        <OrganiserCard name={dict?.wilhelm.heading} imgSrc={imgWilhelm}>
          <>
            <p>{dict?.wilhelm.content.paragraph1}</p>
            <p>
              {dict?.wilhelm.content.paragraph2.beforeEmphasis}{" "}
              <span className="font-bold text-sky-100">
                {dict?.wilhelm.content.paragraph2.emphasis}
              </span>{" "}
              {dict?.wilhelm.content.paragraph2.afterEmphasis}
            </p>
          </>
        </OrganiserCard>
      </div>
    </section>
  );
};

export default Organisers;
