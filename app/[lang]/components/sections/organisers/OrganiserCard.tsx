import { FC, ReactNode } from "react";
import Image from "next/image";

interface Props {
  name: string;
  children: ReactNode;
  imgSrc: any;
}

const OrganiserCard: FC<Props> = ({ name, children, imgSrc }) => {
  return (
    <article className="w-1/2 h-full flex flex-col">
      <div className="relative w-full h-2/5 max-h-2/5 bg-sky-100/25 min-h-2/5">
        <Image
          src={imgSrc}
          alt={name}
          width={200}
          height={200}
          className="object-cover h-full border-4 border-sky-950/25"
        />
        <h3 className="absolute bottom-4 right-4 text-sky-200 text-2xl tracking-wider bg-sky-900/75 rounded p-2 drop-shadow-2xl">
          {name}
        </h3>
      </div>
      <div className="overflow-y-auto flex flex-col gap-8 h-3/5 max-h-3/5 min-h-3/5 p-4 text-sky-200/75">
        {children}
      </div>
    </article>
  );
};

export default OrganiserCard;
