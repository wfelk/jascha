import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/utils/constants/locales';

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*'],
};
