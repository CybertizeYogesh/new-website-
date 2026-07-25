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
                src="/assets/images/logo-footer.webp" 
                alt="Gati Packers Movers" 
                width={190} 
                height={60} 
                className="footer-logo-img" 
              />
            </Link>
            <p className="footer-bio">
              Gati Packers Movers is India’s premier relocation partner, ensuring 100% safe, seamless, and stress-free house shifting, office moving, and vehicle transport.
            </p>
            <div style={{ marginTop: '1rem', color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.6' }}>
              <p style={{ marginBottom: '0.4rem' }}><i className="fa-solid fa-location-dot" style={{ color: '#ff4d26', marginRight: '8px' }}></i> Address. F201, Phase 2, New Palam Vihar, Block F, New Palam Vihar Phase 2, Sector 110, Gurugram, Haryana 122017</p>
              <p style={{ marginBottom: '0.4rem' }}><i className="fa-solid fa-phone" style={{ color: '#ff4d26', marginRight: '8px' }}></i> <a href="tel:8796757472" style={{ color: '#ffffff' }}>8796757472</a></p>
              <p><i className="fa-solid fa-envelope" style={{ color: '#ff4d26', marginRight: '8px' }}></i> <a href="mailto:gatipackerssmovers@gmail.com" style={{ color: '#ffffff' }}>gatipackerssmovers@gmail.com</a></p>
            </div>
          </div>

          {/* Right Section Columns Grouped */}
          <div className="footer-right-group">
            {/* Quick Links Column */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links-list">
                <li><Link href="/"><i className="fa-solid fa-chevron-right link-icon"></i> Home</Link></li>
                <li><Link href="/about-us"><i className="fa-solid fa-chevron-right link-icon"></i> About Us</Link></li>
                <li><Link href="/gallery"><i className="fa-solid fa-chevron-right link-icon"></i> Our Gallery</Link></li>
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

            {/* Gurgaon & Gurugram SEO Areas Column */}
            <div className="footer-col">
              <h4 className="footer-heading">Gurgaon &amp; Gurugram Hubs</h4>
              <ul className="footer-links-list">
                <li><Link href="/packers-and-movers-in-gurgaon-sector-31"><i className="fa-solid fa-location-dot link-icon"></i> Sector 31 Gurgaon</Link></li>
                <li><Link href="/packers-and-movers-in-gurgaon-sector-51"><i className="fa-solid fa-location-dot link-icon"></i> Sector 51 Gurgaon</Link></li>
                <li><Link href="/packers-and-movers-in-dlf-phase-3-gurgaon"><i className="fa-solid fa-location-dot link-icon"></i> DLF Phase 3 Gurgaon</Link></li>
                <li><Link href="/packers-and-movers-in-gurgaon"><i className="fa-solid fa-location-dot link-icon"></i> Gurgaon City</Link></li>
                <li><Link href="/packers-and-movers-in-gurugram"><i className="fa-solid fa-location-dot link-icon"></i> Gurugram Haryana</Link></li>
                <li><Link href="/packers-and-movers-in-new-palam-vihar"><i className="fa-solid fa-location-dot link-icon"></i> New Palam Vihar</Link></li>
              </ul>
            </div>

            {/* Newsletter Column - Right of Areas */}
            <div className="footer-col">
              <h4 className="footer-heading">Newsletter</h4>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Subscribe for instant updates &amp; moving discounts.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit" aria-label="Subscribe"><i className="fa-solid fa-paper-plane"></i></button>
              </form>
              <div className="footer-social-glow" style={{ marginTop: '1.5rem' }}>
                <a href="#" aria-label="Facebook" className="social-btn"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter" className="social-btn"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" aria-label="Instagram" className="social-btn"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn" className="social-btn"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Copyright & Developer Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright-text">
            &copy; Copyright {currentYear} Gati Packers Movers All Rights Reserved
          </p>
          <p className="footer-dev-credit">
            Developed by{' '}
            <a 
              href="https://cybertizegrowth.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#ff4d26', fontWeight: 600 }}
            >
              Cybertizegrowth
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
