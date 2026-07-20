import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in Begur | HSM Packers and Movers Bengaluru',
  description: 'Best Packers and Movers in Begur, Bengaluru. HSM Packers and Movers provides safe house shifting, office relocation & vehicle transport in Begur. Call: 099803 03730',
  keywords: 'packers and movers in begur, begur packers movers, house shifting begur, movers begur bengaluru',
};

export default function BegurPage() {
  return <LocationLandingPage locationName="Begur" />;
}
