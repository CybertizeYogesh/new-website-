import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Us | HSM Packers and Movers Electronic City',
  description: 'Get in touch with HSM Packers and Movers Electronic City for quotes, queries, or support. We are available 24/7.',
  keywords: 'contact HSM packers movers, packers movers phone number bengaluru, packers movers electronic city contact, shifting service enquiry bengaluru',
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

      {/* Offices Section */}
      <section className="section bg-light" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <h3 className="text-center" style={{ marginBottom: '3rem' }}>Our Branch Offices</h3>
          <div className="cities-grid" style={{ marginTop: 0 }}>
            <div className="contact-item" style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
              <div className="icon" style={{ marginBottom: '1rem', fontSize: '2rem', color: 'var(--primary-color)' }}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="details">
                <h4 style={{ marginBottom: '0.5rem' }}>Branch Office 1</h4>
                <p style={{ fontSize: '0.95rem' }}>Shop No.5, Begur Koppa Main Road, Mylasandra Rd, near SNN Raj Serenity, Bengaluru, Karnataka 560114</p>
              </div>
            </div>

            <div className="contact-item" style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
              <div className="icon" style={{ marginBottom: '1rem', fontSize: '2rem', color: 'var(--primary-color)' }}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="details">
                <h4 style={{ marginBottom: '0.5rem' }}>Branch Office 2</h4>
                <p style={{ fontSize: '0.95rem' }}>Main Rd, 3rd Cross Rd, Devarabisanahalli, Bellandur, Bengaluru, Karnataka 560103</p>
              </div>
            </div>

            <div className="contact-item" style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
              <div className="icon" style={{ marginBottom: '1rem', fontSize: '2rem', color: 'var(--primary-color)' }}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="details">
                <h4 style={{ marginBottom: '0.5rem' }}>Branch Office 3</h4>
                <p style={{ fontSize: '0.95rem' }}>Ayyappa Layout, Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037</p>
              </div>
            </div>

            <div className="contact-item" style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
              <div className="icon" style={{ marginBottom: '1rem', fontSize: '2rem', color: 'var(--primary-color)' }}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="details">
                <h4 style={{ marginBottom: '0.5rem' }}>Branch Office 4</h4>
                <p style={{ fontSize: '0.95rem' }}>No. 8, kalena Agrahara, kothnur road, Meenakshi layout, gottigere, Bengaluru, Karnataka 560083</p>
                <br />
                <h4>Phone Number</h4>
                <p><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;<a href="tel:07300412700">073004 12700</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <p>No.93, Maragondanahalli, Hulimangala, Electronic City, Bommasandra, Bengaluru, Karnataka 560105</p>
                  </div>
                </div>

                <div className="contact-item" style={{ marginTop: '1rem' }}>
                  <div className="icon"><i className="fa-solid fa-phone"></i></div>
                  <div className="details">
                    <h4>Phone Number</h4>
                    <p><a href="tel:09980303730">099803 03730</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                  <div className="details">
                    <h4>Email Address</h4>
                    <p><a href="mailto:info@hsmpackersandmovers.in">info@hsmpackersandmovers.in</a></p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4386.6178143709585!2d77.64877111113913!3d12.829655887420545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b225c41733f%3A0x4d6c3ea91c710c1!2sHsm%20packers%20and%20movers%20electronic%20city!5e1!3m2!1sen!2sin!4v1781079105787!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
