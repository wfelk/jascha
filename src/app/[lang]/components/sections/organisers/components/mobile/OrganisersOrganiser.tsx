import React, { FC, ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  name: string;
  children: ReactNode;
  imgSrc: StaticImageData | string;
}

const imageLength = 250;

const variationsOfWilhelm = ['Wilhelm', 'Вильгельм', 'Вільгельм'];

const OrganisersOrganiser: FC<Props> = ({ name, children, imgSrc }) => {
  return (
    <article
      className={`w-screen drop-shadow relative flex flex-col py-4 mt-[175px] sm:mt-[225px] md:mt-[150px] md:w-full`}
    >
      <div className="relative flex flex-col items-center justify-center">
        <div
          className={`absolute flex flex-col items-center left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 w-[250px] sm:w-[350px] md:w-[200px] h-[250px] sm:h-[350px] md:h-[200px] border-8 rounded-lg ${
            variationsOfWilhelm.includes(name)
              ? 'border-indigo-500/75'
              : 'border-yellow-400/50'
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
              variationsOfWilhelm.includes(name)
                ? 'bg-indigo-600/95'
                : 'bg-yellow-600/95'
            } px-3 py-2 rounded-lg -bottom-6 text-center w-fit uppercase text-xl absolute tracking-widest`}
          >
            {name}
          </h3>
        </div>
      </div>
      <div
        className={`flex flex-col items-center bg-gradient-to-tr from-sky-900 to-sky-700 pt-[175px] sm:pt-[225px] md:pt-[150px] pb-16 md:rounded-lg text-sky-200/90 sm:text-xl text-lg border-b-8 md:px-16 xl:h-full ${
          variationsOfWilhelm.includes(name)
            ? 'border-b-indigo-600/40'
            : 'border-b-yellow-600/40'
        }`}
      >
        <div
          className={`justify-center text-lg xl:text-xl flex flex-col gap-8 w-[calc(100px_+_50vw)] sm:w-[455px] md:w-fit`}
        >
          {children}
        </div>
      </div>
    </article>
  );
};

export default OrganisersOrganiser;
