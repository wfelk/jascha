import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

let locales = ["en", "de", "ru", "uk", "be"];
let defaultLocale = "en";

// Function to get the preferred locale
function getLocale(request: NextRequest) {
  const acceptLanguageHeader =
    request.headers.get("accept-language") || undefined;
  const headers = { "accept-language": acceptLanguageHeader };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g., incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
