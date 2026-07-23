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
  title: 'Best Packers and Movers Ahmedabad | Speed Ex Relocation - Shifting Services',
  description: 'Speed Ex Relocation Packers and Movers is the best packers and movers in Ahmedabad offering household shifting services near me, office moving services, vehicle moving services & top transport logistics company solutions. Call: 9624644006 / 9211206101.',
  keywords: 'packers and movers ahmedabad, best packers and movers, household shifting services, household shifting services near me, transport logistics company, shifting company, relocation movers near me, vehicle moving services, office moving services, speed ex relocation',
  authors: [{ name: 'Speed Ex Relocation Packers and Movers' }],
  metadataBase: new URL('https://speedexrelocation.com'),
  icons: {
    icon: '/assets/images/favicon.webp',
    shortcut: '/assets/images/favicon.webp',
    apple: '/assets/images/favicon.webp',
  },
  openGraph: {
    title: 'Best Packers and Movers Ahmedabad | Speed Ex Relocation',
    description: 'Premier household shifting services, office moving services, vehicle moving services & transport logistics company in Ahmedabad.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://speedexrelocation.com',
    siteName: 'Speed Ex Relocation Packers and Movers',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  'name': 'Speed Ex Relocation Packers and Movers',
  'url': 'https://speedexrelocation.com',
  'logo': 'https://speedexrelocation.com/assets/images/logo.webp',
  'image': 'https://speedexrelocation.com/assets/images/logo.webp',
  'description': 'Speed Ex Relocation is the best packers and movers in Ahmedabad offering top household shifting services near me, office moving services, vehicle moving services & transport logistics solutions.',
  'telephone': '+919624644006',
  'email': 'speedexrelocation3@gmail.com',
  'priceRange': '₹₹',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'B 107, Bijal Business Centre, Aslali Circle, Aslali',
    'addressLocality': 'Ahmedabad',
    'addressRegion': 'Gujarat',
    'postalCode': '382427',
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 22.9385565,
    'longitude': 72.5855219
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'opens': '00:00',
    'closes': '23:59'
  },
  'areaServed': [
    { '@type': 'City', 'name': 'Ahmedabad' },
    { '@type': 'City', 'name': 'Aslali' },
    { '@type': 'City', 'name': 'SG Highway' },
    { '@type': 'City', 'name': 'Satellite' },
    { '@type': 'City', 'name': 'Prahlad Nagar' },
    { '@type': 'City', 'name': 'Narol' },
    { '@type': 'City', 'name': 'Changodar' }
  ]
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
          href="/assets/fontawesome/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
