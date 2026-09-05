import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist } from 'next/font/google';
import Navbar from 'components/layout/navbar';
import Footer from 'components/layout/footer';
import { siteConfig } from 'config/site';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Software Developer`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    'Software developer and web designer based in Finland. Thoughtful interfaces, purposeful code, and a selection of digital projects by Marco Törnqvist.',
  openGraph: { type: 'website', locale: 'en_GB', siteName: siteConfig.name },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}