import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers Gurugram Haryana | Gati Packers Movers',
  description: 'Top Movers and Packers Near Gurugram Haryana. Gati Packers Movers delivers premier household shifting services, office moving services & car transportation. Call: 8796757472.',
  keywords: 'packers and movers gurugram haryana, movers and packers near gurugram haryana, packers and movers services near me, best moving company, best packers and movers, household shifting services',
  alternates: {
    canonical: 'https://speedexrelocation.com/packers-and-movers-in-gurugram',
  },
};

export default function GurugramCityPage() {
  return <LocationLandingPage locationName="Gurugram, Haryana" />;
}
