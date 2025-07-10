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

// Duplicate logos to fake infinite scroll
const loopingBrands = [...brands, ...brands, ...brands];

export default function BrandSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 1.5;
    const newScrollPos =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newScrollPos, behavior: 'smooth' });
  };

  // Fake infinite scroll with reset logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = 0.5;
    let animationId: number;

    const animate = () => {
      if (!container) return;
      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= container.scrollWidth - container.offsetWidth - 1) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-full pt-8 pb-16 bg-white overflow-hidden">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Brands That Trust Us
      </h3>

      {/* Scrollable Logo Row */}
      <div className="relative">
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-scroll scroll-smooth px-6 hide-scrollbar"
        >
          {loopingBrands.map((src, idx) => (
            <div
              key={idx}
              className="h-24 w-44 bg-[#f9f9f9] rounded-2xl p-4 flex items-center justify-center shadow transition hover:scale-105"
            >
              <img
                src={src}
                alt={`Brand ${idx + 1}`}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 backdrop-blur-md p-2 rounded-full shadow z-20 transition"
        >
          <ChevronLeft className="text-gray-700 w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 backdrop-blur-md p-2 rounded-full shadow z-20 transition"
        >
          <ChevronRight className="text-gray-700 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
