'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer-luxury">
      <div className="footer-top-accent"></div>

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-card">
            <Link href="/" className="footer-logo">
              <Image 
                src="/assets/images/logo.png" 
                alt="HSM Packers and Movers Electronic City" 
                width={190} 
                height={60} 
                className="footer-logo-img" 
              />
            </Link>
            <p className="footer-bio">
              HSM Packers and Movers Electronic City is India’s premier relocation partner, ensuring 100% safe, seamless, and stress-free house shifting, office moving, and vehicle transport.
            </p>
            <div className="footer-social-glow">
              <a href="#" aria-label="Facebook" className="social-btn"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter" className="social-btn"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" aria-label="Instagram" className="social-btn"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn" className="social-btn"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link href="/"><i className="fa-solid fa-chevron-right link-icon"></i> Home</Link></li>
              <li><Link href="/about-us"><i className="fa-solid fa-chevron-right link-icon"></i> About Us</Link></li>
              <li><Link href="/network-us"><i className="fa-solid fa-chevron-right link-icon"></i> Our Network</Link></li>
              <li><Link href="/contact-us"><i className="fa-solid fa-chevron-right link-icon"></i> Contact Us</Link></li>
              <li><Link href="/privacy-policy"><i className="fa-solid fa-chevron-right link-icon"></i> Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions"><i className="fa-solid fa-chevron-right link-icon"></i> Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links-list">
              <li><Link href="/house-relocation"><i className="fa-solid fa-box-open link-icon"></i> House Relocation</Link></li>
              <li><Link href="/office-relocation"><i className="fa-solid fa-building link-icon"></i> Office Shifting</Link></li>
              <li><Link href="/bike-transportation"><i className="fa-solid fa-motorcycle link-icon"></i> Bike Transportation</Link></li>
              <li><Link href="/car-transportation"><i className="fa-solid fa-car-side link-icon"></i> Car Transportation</Link></li>
              <li><Link href="/domestic-moving"><i className="fa-solid fa-truck-ramp-box link-icon"></i> Domestic Moving</Link></li>
              <li><Link href="/international-moving"><i className="fa-solid fa-plane-departure link-icon"></i> International Moving</Link></li>
              <li><Link href="/packing-unpacking"><i className="fa-solid fa-boxes-packing link-icon"></i> Packing &amp; Unpacking</Link></li>
              <li><Link href="/warehouse-service"><i className="fa-solid fa-warehouse link-icon"></i> Warehouse Service</Link></li>
            </ul>
          </div>

          {/* Bengaluru Suburbs Column & Newsletter */}
          <div className="footer-col">
            <h4 className="footer-heading">Bengaluru Suburbs</h4>
            <ul className="footer-links-list" style={{ marginBottom: '2rem' }}>
              <li><Link href="/packers-and-movers-in-electronic-city"><i className="fa-solid fa-location-dot link-icon"></i> Electronic City</Link></li>
              <li><Link href="/packers-and-movers-in-begur"><i className="fa-solid fa-location-dot link-icon"></i> Begur</Link></li>
              <li><Link href="/packers-and-movers-in-bellandur"><i className="fa-solid fa-location-dot link-icon"></i> Bellandur</Link></li>
              <li><Link href="/packers-and-movers-in-bommasandra"><i className="fa-solid fa-location-dot link-icon"></i> Bommasandra</Link></li>
              <li><Link href="/packers-and-movers-in-hulimangala"><i className="fa-solid fa-location-dot link-icon"></i> Hulimangala</Link></li>
              <li><Link href="/packers-and-movers-in-marathahalli"><i className="fa-solid fa-location-dot link-icon"></i> Marathahalli</Link></li>
            </ul>

            <div className="footer-newsletter">
              <h5 style={{ color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 700 }}>Newsletter</h5>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.75rem' }}>Subscribe for instant updates &amp; moving discounts.</p>
              <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit" aria-label="Subscribe"><i className="fa-solid fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-bar">
          <p>
            &copy; {currentYear} <strong>HSM Packers and Movers Electronic City</strong>. All Rights Reserved. <br />
            Developed &amp; Designed By{' '}
            <a 
              href="https://altgs.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="credit-link"
            >
              Acilaris Technologies Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
