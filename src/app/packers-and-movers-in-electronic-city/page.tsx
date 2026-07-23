import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Aslali Ahmedabad | Speed Ex Relocation',
  description: 'Best Packers and Movers in Aslali Circle, Ahmedabad. Speed Ex Relocation Packers and Movers provides safe house shifting, office relocation & vehicle transport. Call: 9624644006 / 9211206101.',
  keywords: 'packers and movers in aslali ahmedabad, aslali packers movers, house shifting aslali ahmedabad, movers aslali ahmedabad',
  alternates: {
    canonical: 'https://speedexrelocation.com/packers-and-movers-in-electronic-city',
  },
};

export default function ElectronicCityPage() {
  return <LocationLandingPage locationName="Aslali Circle, Ahmedabad" />;
}
