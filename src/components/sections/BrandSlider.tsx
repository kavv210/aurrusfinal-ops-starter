'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const logos = [
  '/images/brand1.png',
  '/images/brand2.png',
  '/images/brand3.png',
  '/images/brand4.png',
  '/images/brand5.png',
  '/images/brand6.png',
  '/images/brand7.png'
]

export default function BrandSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full px-6 py-10 bg-white">
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow"
        onClick={() => scroll(-200)}
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-20 w-auto rounded-xl opacity-70 transition hover:opacity-100"
          />
        ))}
      </div>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow"
        onClick={() => scroll(200)}
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  )
}
