'use client';

import React from 'react';

interface TextAnimeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function TextAnime({ children, className = '' }: TextAnimeProps) {
  return (
    <div className={`text-anime-wrap ${className}`} style={{ opacity: 1, visibility: 'visible' }}>
      {children}
    </div>
  );
}
