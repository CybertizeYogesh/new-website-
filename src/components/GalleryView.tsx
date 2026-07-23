'use client';

import React, { useState } from 'react';

const galleryItems = [
  { id: 1, image: '/assets/gallery/g1.webp', alt: 'Speed Ex Relocation Packing Service 1' },
  { id: 2, image: '/assets/gallery/g3.webp', alt: 'Speed Ex Relocation Packing Service 3' },
  { id: 3, image: '/assets/gallery/g4.webp', alt: 'Speed Ex Relocation Packing Service 4' },
  { id: 4, image: '/assets/gallery/g5.webp', alt: 'Speed Ex Relocation Packing Service 5' },
  { id: 5, image: '/assets/gallery/g6.webp', alt: 'Speed Ex Relocation Packing Service 6' },
  { id: 6, image: '/assets/gallery/g7.webp', alt: 'Speed Ex Relocation Packing Service 7' },
  { id: 7, image: '/assets/gallery/g8.webp', alt: 'Speed Ex Relocation Packing Service 8' },
  { id: 8, image: '/assets/gallery/14.webp', alt: 'Speed Ex Relocation House Shifting 14' },
  { id: 9, image: '/assets/gallery/19.webp', alt: 'Speed Ex Relocation House Shifting 19' },
  { id: 10, image: '/assets/gallery/25.webp', alt: 'Speed Ex Relocation House Shifting 25' },
  { id: 11, image: '/assets/gallery/26.webp', alt: 'Speed Ex Relocation House Shifting 26' },
  { id: 12, image: '/assets/gallery/33.webp', alt: 'Speed Ex Relocation House Shifting 33' },
  { id: 13, image: '/assets/gallery/345422581_202580665914685_1689944356770768685_n.jpg.webp', alt: 'Speed Ex Relocation Shifting Team' },
  { id: 14, image: '/assets/gallery/features-v2-img1.webp', alt: 'Speed Ex Relocation Moving Feature 1' },
  { id: 15, image: '/assets/gallery/features-v2-img2.webp', alt: 'Speed Ex Relocation Moving Feature 2' },
  { id: 16, image: '/assets/gallery/features-v2-img3.webp', alt: 'Speed Ex Relocation Moving Feature 3' },
  { id: 17, image: '/assets/gallery/features-v2-img4.webp', alt: 'Speed Ex Relocation Moving Feature 4' },
  { id: 18, image: '/assets/gallery/g2.webp', alt: 'Speed Ex Relocation Packing Service 2' },
  { id: 19, image: '/assets/gallery/26.webp', alt: 'Speed Ex Relocation House Shifting 26 Detail' },
  { id: 20, image: '/assets/gallery/Increase-Sales.webp', alt: 'Speed Ex Relocation Logistics Transport' },
];

export default function GalleryView() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
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
              border: '1px solid #e2e8f0',
              background: '#ffffff',
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
  );
}
