import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/utils/constants/locales';

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: ['/', `/(en|de|ru|uk|be)/:path*`],
};
