import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Changodar Ahmedabad | Speed Ex Relocation',
  description: 'Best Packers and Movers in Changodar, Ahmedabad. Speed Ex Relocation Packers and Movers provides safe house shifting, office relocation & vehicle transport. Call: 9624644006 / 9211206101.',
  keywords: 'packers and movers in changodar ahmedabad, changodar packers movers, house shifting changodar ahmedabad, movers changodar ahmedabad',
};

export default function HulimangalaPage() {
  return <LocationLandingPage locationName="Changodar, Ahmedabad" />;
}
