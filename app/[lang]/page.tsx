import { FC } from "react";
import Hero from "./components/sections/hero/Section";
import type Lang from "@/dictioniaries/types/lang";
import { getDictionary } from "./dictionaries";
import About from "./components/sections/about/About";
import Organisers from "./components/sections/organisers/mobile/Section";
import NextMeeting from "./components/sections/meeting-next/Section";
import Photos from "./components/sections/meeting-past/Section";
import Footer from "./components/Footer";

interface Props {
  params: {
    lang: Lang;
  };
}

const Home: FC<Props> = async ({ params: { lang } }) => {
  const { sections } = await getDictionary(lang);
  const images = [];
  return (
    <>
      <main className="scroll-smooth w-full scrollbar-hidden">
        <Hero dict={sections.hero} />
        <NextMeeting dict={sections.nextMeeting} />
        <About dict={sections.about} />
        <Photos dict={sections.photos} />
        <Organisers dict={sections.organisers} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
