'use client';

import React, { FC } from 'react';
import Button from '../../Button';
import Heading from './components/HeroHeading';
import Subheading from './components/HeroSubheading';
import Image from './components/HeroImage';
import cafe from '/public/images/cafe-1920-1280.jpeg';
import Social from './components/HeroSocialMedia';
import scrollSmoothlyTo from '@/utils/functions/scrollSmoothlyTo';
import { useTranslations } from 'next-intl';

const SectionHero: FC = () => {
  const handleClick = () => {
    scrollSmoothlyTo('next-meeting');
  };
  const t = useTranslations('sections.hero');
  return (
    <section className="relative bg-sky-950/80 border-t-8 border-t-sky-500/50 h-screen flex-col flex justify-center items-center will-change-scroll md:col-span-full">
      <Social />
      <Heading label={t('heading')} />
      <Subheading
        beforeEmphasis={t('subheading.beforeEmphasis')}
        emphasis={t('subheading.emphasis')}
      />
      <Image src={cafe} alt="people talking in a cafe" />
      <div className="w-full grow flex flex-col items-center justify-center">
        <Button onClick={handleClick}>{t('button')}</Button>
      </div>
    </section>
  );
};

export default SectionHero;
