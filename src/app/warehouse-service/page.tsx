import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Warehouse Service | Speed Ex relocation packers and movers',
  description: 'Spacious, clean, and 24/7 monitored warehouse & storage facilities for short and long-term goods storage.',
  keywords: 'warehouse service, storage facilities, speed ex relocation packers and movers, goods storage ahmedabad',
};

export default function WarehouseServicePage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/warehouse.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Warehouse Service</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span>Services</span> / <span style={{ color: 'var(--accent-color)' }}>Warehouse Service</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in-right">
              <span className="sub-title">Secure Storage Facilities</span>
              <h2>Flexible Household &amp; Commercial Warehousing</h2>
              <p>
                Need a safe place to store your household goods or commercial inventory during a transition? Speed Ex relocation packers and movers offers spacious, clean, and 24/7 monitored warehouse facilities.
              </p>
              <p>
                Our warehouses are equipped with pest control, fire protection systems, and round-the-clock CCTV surveillance to keep your belongings completely safe.
              </p>

              <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>Warehouse Key Features</h3>
              <ul className="service-list" style={{ marginTop: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>24/7 Surveillance:</strong> CCTV monitoring &amp; dedicated security personnel.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Pest &amp; Moisture Control:</strong> Clean, dry, and regularly fumigated storage units.</div></li>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}><i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-color)', marginTop: '5px' }}></i> <div><strong>Flexible Plans:</strong> Daily, weekly, monthly, or long-term rental options.</div></li>
              </ul>

              <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: '2rem' }}>Inquire Storage Space</Link>
            </div>
            <div className="about-image fade-in-left">
              <div className="service-detail-img" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/assets/images/warehouse.jpg" alt="Warehouse Service" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
