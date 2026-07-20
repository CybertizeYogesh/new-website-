import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Hulimangala | HSM Packers and Movers Bengaluru',
  description: 'Best Packers and Movers in Hulimangala, Bengaluru. Professional home relocation & shifting services.',
  keywords: 'packers and movers in hulimangala, hulimangala packers movers, house shifting hulimangala',
};

export default function HulimangalaPage() {
  return <LocationLandingPage locationName="Hulimangala" />;
}
