import { FC } from "react";
import Hero from "./components/sections/Hero";
import type Lang from "@/dictioniaries/types/lang";
import { getDictionary } from "./dictionaries";

interface Props {
  params: {
    lang: Lang;
  };
}

const Home: FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  return (
    <main>
      <Hero dict={dict} />
    </main>
  );
};

export default Home;
