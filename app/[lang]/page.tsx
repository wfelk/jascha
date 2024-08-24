import React, { FC } from 'react';
import Hero from './components/sections/hero/SectionHero';
import type Lang from '../../types/lang';
import getDictionary from '../../utils/functions/getDictionary';
import About from './components/sections/about/SectionAbout';
import Organisers from './components/sections/organisers/SectionOrganisers';
import NextMeeting from './components/sections/meeting-next/SectionMeetingNext';
import Photos from './components/sections/meeting-past/SectionMeetingPast';
import Footer from './components/Footer';
import LookingForward from './components/sections/looking-forward/SectionLookingForward';
import LanguageSwitcher from './components/LanguageSwitcher';

interface Props {
  params: {
    lang: Lang;
  };
}

const Home: FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  return (
    <>
      <main className="scroll-smooth w-full scrollbar-hidden md:grid md:grid-cols-12 md:gap-y-32">
        <Hero dict={dict} />
        <NextMeeting dict={dict} />
        <About dict={dict} />
        <Photos dict={dict} />
        <Organisers dict={dict} />
        <LookingForward dict={dict} />
      </main>
      <Footer />
      <LanguageSwitcher dict={dict} />
    </>
  );
};

export default Home;
