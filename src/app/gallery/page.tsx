'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const galleryItems = [
  {
    id: 1,
    category: 'packing',
    title: 'Multi-Layer House Packing',
    subtitle: 'Bubble wrapping fragile electronics & furniture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'shifting',
    title: 'Container Truck Loading',
    subtitle: 'Safe loading with ramps & protective straps',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'transportation',
    title: 'Enclosed Car Carrier',
    subtitle: 'Zero-scratch vehicle transportation nationwide',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'warehouse',
    title: 'Secure Warehouse Storage',
    subtitle: '24/7 CCTV surveillance & climate-controlled units',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'shifting',
    title: 'Corporate Office Relocation',
    subtitle: 'Systematic IT desk & server rack movement',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    category: 'packing',
    title: 'Wooden Crating for Delicate Items',
    subtitle: 'Custom wooden box packing for TV & artwork',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    category: 'transportation',
    title: 'Bike Express Carrier',
    subtitle: 'Safe two-wheeler packing & doorstep delivery',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    category: 'shifting',
    title: 'Intercity House Shifting',
    subtitle: 'Full household relocation with dedicated truck',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 9,
    category: 'warehouse',
    title: 'Palletized Storage System',
    subtitle: 'Clean & organized storage for long-term hold',
    image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=800&auto=format&fit=crop',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Navbar />

      <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
        {/* Page Hero Header */}
        <section
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #0b2b3c 0%, #061d29 100%)',
            padding: '120px 0 70px',
            color: '#ffffff',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.12,
              backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <span
              style={{
                background: 'rgba(255, 77, 38, 0.15)',
                color: '#ff4d26',
                padding: '6px 20px',
                borderRadius: '30px',
                fontWeight: 800,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                display: 'inline-block',
                marginBottom: '1rem',
              }}
            >
              Visual Showcase
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
              Our Shifting &amp; Packing Gallery
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
              Explore real-world glimpses of our professional house shifting, secure packing, vehicle transport, and warehouse storage solutions.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
              <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <span style={{ color: '#ff4d26', fontWeight: 600 }}>Gallery</span>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section style={{ padding: '80px 0 110px' }}>
          <div className="container">

            {/* Category Filter Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '3.5rem',
              }}
            >
              {[
                { id: 'all', label: 'All Photos' },
                { id: 'packing', label: 'Packing & Wrapping' },
                { id: 'shifting', label: 'House & Office Shifting' },
                { id: 'transportation', label: 'Car & Bike Transport' },
                { id: 'warehouse', label: 'Warehouse Storage' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.75rem 1.6rem',
                    borderRadius: '30px',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    border: '1px solid',
                    borderColor: activeCategory === cat.id ? '#ff4d26' : '#cbd5e1',
                    background: activeCategory === cat.id ? '#ff4d26' : '#ffffff',
                    color: activeCategory === cat.id ? '#ffffff' : '#0b2b3c',
                    cursor: 'pointer',
                    boxShadow: activeCategory === cat.id ? '0 8px 20px rgba(255, 77, 38, 0.3)' : '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem',
              }}
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 8px 25px rgba(11, 43, 60, 0.05)',
                    cursor: 'pointer',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 18px 40px rgba(11, 43, 60, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 43, 60, 0.05)';
                  }}
                >
                  <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(11, 43, 60, 0.85)',
                        color: '#ffffff',
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      <i className="fa-solid fa-expand" style={{ fontSize: '0.9rem' }}></i>
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0b2b3c', marginBottom: '0.4rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Lightbox for Enlarged Image View */}
            {selectedImage && (
              <div
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(11, 43, 60, 0.92)',
                  backdropFilter: 'blur(8px)',
                  zIndex: 9999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                }}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: 'relative',
                    maxWidth: '850px',
                    width: '100%',
                    background: '#ffffff',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                  }}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: '#ff4d26',
                      color: '#ffffff',
                      border: 'none',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      fontSize: '1.2rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10,
                      boxShadow: '0 4px 15px rgba(255, 77, 38, 0.4)',
                    }}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>

                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }}
                  />

                  <div style={{ padding: '1.75rem 2rem' }}>
                    <span style={{ color: '#ff4d26', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.82rem', letterSpacing: '1px' }}>
                      {selectedImage.category}
                    </span>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0b2b3c', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                      {selectedImage.title}
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0 }}>
                      {selectedImage.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Call-To-Action Banner */}
            <div
              style={{
                marginTop: '5rem',
                background: 'linear-gradient(135deg, #0b2b3c 0%, #1e3a8a 100%)',
                borderRadius: '24px',
                padding: '3.5rem 2.5rem',
                color: '#ffffff',
                textAlign: 'center',
                boxShadow: '0 15px 35px rgba(11, 43, 60, 0.2)',
              }}
            >
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>
                Planning a Move? Get a Free Instant Quotation!
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                Experience stress-free shifting with Speed Ex Relocation Packers and Movers. Professional staff, safe packing, and dedicated transport.
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact-us" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
                  Get Free Quote
                </Link>
                <a href="tel:09624644006" className="btn btn-outline" style={{ padding: '0.85rem 2rem', fontSize: '1rem', color: '#ffffff', borderColor: '#ffffff' }}>
                  <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i> Call 9624644006
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
