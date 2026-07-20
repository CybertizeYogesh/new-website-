import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Domestic Moving | HSM Packers and Movers Electronic City',
  description: 'Intercity and domestic relocation services connecting Bengaluru to all major cities in India.',
  keywords: 'domestic moving bengaluru, intercity packers movers, long distance shifting india, domestic relocation electronic city',
};

export default function DomesticMovingPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/household-shifting.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Domestic Moving</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span>Services</span> / <span style={{ color: 'var(--accent-color)' }}>Domestic Moving</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">Long-Distance Relocation</span>
              <h2>Nationwide Domestic Shifting Services</h2>
              <p>
                Shifting your home or business to a new city across India requires an extensive, well-connected transport network. HSM Packers and Movers Electronic City connects Bengaluru with over 50+ cities across India.
              </p>
              <p>
                Whether moving to Mumbai, Delhi, Hyderabad, Chennai, Pune, or Kolkata, our specialized container trucks guarantee safe and scheduled deliveries.
              </p>

              <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>Why Trust Us for Intercity Moves?</h3>
              <ul className="service-list" style={{ marginTop: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Pan-India Network:</strong> Operational nodes across all tier-1 and tier-2 Indian cities.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Dedicated Trucks:</strong> Exclusive containers for full-home shipments with zero cross-contamination.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Clear Route Scheduling:</strong> Expected delivery timeline commitments with progress updates.</div></li>
              </ul>

              <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: '2rem' }}>Get Domestic Estimate</Link>
            </div>
            <div className="about-image fade-in-left">
              <div className="service-detail-img" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/assets/images/household-shifting.jpg" alt="Domestic Moving" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
