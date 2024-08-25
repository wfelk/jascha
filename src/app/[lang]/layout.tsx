import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '@/assets/styles/globals.scss';
import type { Metadata, Viewport } from 'next';
import { Oswald } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jascha',
  description: 'Russian-German Language Tandem Club in Cologne',
};

export const viewport: Viewport = {
  themeColor: '#306995',
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${oswald.className} w-screen overflow-x-hidden bg-sky-950 bg-pattern-wallpaper bg-fixed`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
