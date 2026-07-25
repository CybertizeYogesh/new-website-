import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryView from '@/components/GalleryView';

export const metadata: Metadata = {
  title: 'Photo Gallery | Best Packers and Movers | Gati Packers Movers',
  description: 'Explore real-world photos of house shifting, corporate office moving, vehicle transport, and warehouse storage solutions by Gati Packers Movers.',
  keywords: 'packers and movers gallery, shifting photos, household relocation photos, car transport gallery, gati packers movers',
  alternates: {
    canonical: 'https://speedexrelocation.com/gallery',
  },
};

export default function GalleryPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Page Hero Header */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #0b2b3c 0%, #061d29 100%)',
          padding: '120px 0 70px',
          color: '#ffffff',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.12,
            backgroundImage: 'url("/assets/gallery/g1.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span
            style={{
              background: 'rgba(255, 77, 38, 0.15)',
              color: '#ff4d26',
              padding: '6px 20px',
              borderRadius: '30px',
              fontWeight: 800,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              display: 'inline-block',
              marginBottom: '1rem',
            }}
          >
            Visual Showcase
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            Our Shifting &amp; Packing Gallery
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            Explore real-world glimpses of our professional house shifting, secure packing, vehicle transport, and warehouse storage solutions.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#ff4d26', fontWeight: 600 }}>Gallery</span>
          </div>
        </div>
      </section>

      {/* Pure Image Grid Gallery Section */}
      <section style={{ padding: '70px 0 100px' }}>
        <GalleryView />
      </section>
    </main>
  );
}
