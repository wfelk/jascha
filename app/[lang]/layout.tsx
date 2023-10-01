import "../../assets/styles/globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jascha",
  description: "Russian-German language tandem club in Cologne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.className} bg-sky-950`}>{children}</body>
    </html>
  );
}
