import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import './globals.scss';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stolarsky | Stolarija",
  description: "Stolarsky — Premium stolarija. Nameštaj po meri, restauracija i arhitektonska stolarija izrađeni sa strašću.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={manrope.variable}>
        {children}
      </body>
    </html>
  );
}
