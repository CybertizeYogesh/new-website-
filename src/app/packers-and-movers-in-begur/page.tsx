import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in SG Highway Ahmedabad | Speed Ex Relocation',
  description: 'Best Packers and Movers in SG Highway, Ahmedabad. Speed Ex Relocation Packers and Movers provides safe house shifting, office relocation & vehicle transport. Call: 9624644006 / 9211206101.',
  keywords: 'packers and movers in sg highway ahmedabad, sg highway packers movers, house shifting sg highway ahmedabad, movers sg highway ahmedabad',
  alternates: {
    canonical: 'https://speedexrelocation.com/packers-and-movers-in-begur',
  },
};

export default function BegurPage() {
  return <LocationLandingPage locationName="SG Highway, Ahmedabad" />;
}
