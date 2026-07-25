import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Gurgaon Sector 31 | Gati Packers Movers',
  description: 'Best Packers and Movers in Gurgaon Sector 31. Gati Packers Movers provides top household shifting services, office moving services & vehicle transport in Sector 31 Gurgaon. Call: 8796757472.',
  keywords: 'packers and movers in gurgaon sector 31, best packers and movers in gurgaon, top packers and movers in gurgaon, local packers and movers gurgaon, movers and packers near gurugram haryana',
  alternates: {
    canonical: 'https://speedexrelocation.com/packers-and-movers-in-gurgaon-sector-31',
  },
};

export default function GurgaonSector31Page() {
  return <LocationLandingPage locationName="Sector 31, Gurgaon" />;
}
