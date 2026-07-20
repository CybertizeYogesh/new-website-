import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Marathahalli | HSM Packers and Movers Bengaluru',
  description: 'Best Packers and Movers in Marathahalli, Bengaluru. Professional home relocation & office shifting services.',
  keywords: 'packers and movers in marathahalli, marathahalli packers movers, house shifting marathahalli',
};

export default function MarathahalliPage() {
  return <LocationLandingPage locationName="Marathahalli" />;
}
