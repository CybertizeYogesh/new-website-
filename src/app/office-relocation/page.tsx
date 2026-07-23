import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Office Moving Services | Shifting Company & Transport Logistics Company',
  description: 'Top office moving services in Ahmedabad by Speed Ex Relocation. Reliable shifting company & transport logistics company for IT equipment & commercial office moving. Call: 9624644006.',
  keywords: 'office moving services, shifting company, transport logistics company, best packers and movers, packers and movers ahmedabad, relocation movers near me',
  alternates: {
    canonical: 'https://speedexrelocation.com/office-relocation',
  },
};

export default function OfficeRelocationPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/office-relocation.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Office Moving Services</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span>Services</span> / <span style={{ color: 'var(--accent-color)' }}>Office Moving Services</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">Corporate Relocation</span>
              <h2>Organized Office Moving Services by Premier Transport Logistics Company</h2>
              <p>
                Relocating an office requires meticulous planning and swift execution to minimize downtime. As a premier shifting company and transport logistics company in Ahmedabad, Speed Ex Relocation Packers and Movers offers specialized office moving services tailored to your business schedule.
              </p>
              <p>
                From sensitive IT hardware, servers, and computers to heavy office furniture and confidential files, our trained relocation movers near me handle everything with zero risk.
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
                <img src="/assets/images/office-relocation.webp" alt="Office Relocation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
