import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Bommasandra | HSM Packers and Movers Bengaluru',
  description: 'Best Packers and Movers in Bommasandra, Bengaluru. Reliable house shifting & office relocation services.',
  keywords: 'packers and movers in bommasandra, bommasandra packers movers, house shifting bommasandra',
};

export default function BommasandraPage() {
  return <LocationLandingPage locationName="Bommasandra" />;
}
