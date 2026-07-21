import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'International Moving | Speed Ex relocation packers and movers',
  description: 'Reliable international moving & global relocation services with complete customs & air/sea cargo management.',
  keywords: 'international moving, global relocation, speed ex relocation packers and movers, overseas shifting',
};

export default function InternationalMovingPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/international.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>International Moving</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span>Services</span> / <span style={{ color: 'var(--accent-color)' }}>International Moving</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">Global Relocation</span>
              <h2>Seamless Overseas &amp; International Shifting</h2>
              <p>
                Relocating abroad involves complex customs documentations, air cargo regulations, and international freight standards. Speed Ex relocation packers and movers offers end-to-end international moving services.
              </p>
              <p>
                Our team assists with export packing, air/sea freight booking, customs documentation, and door-delivery partnerships in destination countries worldwide.
              </p>

              <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>International Services Include</h3>
              <ul className="service-list" style={{ marginTop: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>International Export Packing:</strong> Heavy-duty wooden crating &amp; moisture-proof wrapping.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Air &amp; Sea Cargo Logistics:</strong> Full Container Load (FCL) &amp; Less than Container Load (LCL) options.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Customs Clearance Support:</strong> Complete guidance for documentation &amp; duty declarations.</div></li>
              </ul>

              <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: '2rem' }}>Inquire International Move</Link>
            </div>
            <div className="about-image fade-in-left">
              <div className="service-detail-img" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/assets/images/international.jpg" alt="International Moving" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
