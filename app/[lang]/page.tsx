import { FC } from 'react';
import Hero from './components/sections/hero/SectionHero';
import type Lang from '@/dictioniaries/types/lang';
import getDictionary from '../../utils/functions/getDictionary';
import About from './components/sections/about/SectionAbout';
import Organisers from './components/sections/organisers/SectionOrganisers';
import NextMeeting from './components/sections/meeting-next/SectionMeetingNext';
import Photos from './components/sections/meeting-past/SectionMeetingPast';
import Footer from './components/Footer';
import LookingForward from './components/sections/looking-forward/SectionLookingForward';

interface Props {
  params: {
    lang: Lang;
  };
}

const Home: FC<Props> = async ({ params: { lang } }) => {
  const { sections } = await getDictionary(lang);
  return (
    <>
      <main className="scroll-smooth w-full scrollbar-hidden">
        <Hero dict={sections.hero} />
        <NextMeeting dict={sections.nextMeeting} />
        <About dict={sections.about} />
        <Photos dict={sections.photos} />
        <Organisers dict={sections.organisers} />
        <LookingForward dict={sections.lookingForward} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
