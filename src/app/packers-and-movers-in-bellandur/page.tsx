import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Bellandur | HSM Packers and Movers Bengaluru',
  description: 'Best Packers and Movers in Bellandur, Bengaluru. Safe house shifting, office relocation & vehicle transport in Bellandur. Call: 099803 03730',
  keywords: 'packers and movers in bellandur, bellandur packers movers, house shifting bellandur, movers bellandur bengaluru',
};

export default function BellandurPage() {
  return <LocationLandingPage locationName="Bellandur" />;
}
