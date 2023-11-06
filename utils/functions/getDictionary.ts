import "server-only";
import type Lang from "@/dictioniaries/types/lang";

// TO-DO Replace 'any' with correct type
const dictionaries: any = {
  en: () =>
    import("../../dictioniaries/en.json").then((module) => module.default),
  de: () =>
    import("../../dictioniaries/de.json").then((module) => module.default),
  ru: () =>
    import("../../dictioniaries/ru.json").then((module) => module.default),
  uk: () =>
    import("../../dictioniaries/uk.json").then((module) => module.default),
  be: () =>
    import("../../dictioniaries/be.json").then((module) => module.default),
};

const getDictionary = async (locale: Lang) => dictionaries[locale]();

export default getDictionary;
