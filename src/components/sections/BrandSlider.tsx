'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const logos = [
  { src: '/images/brand1.png', alt: 'Brand 1' },
  { src: '/images/brand2.png', alt: 'Brand 2' },
  { src: '/images/brand3.png', alt: 'Brand 3' },
  { src: '/images/brand4.png', alt: 'Brand 4' },
  { src: '/images/brand5.png', alt: 'Brand 5' },
  { src: '/images/brand6.png', alt: 'Brand 6' },
  { src: '/images/brand7.png', alt: 'Brand 7' },
  { src: '/images/brand8.png', alt: 'Brand 8' },
  { src: '/images/brand9.png', alt: 'Brand 9' },
  { src: '/images/brand10.png', alt: 'Brand 10' },
  { src: '/images/brand11.png', alt: 'Brand 11' },
  { src: '/images/brand12.png', alt: 'Brand 12' },
  { src: '/images/brand13.png', alt: 'Brand 13' }
];

export default function BrandSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = direction === 'left' ? -300 : 300;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#FFF8F0] px-4 pt-8 pb-8">
      <div className="max-w-6xl mx-auto rounded-2xl shadow-lg bg-white p-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Brands That Trust Us</h2>
          <p className="text-gray-600 text-base">We collaborate with companies that lead by example.</p>
        </div>

        {/* Arrows */}
        <div className="flex justify-end items-center mb-4 gap-4">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Logo Row */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-2"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 flex justify-center items-center bg-white rounded-xl shadow hover:scale-105 transition-transform"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
