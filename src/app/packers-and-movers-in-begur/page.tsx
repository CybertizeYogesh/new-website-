import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Begur | Speed Ex Relocation',
  description: 'Best Packers and Movers in Begur. Speed Ex Relocation Packers and Movers provides safe house shifting, office relocation & vehicle transport. Call: 9624644006 / 9211206101.',
  keywords: 'packers and movers in begur, begur packers movers, house shifting begur, movers begur bengaluru',
};

export default function BegurPage() {
  return <LocationLandingPage locationName="Begur" />;
}
