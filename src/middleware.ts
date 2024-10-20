import createMiddleware from 'next-intl/middleware';
import { LOCALES, DEFAULT_LOCALES } from '@/utils/constants/locales';

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALES,
});

export const config = {
  matcher: ['/', `/(en|de|ru|uk|be)/:path*`],
};
