import "../../assets/styles/globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jascha",
  description: "Russian-German language tandem club in Cologne",
  viewport: { width: "device-width", initialScale: 1 },
  icons: { icon: "/favicon.ico" },
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#0EA5E9" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${oswald.className} w-screen bg-sky-950 overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
