import React, { FC } from 'react';
import Hero from './components/sections/hero/SectionHero';
import About from './components/sections/about/SectionAbout';
import Organisers from './components/sections/organisers/SectionOrganisers';
import NextMeeting from './components/sections/meeting-next/SectionMeetingNext';
import Photos from './components/sections/meeting-past/SectionMeetingPast';
import Footer from './components/Footer';
import LookingForward from './components/sections/looking-forward/SectionLookingForward';
import LanguageSwitcher from './components/sections/hero/components/HeroLanguageSwitcher';

const Home: FC = async () => {
  return (
    <>
      <main className="scroll-smooth w-full scrollbar-hidden md:grid md:grid-cols-12 md:gap-y-32">
        <Hero />
        <NextMeeting />
        <About />
        <Photos />
        <Organisers />
        <LookingForward />
      </main>
      <Footer />
    </>
  );
};

export default Home;
