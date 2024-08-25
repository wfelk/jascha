import React from 'react';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${oswald.className} w-screen overflow-x-hidden bg-sky-950 bg-pattern-wallpaper bg-fixed`}
      >
        {children}
      </body>
    </html>
  );
}
