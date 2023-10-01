import { FC } from "react";
import Hero from "./components/sections/hero/Hero";
import type Lang from "@/dictioniaries/types/lang";
import { getDictionary } from "./dictionaries";
import About from "./components/sections/about/About";

interface Props {
  params: {
    lang: Lang;
  };
}

const Home: FC<Props> = async ({ params: { lang } }) => {
  const { sections } = await getDictionary(lang);
  return (
    <main className="overflow-x-hidden h-screen overflow-y-auto scroll-smooth snap-mandatory w-full snap-y scrollbar-hidden">
      <Hero dict={sections.hero} />
      <About dict={sections.about} />
    </main>
  );
};

export default Home;
