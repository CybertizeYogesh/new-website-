import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Network | Speed Ex Relocation Packers and Movers',
  description: 'View our extensive network across India. Speed Ex Relocation Packers and Movers serves major areas in Ahmedabad including Aslali, SG Highway, Satellite, Prahlad Nagar, Narol and Changodar.',
  keywords: 'packers movers network india, speed ex relocation service area, ahmedabad packers movers locations, pan india movers network',
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
            <h2>Packers and Movers in Ahmedabad &ndash; All Major Hubs</h2>
            <p>
              Speed Ex Relocation Packers and Movers provides reliable house shifting, office relocation and vehicle transport across all major hubs in Ahmedabad and Gujarat.
            </p>
          </div>

          <div className="cities-grid">
            <Link href="/packers-and-movers-in-electronic-city" className="city-card fade-in-up">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Aslali Ahmedabad</h3>
            </Link>

            <Link href="/packers-and-movers-in-begur" className="city-card fade-in-up delay-1">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in SG Highway</h3>
            </Link>

            <Link href="/packers-and-movers-in-bellandur" className="city-card fade-in-up delay-2">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Satellite</h3>
            </Link>

            <Link href="/packers-and-movers-in-marathahalli" className="city-card fade-in-up">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Prahlad Nagar</h3>
            </Link>

            <Link href="/packers-and-movers-in-bommasandra" className="city-card fade-in-up delay-1">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Narol</h3>
            </Link>

            <Link href="/packers-and-movers-in-hulimangala" className="city-card fade-in-up delay-2">
              <div className="city-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Packers and Movers in Changodar</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
