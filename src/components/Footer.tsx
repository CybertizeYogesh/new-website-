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
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Image 
                src="/assets/images/logo.png" 
                alt="HSM Packers and Movers Electronic City" 
                width={180} 
                height={60} 
                className="logo-img" 
              />
            </Link>
            <p>
              HSM Packers and Movers Electronic City provides reliable, stress-free house shifting, office relocation, and vehicle transportation services across Bengaluru and nationwide.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/network-us">Our Network</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link href="/house-relocation">House Relocation</Link></li>
              <li><Link href="/office-relocation">Office Relocation</Link></li>
              <li><Link href="/bike-transportation">Bike Transportation</Link></li>
              <li><Link href="/car-transportation">Car Transportation</Link></li>
              <li><Link href="/domestic-moving">Domestic Moving</Link></li>
              <li><Link href="/warehouse-service">Warehouse Service</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Bengaluru Suburbs</h4>
            <ul>
              <li><Link href="/packers-and-movers-in-electronic-city">Electronic City</Link></li>
              <li><Link href="/packers-and-movers-in-begur">Begur</Link></li>
              <li><Link href="/packers-and-movers-in-bellandur">Bellandur</Link></li>
              <li><Link href="/packers-and-movers-in-bommasandra">Bommasandra</Link></li>
              <li><Link href="/packers-and-movers-in-hulimangala">Hulimangala</Link></li>
              <li><Link href="/packers-and-movers-in-marathahalli">Marathahalli</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} HSM Packers and Movers Electronic City. All Rights Reserved. <br />
            Developed & Design By{' '}
            <a 
              href="https://altgs.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Acilaris Technologies Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
