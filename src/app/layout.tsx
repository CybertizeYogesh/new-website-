import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Preloader from '@/components/Preloader';
import MagicCursor from '@/components/MagicCursor';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HSM Packers and Movers Electronic City Bengaluru',
  description: 'HSM Packers and Movers Electronic City provides reliable house shifting, office relocation, vehicle transport, and warehousing services across India.',
  keywords: 'packers and movers electronic city, house shifting electronic city, relocation services bangalore',
  authors: [{ name: 'HSM Packers and Movers' }],
  metadataBase: new URL('https://hsmpackersandmovers.in'),
  openGraph: {
    title: 'HSM Packers and Movers Electronic City Bengaluru',
    description: 'Reliable house shifting, office relocation, and vehicle transport services.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Preloader />
        <MagicCursor />

        <Navbar />
        <AnimateOnScroll>
          <main>{children}</main>
        </AnimateOnScroll>
        <Footer />
        <FloatingButtons />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8Z43T1V7G0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8Z43T1V7G0');
          `}
        </Script>
      </body>
    </html>
  );
}
