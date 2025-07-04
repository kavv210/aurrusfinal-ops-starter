const plugin = require('tailwindcss/plugin');
const themeStyle = require('./content/data/style.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx,yml,json}',
    './index.md',
    './.sourcebit-nextjs-cache.json'
  ],

  /* ───────── Safelist (prevent purge) ───────── */
  safelist: [
    // AOS scroll classes
    'data-aos', 'aos-init', 'aos-animate', 'opacity-0', 'translate-y-4',

    // Transitions & hover effects
    'transition-transform', 'duration-300', 'ease-in-out',
    'hover:scale-105', 'hover:opacity-90', 'hover:brightness-110',
    'hover:shadow-lg', 'hover:shadow-yellow-400',

    // Layout / utility
    'object-cover', 'rounded-xl', 'shadow-md',
    'overflow-x-hidden', 'overflow-y-scroll',

    // Scrollbar
    'scroll-smooth',

    // Dropdown / select background
    'select', 'option', 'sb-select', 'sb-dropdown',
    'bg-white', 'text-dark', 'bg-opacity-100',

    // Footer
    'footer', 'bg-dark', 'text-white', 'bg-gradient-brand',

    // Scroll‑to‑Top button classes
    '#scrollToTopBtn', 'fixed', 'bottom-6', 'right-6', 'z-[9999]',
    'hidden', 'lg:flex', 'w-12', 'h-12', 'rounded-full',
    'bg-gradient-to-br', 'from-[#f97316]', 'to-[#fb923c]',

    // Card / link / button classes
    'sb-card', 'bg-gradient-brand',
    'sb-component-button', 'sb-component-button-primary', 'sb-component-button-secondary',
    'sb-component-link', 'sb-component-link-primary', 'sb-component-link-secondary',

    // Dividers
    'divider-home', 'divider-services', 'border-t-2', 'border-t-4',

    // Text helpers & glow
    'text-primary', 'text-[#1E88E5]', 'text-[#FFA500]',

    // Gradient helpers
    'bg-gradient-to-br', 'from-[#FFE0B2]', 'via-[#FFD180]', 'to-[#FFE0C3]',

    // Utility pattern for margin / padding
    {
      pattern: /(m|p)(t|b|l|r)?-(0|px|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|12|14|16|20|24|28|32|40|48|56|64|72|80|96)/
    }
  ],

  /* ───────── Theme Extensions ───────── */
  theme: {
    extend: {
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
        extrabold: '800'
      },
      boxShadow: {
        header: '0px 2px 8px rgba(27, 32, 50, .08)'
      },
      colors: {
        light: themeStyle.light,
        dark: themeStyle.dark,
        neutral: themeStyle.neutral,
        neutralAlt: themeStyle.neutralAlt,
        primary: themeStyle.primary
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto Slab', 'serif']
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))'
      },
      maxWidth: {
        sectionBody: '846px'
      },
      padding: {
        '2/3': '66.666%',
        '3/4': '75%',
        '9/16': '56.25%'
      },
      screens: {
        xs: '480px'
      },
      width: {
        formField: 'calc(50% - 1rem)'
      }
    }
  },

  plugins: [
    // your existing typography + component plugin (unchanged)
  ]
};
