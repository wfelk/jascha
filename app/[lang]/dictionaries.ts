import "server-only";

// TO-DO Replace 'any' with correct type
const dictionaries: any = {
  en: () =>
    import("../../dictioniaries/en.json").then((module) => module.default),
  de: () =>
    import("../../dictioniaries/de.json").then((module) => module.default),
};

export const getDictionary = async (locale: any) => dictionaries[locale]();
