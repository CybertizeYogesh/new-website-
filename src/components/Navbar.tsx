'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setIsDropdownOpen(prev => !prev);
    }
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <div 
        className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`} 
        id="navBackdrop"
        onClick={closeMenu}
      ></div>

      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo" onClick={closeMenu}>
            <Image 
              src="/assets/images/logo.webp" 
              alt="Gati Packers Movers" 
              width={170} 
              height={50} 
              className="logo-img" 
              priority
            />
          </Link>

          <div 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
            id="navToggle"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
            <button 
              className="nav-close-btn" 
              id="navCloseBtn" 
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link href="/about-us" className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}>
                About Us
              </Link>
            </li>
            
            <li className={`nav-item dropdown-trigger ${isDropdownOpen ? 'active' : ''}`}>
              <a 
                href="#" 
                className={`nav-link ${pathname.includes('relocation') || pathname.includes('transportation') || pathname.includes('moving') || pathname.includes('packing') || pathname.includes('warehouse') ? 'active' : ''}`}
                onClick={toggleDropdown}
              >
                Services <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.7em', marginLeft: '5px' }}></i>
              </a>
              <ul className="moverspackers-dropdown-menu">
                <li><Link href="/house-relocation">House Relocation</Link></li>
                <li><Link href="/office-relocation">Office Relocation</Link></li>
                <li><Link href="/bike-transportation">Bike Transportation</Link></li>
                <li><Link href="/car-transportation">Car Transportation</Link></li>
                <li><Link href="/domestic-moving">Domestic Moving</Link></li>
                <li><Link href="/international-moving">International Moving</Link></li>
                <li><Link href="/packing-unpacking">Packing Unpacking</Link></li>
                <li><Link href="/warehouse-service">Warehouse Service</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact-us" className={`nav-link ${isActive('/contact-us') ? 'active' : ''}`}>
                Contact Us
              </Link>
            </li>
          </ul>

          <Link href="#quote" className="btn btn-primary nav-cta" style={{ padding: '0.7rem 1.6rem', fontSize: '0.9rem' }}>
            Get a Quote
          </Link>
        </div>
      </header>
    </>
  );
}
