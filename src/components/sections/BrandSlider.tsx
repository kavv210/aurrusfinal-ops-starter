// components/BrandSlider.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const brands = [
  '/images/brand1.png',
  '/images/brand2.png',
  '/images/brand3.png',
  '/images/brand4.png',
  '/images/brand5.png',
  '/images/brand6.png',
  '/images/brand7.png',
];

// Duplicate logos for seamless infinite scroll
const looped = [...brands, ...brands, ...brands];

export default function BrandSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const c = containerRef.current;
    if (!c) return;
    const amount = c.offsetWidth / 1.5;
    c.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    const speed = 0.5; // slower auto-scroll
    let raf: number;

    const loop = () => {
      if (!c) return;
      c.scrollLeft += speed;
      if (c.scrollLeft >= c.scrollWidth - c.offsetWidth) c.scrollLeft = 0;
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full rounded-xl bg-white p-8 overflow-hidden shadow-md">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        The Brands That Trust Us
      </h3>
      <div ref={containerRef} className="flex space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-none">
        {looped.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 snap-center">
            <img src={src} alt={`Brand ${idx + 1}`} className="h-12 w-auto object-contain" />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow z-10 transition"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow z-10 transition"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}
