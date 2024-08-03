'use client';

import React, { FC } from 'react';
import Button from '../../Button';
import type { Props } from '@/types/dictionary';
import scrollSmoothlyTo from '@/utils/functions/scrollSmoothlyTo';

const SectionLookingForward: FC<Props> = ({ dict }) => {
  const handleClick = () => {
    scrollSmoothlyTo('next-meeting');
  };

  return (
    <section className="flex flex-col items-center gap-12 py-12 mt-20 md:mt-0 bg-gradient-to-tr from-sky-950 to-sky-900 border-b-4 border-b-sky-200/25  md:col-span-full">
      <p className="w-full p-4 text-sky-300/90 tracking-wide flex items-center justify-center text-3xl md:text-5xl drop-shadow-2xl text-center">
        {dict.sections.lookingForward.content}
      </p>
      <Button onClick={handleClick}>
        <span>zum nächsten Treffen</span>
      </Button>
    </section>
  );
};

export default SectionLookingForward;
