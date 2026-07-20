import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Office Relocation | HSM Packers and Movers Electronic City',
  description: 'Seamless office shifting services in Bengaluru with minimal downtime and safe IT equipment transport.',
  keywords: 'office relocation bengaluru, office shifting electronic city, corporate relocation bengaluru, commercial moving bengaluru',
};

export default function OfficeRelocationPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/office-relocation.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Office Relocation</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span>Services</span> / <span style={{ color: 'var(--accent-color)' }}>Office Relocation</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">Corporate Relocation</span>
              <h2>Organized &amp; Efficient Office Shifting</h2>
              <p>
                Relocating an office requires meticulous planning and swift execution to minimize downtime. HSM Packers and Movers Electronic City offers specialized commercial shifting services tailored to your company's business schedule.
              </p>
              <p>
                From sensitive IT hardware, servers, and computers to heavy office furniture and confidential files, our trained technicians handle everything with complete security.
              </p>

              <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>Our Office Shifting Highlights</h3>
              <ul className="service-list" style={{ marginTop: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>IT &amp; Electronic Hardware Packing:</strong> Anti-static bubble wrap and custom wooden crates.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Weekend Shifting:</strong> Flexible scheduling on weekends/holidays to prevent business disruption.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Document &amp; File Labeling:</strong> Systematic tagging for easy setup at the new office.</div></li>
              </ul>

              <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: '2rem' }}>Get Corporate Quote</Link>
            </div>
            <div className="about-image fade-in-left">
              <div className="service-detail-img" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/assets/images/office-relocation.png" alt="Office Relocation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
