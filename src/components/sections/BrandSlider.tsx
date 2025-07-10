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
  '/images/brand7.png'
];

export default function BrandSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    const amount = container.offsetWidth / 1.5;
    container.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 0.5;
    let frame: number;

    const autoScroll = () => {
      if (!container) return;
      container.scrollLeft += speed;
      // loop scroll
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      frame = requestAnimationFrame(autoScroll);
    };

    frame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative w-full rounded-xl bg-white p-8 overflow-hidden shadow-md" data-aos="fade-down">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        The Brands That Trust Us
      </h3>

      <div className="relative">
        <div
          ref={containerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth"
        >
          {[...brands, ...brands].map((src, idx) => (
            <div key={idx} className="flex-shrink-0 snap-center">
              <img src={src} alt={`Brand ${idx + 1}`} className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow z-10 transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow z-10 transition"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
