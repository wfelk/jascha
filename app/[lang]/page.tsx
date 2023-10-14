import { FC } from "react";
import Hero from "./components/sections/hero/Hero";
import type Lang from "@/dictioniaries/types/lang";
import { getDictionary } from "./dictionaries";
import About from "./components/sections/about/About";
import Organisers from "./components/sections/organisers/mobile/OrganisersSectionMobile";

interface Props {
  params: {
    lang: Lang;
  };
}

const Home: FC<Props> = async ({ params: { lang } }) => {
  const { sections } = await getDictionary(lang);
  return (
    <main className="scroll-smooth w-full scrollbar-hidden">
      <Hero dict={sections.hero} />
      <About dict={sections.about} />
      <Organisers dict={sections.organisers} />
    </main>
  );
};

export default Home;
