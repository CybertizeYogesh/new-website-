import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Prahlad Nagar Ahmedabad | Speed Ex Relocation',
  description: 'Best Packers and Movers in Prahlad Nagar, Ahmedabad. Speed Ex Relocation Packers and Movers provides safe house shifting, office relocation & vehicle transport. Call: 9624644006 / 9211206101.',
  keywords: 'packers and movers in prahlad nagar ahmedabad, prahlad nagar packers movers, house shifting prahlad nagar ahmedabad, movers prahlad nagar ahmedabad',
};

export default function MarathahalliPage() {
  return <LocationLandingPage locationName="Prahlad Nagar, Ahmedabad" />;
}
