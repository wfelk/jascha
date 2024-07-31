import React, { FC, ReactNode } from 'react';

interface Props {
  heading: string;
  style: 'bright' | 'dark';
  children: ReactNode;
}

const AboutArticle: FC<Props> = ({ heading, children, style }) => {
  return (
    <article
      className={`bg-gradient-to-tr ${
        style === 'dark'
          ? 'from-sky-950 to-sky-900'
          : 'from-sky-700/50 to-sky-600/75'
      } pb-20 pt-12 flex flex-col items-center justify-center gap-12`}
    >
      <h2
        className={`${
          style === 'dark' ? 'text-sky-400/75' : 'text-sky-300/75'
        } h-1/8 w-full md:px-[20vw] px-8 sm:text-4xl tracking-wider font-light text-right text-2xl`}
      >
        {heading}
      </h2>
      <div
        className={`text-lg sm:text-xl sm:leading-relaxed leading-relaxed tracking-wider ${
          style === 'dark' ? 'text-sky-200/90 ' : 'text-sky-200'
        } flex flex-col gap-4 w-[calc(100px_+_50vw)] sm:w-[450px]`}
      >
        {children}
      </div>
    </article>
  );
};

export default AboutArticle;
