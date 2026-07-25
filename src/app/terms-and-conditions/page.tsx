import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Gati Packers Movers',
  description: 'Terms and Conditions of Gati Packers Movers regarding services, payments, liability, and cancellations.',
  keywords: 'gati packers movers terms conditions, movers terms, relocation service terms india',
  alternates: {
    canonical: 'https://speedexrelocation.com/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/legal-hero.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Terms &amp; Conditions</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span style={{ color: 'var(--accent-color)' }}>Terms &amp; Conditions</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="policy-content" style={{ lineHeight: 1.8, color: '#334155' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Welcome to Gati Packers Movers. By accessing our website and using our services, you agree to comply with the following terms and conditions.
            </p>
            <br />

            <h3>Service Agreement</h3>
            <p>
              All moving and logistics services are provided based on customer requirements and availability. Final charges may vary depending on distance, volume of goods, and additional service requirements.
            </p>
            <br />

            <h3>Customer Responsibilities</h3>
            <p>
              Customers must provide accurate details regarding items to be moved, pickup and delivery locations, and preferred moving dates.
            </p>
            <br />

            <h3>Payment Terms</h3>
            <p>
              Service charges must be paid as per the agreed quotation. Any additional services requested during relocation may incur extra costs.
            </p>
            <br />

            <h3>Damage &amp; Liability</h3>
            <p>
              While we take utmost care in handling goods, the company is not liable for damages caused due to natural disasters, improper packing of fragile items by customers, or unforeseen circumstances.
            </p>
            <br />

            <h3>Cancellation Policy</h3>
            <p>
              Service bookings can be cancelled prior to dispatch. Cancellation charges may apply depending on operational costs already incurred.
            </p>
            <br />

            <h3>Website Usage</h3>
            <p>
              Users must not misuse website content, attempt unauthorized access, or submit false enquiries.
            </p>
            <br />

            <h3>Changes to Terms</h3>
            <p>We reserve the right to update these terms at any time without prior notice.</p>
            <br />

            <h3>Contact Information</h3>
            <p>For any queries regarding these terms, please contact our support team.</p>
          </div>
        </div>
      </section>
    </>
  );
}
