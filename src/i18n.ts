import { getRequestConfig } from 'next-intl/server';

let locales = ['en', 'de', 'ru', 'uk', 'be'];
let defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  if (locales.includes(locale as any)) {
    return {
      messages: (await import(`../messages/${locale}.json`)).default,
    };
  } else {
    return {
      messages: (await import(`../messages/${defaultLocale}.json`)).default,
    };
  }
});
