import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Satellite Ahmedabad | Speed Ex Relocation',
  description: 'Best Packers and Movers in Satellite, Ahmedabad. Speed Ex Relocation Packers and Movers provides safe house shifting, office relocation & vehicle transport. Call: 9624644006 / 9211206101.',
  keywords: 'packers and movers in satellite ahmedabad, satellite packers movers, house shifting satellite ahmedabad, movers satellite ahmedabad',
  alternates: {
    canonical: 'https://speedexrelocation.com/packers-and-movers-in-bellandur',
  },
};

export default function BellandurPage() {
  return <LocationLandingPage locationName="Satellite, Ahmedabad" />;
}
