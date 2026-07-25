import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Us | Gati Packers Movers',
  description: 'Get in touch with Gati Packers Movers in New Palam Vihar, Sector 110, Gurugram for quotes, queries, or support. Call 8796757472.',
  keywords: 'contact gati packers movers, packers movers phone number gurugram, packers movers gurugram contact, shifting service enquiry gurugram',
  alternates: {
    canonical: 'https://speedexrelocation.com/contact-us',
  },
};

export default function ContactUsPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundColor: 'var(--primary-color)',
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/contact-hero.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '12rem 0 6rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Contact Us</h1>
          <div className="breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link> / <span style={{ color: 'var(--accent-color)' }}>Contact Us</span>
          </div>
        </div>
      </header>



      {/* Contact Content */}
      <section className="contact-form-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-details">
              <span className="sub-title">Get In Touch</span>
              <h2>We're Here to Help</h2>
              <p style={{ marginBottom: '2rem' }}>Have questions about your move? Need a custom quote? Reach out to us anytime.</p>

              <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="contact-item">
                  <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                  <div className="details">
                    <h4>Head Office</h4>
                    <p>Address. F201, Phase 2, New Palam Vihar, Block F, New Palam Vihar Phase 2, Sector 110, Gurugram, Haryana 122017</p>
                  </div>
                </div>

                <div className="contact-item" style={{ marginTop: '1rem' }}>
                  <div className="icon"><i className="fa-solid fa-phone"></i></div>
                  <div className="details">
                    <h4>Phone Number</h4>
                    <p><a href="tel:8796757472">8796757472</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                  <div className="details">
                    <h4>Email Address</h4>
                    <p><a href="mailto:gatipackerssmovers@gmail.com">gatipackerssmovers@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            <QuoteForm title="Send Us a Message" />
          </div>
        </div>
      </section>

      {/* Maps */}
      <div style={{ padding: '2rem 0', background: 'var(--light-bg)' }}>
        <div className="container">
          <h3 className="text-center" style={{ marginBottom: '2rem' }}>Our Location</h3>
          <div style={{ height: '400px', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.273187123456!2d77.0270!3d28.5146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19ce55555555%3A0x1111111111111111!2sSector%20110%2C%20Gurugram%2C%20Haryana%20122017!5e0!3m2!1sen!2sin!4v1781080000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
