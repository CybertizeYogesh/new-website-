import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Network | HSM Packers and Movers Electronic City',
  description: 'View our extensive network across India. HSM Packers and Movers Electronic City serves major areas in Bengaluru including Electronic City, Begur, Bellandur, Marathahalli, Bommasandra and Hulimangala.',
  keywords: 'packers movers network india, HSM movers service area, bengaluru packers movers locations, pan india movers network',
};

export default function NetworkPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundColor: 'var(--primary-color)',
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '12rem 0 6rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Our Network</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span style={{ color: 'var(--accent-color)' }}>Network</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title">Areas We Serve</span>
            <h2>Packers and Movers in Bengaluru &ndash; All Areas</h2>
            <p>
              HSM Packers and Movers Electronic City provides reliable house shifting, office relocation and vehicle transport across all major areas of Bengaluru. Click on your area to get details and rates.
            </p>
          </div>

          <div className="cities-grid">
            <Link href="/packers-and-movers-in-electronic-city" className="city-card fade-in-up">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Electronic City</h3>
            </Link>

            <Link href="/packers-and-movers-in-begur" className="city-card fade-in-up delay-1">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Begur</h3>
            </Link>

            <Link href="/packers-and-movers-in-bellandur" className="city-card fade-in-up delay-2">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Bellandur</h3>
            </Link>

            <Link href="/packers-and-movers-in-marathahalli" className="city-card fade-in-up">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Marathahalli</h3>
            </Link>

            <Link href="/packers-and-movers-in-bommasandra" className="city-card fade-in-up delay-1">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Bommasandra</h3>
            </Link>

            <Link href="/packers-and-movers-in-hulimangala" className="city-card fade-in-up delay-2">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Hulimangala</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
