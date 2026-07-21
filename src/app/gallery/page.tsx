'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    alt: 'House Shifting Packing',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    alt: 'Container Truck Loading',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    alt: 'Enclosed Car Carrier',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
    alt: 'Secure Warehouse Storage',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    alt: 'Corporate Office Relocation',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop',
    alt: 'Wooden Crating Packing',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop',
    alt: 'Bike Express Carrier',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop',
    alt: 'Intercity House Shifting Truck',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=800&auto=format&fit=crop',
    alt: 'Palletized Storage System',
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

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

        {/* Pure Image Grid Gallery Section */}
        <section style={{ padding: '70px 0 100px' }}>
          <div className="container">

            {/* Pure Image Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem',
              }}
            >
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  style={{
                    position: 'relative',
                    height: '280px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(11, 43, 60, 0.08)',
                    cursor: 'pointer',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 18px 40px rgba(11, 43, 60, 0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 43, 60, 0.08)';
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
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
                  background: 'rgba(11, 43, 60, 0.94)',
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
                    maxWidth: '900px',
                    width: '100%',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      background: '#ff4d26',
                      color: '#ffffff',
                      border: 'none',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      fontSize: '1.2rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10,
                      boxShadow: '0 4px 15px rgba(255, 77, 38, 0.5)',
                    }}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>

                  <img
                    src={selectedImage.image}
                    alt={selectedImage.alt}
                    style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block', borderRadius: '24px' }}
                  />
                </div>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
