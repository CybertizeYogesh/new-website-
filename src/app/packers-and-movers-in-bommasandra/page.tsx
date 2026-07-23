import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Narol Ahmedabad | Speed Ex Relocation',
  description: 'Best Packers and Movers in Narol, Ahmedabad. Speed Ex Relocation Packers and Movers provides safe house shifting, office relocation & vehicle transport. Call: 9624644006 / 9211206101.',
  keywords: 'packers and movers in narol ahmedabad, narol packers movers, house shifting narol ahmedabad, movers narol ahmedabad',
  alternates: {
    canonical: 'https://speedexrelocation.com/packers-and-movers-in-bommasandra',
  },
};

export default function BommasandraPage() {
  return <LocationLandingPage locationName="Narol, Ahmedabad" />;
}
