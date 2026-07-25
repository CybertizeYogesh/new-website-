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
  title: 'Best Packers and Movers in Gurgaon | Top Movers and Packers Near Gurugram Haryana',
  description: 'Gati Packers Movers is the best packers and movers in Gurgaon & top movers and packers near Gurugram Haryana offering household shifting services, office moving services in Gurgaon, car transportation & local home moving near me. Call: 8796757472.',
  keywords: 'movers and packers near gurugram haryana, shifters and movers near me, packers and movers services near me, packers and movers gurgaon, best packers and movers in gurgaon, top packers and movers in gurgaon, packers and movers in gurgaon sector 31, packers and movers in gurgaon sector 51, packers and movers in dlf phase 3 gurgaon, packers and movers in gurgaon near me, relocation services in gurgaon, local packers and movers gurgaon, packers and movers gurugram haryana, packers movers in gurgaon, office shifting services in gurgaon, movers and packers, home moving services, best moving company, best packers and movers, household shifting services, car transportation companies',
  authors: [{ name: 'Gati Packers Movers' }],
  metadataBase: new URL('https://speedexrelocation.com'),
  icons: {
    icon: '/assets/images/favicon.webp',
    shortcut: '/assets/images/favicon.webp',
    apple: '/assets/images/favicon.webp',
  },
  alternates: {
    canonical: 'https://speedexrelocation.com',
  },
  verification: {
    google: 'google-site-verification-placeholder',
    yandex: 'yandex-verification-placeholder',
  },
  openGraph: {
    title: 'Best Packers and Movers in Gurgaon | Top Movers and Packers Near Gurugram Haryana',
    description: 'Gati Packers Movers offers top household shifting services, office moving services in Gurgaon, car transportation companies & local movers near me.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://speedexrelocation.com',
    siteName: 'Gati Packers Movers',
    images: [
      {
        url: 'https://speedexrelocation.com/assets/images/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Gati Packers Movers Gurgaon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Packers and Movers in Gurgaon | Top Movers and Packers Near Gurugram Haryana',
    description: 'Gati Packers Movers offers top household shifting services, office moving services in Gurgaon, car transportation companies & local movers near me.',
    images: ['https://speedexrelocation.com/assets/images/logo.webp'],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    'name': 'Gati Packers Movers',
    'url': 'https://speedexrelocation.com',
    'logo': 'https://speedexrelocation.com/assets/images/logo.webp',
    'image': 'https://speedexrelocation.com/assets/images/logo.webp',
    'description': 'Gati Packers Movers is the best packers and movers in Gurgaon offering top movers and packers near Gurugram Haryana, household shifting services, office moving services in Gurgaon, car transportation & local home moving services.',
    'telephone': '+918796757472',
    'email': 'gatipackerssmovers@gmail.com',
    'priceRange': '₹₹',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '9500',
      'bestRating': '5',
      'worstRating': '1'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'F201, Phase 2, New Palam Vihar, Block F, New Palam Vihar Phase 2, Sector 110',
      'addressLocality': 'Gurugram',
      'addressRegion': 'Haryana',
      'postalCode': '122017',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 28.5146,
      'longitude': 77.0270
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59'
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Gurgaon' },
      { '@type': 'City', 'name': 'Gurugram Haryana' },
      { '@type': 'City', 'name': 'Gurgaon Sector 31' },
      { '@type': 'City', 'name': 'Gurgaon Sector 51' },
      { '@type': 'City', 'name': 'DLF Phase 3 Gurgaon' },
      { '@type': 'City', 'name': 'New Palam Vihar' },
      { '@type': 'City', 'name': 'Delhi NCR' }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What services do Gati Packers Movers provide in Gurgaon?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Gati Packers Movers provides complete household shifting services, office moving services in Gurgaon, car transportation companies carriers, bike packing, local home moving near me, and warehouse storage solutions across Gurgaon Sector 31, Sector 51, DLF Phase 3, and Gurugram Haryana.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I get an instant quote for packers and movers in Gurgaon near me?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can call Gati Packers Movers directly at 8796757472 or submit the instant quote form on our website for an upfront, transparent cost estimate with zero hidden fees.'
        }
      }
    ]
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="/assets/fontawesome/css/all.min.css"
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
