'use client';

import { FC } from 'react';
import Button from '../../Button';
import Heading from './components/HeroHeading';
import Subheading from './components/HeroSubheading';
import Image from './components/HeroImage';
import cafe from '/public/images/cafe-1920-1280.jpeg';
import Social from './components/HeroSocialMedia';

interface Props {
  dict: any;
}

const SectionHero: FC<Props> = ({ dict }) => {
  return (
    <section className="relative bg-sky-950/80 border-t-8 border-t-sky-500/50 h-screen flex-col flex justify-center items-center will-change-scroll">
      <Social />
      <Heading label={dict.heading} />
      <Subheading
        beforeEmphasis={dict.subheading.beforeEmphasis}
        emphasis={dict.subheading.emphasis}
      />
      <Image src={cafe} alt="people talking in a cafe" />
      <div className="w-full grow flex flex-col items-center justify-center">
        <Button onClick={() => {}}>{dict.button}</Button>
      </div>
    </section>
  );
};

export default SectionHero;
