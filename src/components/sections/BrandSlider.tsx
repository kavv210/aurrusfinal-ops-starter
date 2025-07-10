import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BrandSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 0.5; // slower

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    let anim: number;
    const step = () => {
      if (c.scrollWidth - c.scrollLeft <= c.offsetWidth + 1) {
        c.scrollLeft = 0;
      }
      c.scrollLeft += scrollSpeed;
      anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
    return () => cancelAnimationFrame(anim);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const c = containerRef.current;
    if (!c) return;
    const amt = c.offsetWidth * 0.8;
    c.scrollBy({ left: dir === 'left' ? -amt : amt, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full py-10 bg-white rounded-xl overflow-hidden" data-aos="fade-down">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Brands That Trust Us
      </h3>
      <div className="relative">
        <div ref={containerRef} className="flex space-x-8 overflow-x-scroll scrollbar-thumb-orange-500 scrollbar-track-orange-100 scroll-smooth px-6">
          {[...brands, ...brands].map((src, i) => (
            <img key={i} src={src} alt={`Brand ${i}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
          ))}
        </div>
        <button onClick={() => scroll('left')}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button onClick={() => scroll('right')}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full">
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
