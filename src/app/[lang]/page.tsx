// TODO: Write proper error handling

import React, { FC } from 'react';
import Hero from './components/sections/hero/SectionHero';
import About from './components/sections/about/SectionAbout';
import Organisers from './components/sections/organisers/SectionOrganisers';
import NextMeeting from './components/sections/meeting-next/SectionMeetingNext';
import Photos from './components/sections/meeting-past/SectionMeetingPast';
import LookingForward from './components/sections/looking-forward/SectionLookingForward';
7;
import getInfoOnMeetings from '@/actions/getInfoOnMeetings';

const Home: FC = async () => {
  const infoOnMeetings = await getInfoOnMeetings();

  return (
    <main className="scroll-smooth w-full scrollbar-hidden md:grid md:grid-cols-12 md:gap-y-24">
      <Hero />
      <NextMeeting infoOnMeetings={infoOnMeetings} />
      <About />
      <Photos />
      <Organisers />
      <LookingForward />
    </main>
  );
};

export default Home;
