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

    // Tripling the brand icons for infinite scroll illusion
    container.innerHTML += container.innerHTML + container.innerHTML;

    const speed = 0.5;
    let frame: number;

    const autoScroll = () => {
      if (container) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 3) {
          container.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(autoScroll);
    };

    frame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="relative w-full rounded-xl bg-white p-8 overflow-hidden shadow-md"
      data-aos="fade-down"
    >
      <h3 className="text-center text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
        The Brands That Trust Us
      </h3>

      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex whitespace-nowrap space-x-10"
        >
          {brands.map((src, idx) => (
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
  );
}
