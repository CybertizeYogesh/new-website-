'use client';

import React from 'react';

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ImageReveal({ children, className = '' }: ImageRevealProps) {
  return (
    <div className={`reveal-container ${className}`} style={{ opacity: 1, visibility: 'visible', overflow: 'hidden', position: 'relative' }}>
      {children}
    </div>
  );
}
