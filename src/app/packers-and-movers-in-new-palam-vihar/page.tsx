import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in New Palam Vihar Gurgaon | Gati Packers Movers',
  description: 'Best Packers and Movers in New Palam Vihar, Sector 110 Gurgaon. Gati Packers Movers provides 100% safe home moving services, office shifting & bike transport. Call: 8796757472.',
  keywords: 'local packers and movers gurgaon, packers and movers in gurgaon near me, shifters and movers near me, home moving services, household shifting services near me',
  alternates: {
    canonical: 'https://speedexrelocation.com/packers-and-movers-in-new-palam-vihar',
  },
};

export default function NewPalamViharPage() {
  return <LocationLandingPage locationName="New Palam Vihar, Gurgaon" />;
}
