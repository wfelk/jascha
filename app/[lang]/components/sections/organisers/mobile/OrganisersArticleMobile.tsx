import { FC, ReactNode } from "react";
import Image from "next/image";

interface Props {
  name: string;
  children: ReactNode;
  imgSrc: any;
}

const imageLength = 250;

const OrganiserCard: FC<Props> = ({ name, children, imgSrc }) => {
  return (
    <article className="w-full drop-shadow-xl relative flex flex-col py-4 mt-[175px] sm:mt-[225px]">
      <div className="relative flex flex-col items-center justify-center">
        <div
          className={`absolute left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] border-8 rounded-lg ${
            name === "Wilhelm" ? "border-indigo-400/50" : "border-teal-400/50"
          } drop-shadow-xl`}
        >
          <Image
            src={imgSrc}
            alt={name}
            height={imageLength}
            width={imageLength}
            className="object-cover w-full h-full"
          />
          <h3
            className={`text-sky-100/80 ${
              name === "Wilhelm" ? "bg-indigo-600/95" : "bg-teal-600/95"
            } px-3 py-2 right-2 rounded-lg -bottom-6 text-center w-1/2 uppercase text-xl absolute tracking-widest`}
          >
            {name}
          </h3>
        </div>
      </div>
      <div
        className={`flex flex-col items-center bg-sky-800 pt-[175px] sm:pt-[225px] pb-16 text-sky-200/90 sm:text-xl text-lg`}
      >
        <div
          className={`justify-center flex flex-col gap-8 w-[calc(100px_+_50vw)] sm:w-[455px]`}
        >
          {children}
        </div>
      </div>
    </article>
  );
};

export default OrganiserCard;
