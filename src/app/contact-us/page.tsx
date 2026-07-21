import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Us | Speed Ex Relocation Packers and Movers',
  description: 'Get in touch with Speed Ex Relocation Packers and Movers in Aslali, Ahmedabad for quotes, queries, or support. Call 9624644006 / 9211206101.',
  keywords: 'contact speed ex relocation, packers movers phone number ahmedabad, packers movers aslali contact, shifting service enquiry ahmedabad',
};

export default function ContactUsPage() {
  return (
    <>
      <header className="page-header" style={{
        backgroundColor: 'var(--primary-color)',
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop')`,
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
                    <p>B 107, Bijal Business Centre, Aslali Circle, Aslali, Ahmedabad, Gujarat - 382427</p>
                  </div>
                </div>

                <div className="contact-item" style={{ marginTop: '1rem' }}>
                  <div className="icon"><i className="fa-solid fa-phone"></i></div>
                  <div className="details">
                    <h4>Phone Numbers</h4>
                    <p><a href="tel:09624644006">9624644006</a> / <a href="tel:09211206101">9211206101</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                  <div className="details">
                    <h4>Email Address</h4>
                    <p><a href="mailto:speedexrelocation3@gmail.com">speedexrelocation3@gmail.com</a></p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3168877543883!2d72.58552197591605!3d22.938556519453714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8f4955555555%3A0x1111111111111111!2sAslali%20Circle%2C%20Aslali%2C%20Ahmedabad%2C%20Gujarat%20382427!5e0!3m2!1sen!2sin!4v1781080000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
