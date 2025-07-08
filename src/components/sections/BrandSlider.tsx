import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import classNames from 'classnames';

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
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 1.5;
    const newScrollPos = direction === 'left' ? scrollPos - scrollAmount : scrollPos + scrollAmount;
    setScrollPos(newScrollPos);
    container.scrollTo({ left: newScrollPos, behavior: 'smooth' });
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => scroll('right'), 3000);
    return () => clearInterval(interval);
  }, [scrollPos]);

  return (
    <div className="relative w-full py-10 bg-white overflow-hidden">
      <div className="flex items-center justify-between mb-4 px-4">
        <h3 className="text-xl font-semibold text-gray-800">Trusted by Brands</h3>
        <div className="space-x-2 hidden sm:flex">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className={classNames(
          'flex space-x-10 px-6 overflow-x-auto scroll-smooth',
          'hide-scrollbar'
        )}
      >
        {brands.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Brand ${idx + 1}`}
            className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  );
}
