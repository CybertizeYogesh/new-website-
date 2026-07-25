import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Best Packers and Movers in Gurgaon | Top Movers and Packers Gurgaon',
  description: 'Gati Packers Movers is the best packers and movers in Gurgaon offering top household shifting services near me, office moving services, local packers movers & vehicle transport. Call: 8796757472.',
  keywords: 'packers and movers gurgaon, best packers and movers in gurgaon, top packers and movers in gurgaon, packers and movers in gurgaon near me, relocation services in gurgaon, local packers and movers gurgaon, packers movers in gurgaon',
  alternates: {
    canonical: 'https://speedexrelocation.com/packers-and-movers-in-gurgaon',
  },
};

export default function GurgaonCityPage() {
  return <LocationLandingPage locationName="Gurgaon" />;
}
