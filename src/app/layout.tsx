import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import './globals.css';

export const metadata: Metadata = {
  title: 'HSM Packers and Movers Electronic City | Expert Relocation Services',
  description: 'Hassle-free house relocation, office shifting, and vehicle transport services by HSM Packers and Movers Electronic City. Trusted by thousands.',
  keywords: 'packers and movers electronic city, packers movers bengaluru, HSM packers movers, house shifting electronic city, best packers movers bengaluru, home relocation bengaluru, office shifting bengaluru, car transport bengaluru, bike transport bengaluru, affordable packers movers',
  icons: {
    icon: '/assets/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16811617114"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16811617114');
          `}
        </Script>

        <AnimateOnScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </AnimateOnScroll>
      </body>
    </html>
  );
}
