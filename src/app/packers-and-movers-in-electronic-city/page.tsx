import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Electronic City | HSM Packers and Movers Bengaluru',
  description: 'Best Packers and Movers in Electronic City, Bengaluru. HSM Packers and Movers provides safe house shifting, office relocation & vehicle transport in Electronic City. Call: 099803 03730',
  keywords: 'packers and movers in electronic city, electronic city packers movers, house shifting electronic city, movers electronic city bengaluru, home relocation electronic city',
};

export default function ElectronicCityPage() {
  return <LocationLandingPage locationName="Electronic City" />;
}
