import React, { FC } from 'react';
import Button from '../../Button';

interface Props {
  dict: any;
}

const SectionLookingForward: FC<Props> = ({ dict }) => {
  return (
    <section className="flex flex-col items-center gap-12 py-12 mt-20 md:mt-0 bg-gradient-to-tr from-sky-950 to-sky-900 border-b-4 border-b-sky-200/25  md:col-span-full">
      <p className="w-full p-4 text-sky-300/90 tracking-wide flex items-center justify-center text-3xl md:text-5xl drop-shadow-2xl text-center">
        {dict.content}
      </p>
      <Button>
        <a href="#next-meeting">
          <span>zum nächsten Treffen</span>
        </a>
      </Button>
    </section>
  );
};

export default SectionLookingForward;
