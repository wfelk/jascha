import { FC } from "react";
import Hero from "./components/sections/hero/Hero";
import type Lang from "@/dictioniaries/types/lang";
import { getDictionary } from "./dictionaries";
import About from "./components/sections/about/About";
import Organisers from "./components/sections/organisers/mobile/Section";
import LookingForward from "./components/sections/looking-forward/LookingForward";
import Footer from "./components/sections/footer/Footer";
import Interstice from "./components/Interstice";

interface Props {
  params: {
    lang: Lang;
  };
}

const Home: FC<Props> = async ({ params: { lang } }) => {
  const { sections, footer } = await getDictionary(lang);
  return (
    <>
      <main className="scroll-smooth w-full scrollbar-hidden">
        <Hero dict={sections.hero} />
        <Interstice />
        <About dict={sections.about} />
        <Organisers dict={sections.organisers} />
        <LookingForward dict={sections.lookingForward} />
        <Interstice />
      </main>
      <Footer dict={footer} />
    </>
  );
};

export default Home;
