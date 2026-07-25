import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bike Transportation | Gati Packers Movers',
  description: 'Scratch-free two-wheeler & bike transport services across India with closed container carriers. Call: 8796757472.',
  keywords: 'bike transport, bike shifting, two wheeler transport india, motor bike relocation, gati packers movers',
  alternates: {
    canonical: 'https://speedexrelocation.com/bike-transportation',
  },
};

export default function BikeTransportationPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/vehicle-transportation.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Bike Transportation</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span>Services</span> / <span style={{ color: 'var(--accent-color)' }}>Bike Transportation</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">Two-Wheeler Moving</span>
              <h2>Safe &amp; Scratch-Free Bike Transport</h2>
              <p>
                Your two-wheeler is a valuable asset. Gati Packers Movers provides specialized bike transportation services using high-quality protective wrapping materials and specialized vehicle containers.
              </p>
              <p>
                We cover bikes of all types—from standard commuter motorcycles to premium sports bikes and scooters—ensuring safe transit without a single scratch.
              </p>

              <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>Bike Moving Advantages</h3>
              <ul className="service-list" style={{ marginTop: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Triple-Layer Wrapping:</strong> Bubble wrap, corrugated sheets, and stretch film protection.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Dedicated Vehicle Carriers:</strong> Hydraulic ramp loading &amp; safety tie-down belts.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Transit Insurance:</strong> Complete peace of mind for long-distance transport.</div></li>
              </ul>

              <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book Bike Transport</Link>
            </div>
            <div className="about-image fade-in-left">
              <div className="service-detail-img" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/assets/images/vehicle-transportation.webp" alt="Bike Transportation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
