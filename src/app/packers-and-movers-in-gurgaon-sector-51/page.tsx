import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Gurgaon Sector 51 | Gati Packers Movers',
  description: 'Top Packers and Movers in Gurgaon Sector 51. Gati Packers Movers offers reliable home moving services, office shifting & car transportation in Sector 51 Gurgaon. Call: 8796757472.',
  keywords: 'packers and movers in gurgaon sector 51, best packers and movers in gurgaon, top packers and movers in gurgaon, packers and movers gurgaon near me, relocation services in gurgaon',
  alternates: {
    canonical: 'https://speedexrelocation.com/packers-and-movers-in-gurgaon-sector-51',
  },
};

export default function GurgaonSector51Page() {
  return <LocationLandingPage locationName="Sector 51, Gurgaon" />;
}
