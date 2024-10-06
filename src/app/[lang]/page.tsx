import React, { FC } from 'react';
import Hero from './components/sections/hero/SectionHero';
import About from './components/sections/about/SectionAbout';
import Organisers from './components/sections/organisers/SectionOrganisers';
import NextMeeting from './components/sections/meeting-next/SectionMeetingNext';
import Photos from './components/sections/meeting-past/SectionMeetingPast';
import Footer from './components/Footer';
import LookingForward from './components/sections/looking-forward/SectionLookingForward';

const Home: FC = async () => {
  let notionData = null;

  try {
    const response = await fetch('http://localhost:3000/api/notion', {
      method: 'POST',
    });

    notionData = await response.json();
    console.log(
      'Date of next meeting:',
      notionData.results[2].properties.Datum.date.start
    );
  } catch (error) {
    console.error(
      'An error has occurred while trying to fetch data from Notion:',
      error
    );
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
