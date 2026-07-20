import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | HSM Packers and Movers Electronic City',
  description: 'Privacy Policy of HSM Packers and Movers Electronic City explaining how we collect, use, and protect your data.',
  keywords: 'HSM packers movers privacy policy, packers movers data policy bengaluru',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 5rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Privacy Policy</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span style={{ color: 'var(--accent-color)' }}>Privacy Policy</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <h2 style={{ marginBottom: '1.5rem' }}>Privacy Policy</h2>
            <p>
              At HSM Packers and Movers Electronic City, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
            </p>
            <br />

            <h3>Information We Collect</h3>
            <p>
              We may collect personal details such as your name, phone number, email address, moving location, and service requirements when you submit an enquiry form or contact us.
            </p>
            <br />

            <h3>How We Use Your Information</h3>
            <p>
              Your information is used to provide moving quotations, schedule services, improve customer support, and communicate service updates. We do not sell or rent your personal data to third parties.
            </p>
            <br />

            <h3>Data Security</h3>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, misuse, or disclosure.
            </p>
            <br />

            <h3>Cookies</h3>
            <p>
              Our website may use cookies to enhance browsing experience and analyze website traffic.
            </p>
            <br />

            <h3>Third-Party Links</h3>
            <p>
              Our website may contain links to external websites. We are not responsible for the privacy practices of those websites.
            </p>
            <br />

            <h3>Your Consent</h3>
            <p>By using our website, you consent to our Privacy Policy.</p>
            <br />

            <h3>Contact Us</h3>
            <p>
              If you have any questions regarding this policy, please contact us via phone or email listed on our website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
