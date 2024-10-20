// TODO: Write proper error handling

import React, { FC } from 'react';
import Hero from './components/sections/hero/SectionHero';
import About from './components/sections/about/SectionAbout';
import Organisers from './components/sections/organisers/SectionOrganisers';
import NextMeeting from './components/sections/meeting-next/SectionMeetingNext';
import Photos from './components/sections/meeting-past/SectionMeetingPast';
import Footer from './components/Footer';
import LookingForward from './components/sections/looking-forward/SectionLookingForward';

const Home: FC = async () => {
  try {
    const response = await fetch('https://jascha.vercel.app/api/meetings', {
      method: 'POST',
    });
    const infoOnMeetings = await response.json();

    return (
      <>
        <main className="scroll-smooth w-full scrollbar-hidden md:grid md:grid-cols-12 md:gap-y-24">
          <Hero />
          <NextMeeting infoOnMeetings={infoOnMeetings} />
          <About />
          <Photos />
          <Organisers />
          <LookingForward />
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error('FAILED: fetch meetings', error);
    return <div>An error has occured.</div>;
  }
};

export default Home;
