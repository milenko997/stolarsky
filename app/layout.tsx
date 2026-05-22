import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import './globals.scss';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://stolarsky.com'

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Stolarsky | Premium Stolarija',
    template: '%s | Stolarsky',
  },
  description: 'Stolarsky — Premium stolarija. Nameštaj po meri, restauracija i arhitektonska stolarija izrađeni sa preciznošću i strašću od 2004. godine.',
  keywords: [
    'stolarija', 'nameštaj po meri', 'restauracija nameštaja',
    'arhitektonska stolarija', 'kuhinjski nameštaj', 'komercijalni projekti',
    'stolar', 'Srbija',
  ],
  authors: [{ name: 'Stolarsky' }],
  creator: 'Stolarsky',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: '/',
    siteName: 'Stolarsky',
    title: 'Stolarsky | Premium Stolarija',
    description: 'Nameštaj po meri, restauracija i arhitektonska stolarija izrađeni sa preciznošću i strašću od 2004. godine.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stolarsky — Premium Stolarija',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stolarsky | Premium Stolarija',
    description: 'Nameštaj po meri, restauracija i arhitektonska stolarija izrađeni sa preciznošću i strašću od 2004. godine.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

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
