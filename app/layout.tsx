import type { Metadata } from 'next';
import { Lora, Merriweather } from 'next/font/google';
import './globals.css';
import { FC } from 'react';
import Navbar from 'components/layout/navbar';
import Footer from 'components/layout/footer';
import { siteConfig } from 'config/site';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lora',
  display: 'auto',
});

const merriweather = Merriweather({
  weight: ['400'],
  variable: '--font-merriweather',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Portfolio`,
  description: 'Software Developer & Web Designer',
  icons: {
    icon: '/favicon.png',
  },
};

const RootLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html
      className={`${lora.className} ${merriweather.variable} [&>.grecaptcha-badge]:invisible`}
      lang="en"
    >
      <body className="bg-[#050505]" suppressHydrationWarning>
        <div className="bg-grain" />
        <Navbar />
        <main className="flex min-h-[calc(100svh-3.5rem)] flex-col items-center md:min-h-[calc(100svh-4.5rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
