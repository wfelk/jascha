"use client";

import { FC, ReactNode, useState } from "react";
import Image from "next/image";
import IconInformationCircle from "../../icons/IconInformationCircle";
import { Transition } from "@headlessui/react";

interface Props {
  name: string;
  children: ReactNode;
  imgSrc: any;
}

const OrganiserCard: FC<Props> = ({ name, children, imgSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prev) => !prev);
  return (
    <article className="h-1/2 w-full relative flex flex-col">
      <div className="relative w-full h-full bg-sky-100/25 ">
        <Image
          src={imgSrc}
          alt={name}
          width={200}
          height={200}
          className="object-cover w-full h-full border-8 border-sky-900/80"
        />
      </div>
      <div
        className="absolute bottom-0 cursor-pointer right-0 flex items-center gap-4 p-4 bg-sky-900/80 z-10"
        onClick={handleClick}
      >
        <h3 className="text-sky-200 text-2xl tracking-wider">{name}</h3>
        <IconInformationCircle className="h-8 w-8 animate-pulse fill-sky-300/50" />
      </div>
      {isOpen && (
        <div className="overflow-y-auto bg-sky-600 absolute flex flex-col gap-8 p-4 text-sky-200/75 w-full h-full">
          <Transition
            show={isOpen}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {children}
          </Transition>
        </div>
      )}
    </article>
  );
};

export default OrganiserCard;
