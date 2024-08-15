import React from 'react';
import '../../assets/styles/globals.scss';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jascha',
  description: 'Russian-German language tandem club in Cologne',
  viewport: { width: 'device-width', initialScale: 1 },
  themeColor: { media: '(prefers-color-scheme: dark)', color: '#082F49' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('test');
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
