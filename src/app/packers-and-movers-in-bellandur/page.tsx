import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Bellandur | Speed Ex Relocation',
  description: 'Best Packers and Movers in Bellandur. Speed Ex Relocation Packers and Movers provides safe house shifting, office relocation & vehicle transport. Call: 9624644006 / 9211206101.',
  keywords: 'packers and movers in bellandur, bellandur packers movers, house shifting bellandur, movers bellandur bengaluru',
};

export default function BellandurPage() {
  return <LocationLandingPage locationName="Bellandur" />;
}
