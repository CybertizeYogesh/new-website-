import React from 'react';
import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Packers and Movers in DLF Phase 3 Gurgaon | Gati Packers Movers',
  description: 'Best Packers and Movers in DLF Phase 3 Gurgaon. Safe household shifting services, office moving & vehicle transport by Gati Packers Movers. Call: 8796757472.',
  keywords: 'packers and movers in dlf phase 3 gurgaon, best packers and movers in gurgaon, top packers and movers in gurgaon, packers movers in gurgaon, shifters and movers near me',
  alternates: {
    canonical: 'https://speedexrelocation.com/packers-and-movers-in-dlf-phase-3-gurgaon',
  },
};

export default function DLFPhase3Page() {
  return <LocationLandingPage locationName="DLF Phase 3, Gurgaon" />;
}
