'use client';

import React, { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.5;
    let frameId: number;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += speed;
      scrollAmount += speed;

      if (scrollAmount >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }

      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="relative w-full py-16 px-4">
      {/* Background block */}
      <div className="relative rounded-xl bg-[rgba(255,255,255,0.85)] shadow-md px-6 py-12 overflow-hidden">
        <h3 className="text-center text-3xl sm:text-4xl font-semibold text-gray-800 mb-10">
          The Brands That Trust Us
        </h3>

        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white/90 via-white/60 to-transparent pointer-events-none z-10 rounded-l-xl" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white/90 via-white/60 to-transparent pointer-events-none z-10 rounded-r-xl" />

        {/* Scrolling container */}
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex whitespace-nowrap space-x-10"
          >
            {[...brands, ...brands].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Brand ${idx + 1}`}
                className="h-12 w-auto object-contain inline-block"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
