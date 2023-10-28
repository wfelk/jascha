import "../../assets/styles/globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jascha",
  description: "Russian-German language tandem club in Cologne",
  viewport: { width: "device-width", initialScale: 1 },
  icons: { icon: "/favicon.ico" },
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#FFD236" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${oswald.className} w-screen overflow-x-hidden bg-sky-950`}
      >
        {children}
      </body>
    </html>
  );
}
