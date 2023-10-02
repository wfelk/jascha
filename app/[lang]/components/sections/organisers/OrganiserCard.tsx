import { FC, ReactNode } from "react";
import Image from "next/image";

interface Props {
  name: string;
  children: ReactNode;
  imgSrc: any;
}

const OrganiserCard: FC<Props> = ({ name, children, imgSrc }) => {
  return (
    <article className="w-full h-1/2 drop-shadow-2xl relative flex py-4 px-2">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <Image
          src={imgSrc}
          alt={name}
          width={200}
          height={200}
          className="object-cover w-full rounded-l h-full"
        />
        <h3 className="text-sky-200 bg-sky-900/75 px-3 py-2 left-2 rounded-lg bottom-2 absolute tracking-widest">
          {name}
        </h3>
      </div>
      <div className="bg-sky-600/75 overflow-y-auto flex flex-col rounded-r gap-8 p-4 text-sky-100/90 w-full h-full">
        {children}
      </div>
    </article>
  );
};

export default OrganiserCard;
