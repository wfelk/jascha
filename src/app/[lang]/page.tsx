import React, { FC } from 'react';
import Hero from './components/sections/hero/SectionHero';
import About from './components/sections/about/SectionAbout';
import Organisers from './components/sections/organisers/SectionOrganisers';
import NextMeeting from './components/sections/meeting-next/SectionMeetingNext';
import Photos from './components/sections/meeting-past/SectionMeetingPast';
import Footer from './components/Footer';
import LookingForward from './components/sections/looking-forward/SectionLookingForward';
import { headers } from 'next/headers';

const Home: FC = async () => {
  try {
    const response = await fetch('https://jascha.vercel.app/api/meetings', {
      method: 'POST',
    });

    if (!response.ok) {
      console.error('Failed to fetch data:', response.statusText);
      return <div>Failed to load content</div>;
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return <div>Failed to load content</div>;
  }

  return (
    <>
      <main className="scroll-smooth w-full scrollbar-hidden md:grid md:grid-cols-12 md:gap-y-24">
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
