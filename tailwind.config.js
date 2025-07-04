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

  safelist: [
    // AOS + scroll reveal
    'data-aos', 'aos-init', 'aos-animate',
    'opacity-0', 'translate-y-4',

    // Transitions
    'transition-transform', 'duration-300', 'ease-in-out',
    'hover:scale-105', 'hover:text-[#FFA500]',
    'transition-all', 'hover:opacity-90', 'hover:brightness-110',
    'hover:z-10', 'group-hover:scale-105',

    // Layout/utilities
    'object-cover', 'rounded-xl', 'shadow-md',
    'overflow-x-hidden', 'overflow-y-scroll',

    // Scrollbar
    'scroll-smooth', 'overflow-y-scroll',

    // Dropdowns + background
    'bg-white', 'bg-opacity-100', 'bg-dark', 'bg-neutral',
    'backdrop-blur',

    // Card components + buttons
    'sb-card', 'bg-gradient-brand',
    'sb-component-button', 'sb-component-button-primary', 'sb-component-button-secondary',
    'sb-component-link', 'sb-component-link-primary', 'sb-component-link-secondary',
    'divider-home', 'divider-services',

    // Text helpers
    'text-neutral', 'text-light', 'text-primary',
    'text-[#1E88E5]', 'text-[#FFA500]',

    // Gradient helpers
    'bg-gradient-to-br', 'from-[#FFE0B2]', 'via-[#FFD180]', 'to-[#FFE0C3]',

    // Padding/margin patterns (for markdown or CMS content)
    {
      pattern: /(m|p)(t|b|l|r)?-(0|px|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/
    }
  ],

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
        serif: ['Roboto Slab', 'serif']
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))'
      },
      gridColumnStart: {
        span4: 'span 4'
      },
      gridColumnEnd: {
        neg3: '-3',
        span4: 'span 4'
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
    plugin(function ({ addBase, addComponents, theme }) {
      const fallback = (path, defaultValue) => {
        try {
          return theme(path) || defaultValue;
        } catch {
          return defaultValue;
        }
      };

      /* ───────── Typography ───────── */
      addBase({
        body: {
          fontFamily: fallback(`fontFamily.${themeStyle.fontBody}`, ['Inter', 'sans-serif'])
        },
        'h1,h2,h3,h4,h5,h6,blockquote': {
          fontFamily: fallback(`fontFamily.${themeStyle.fontHeadlines}`, ['Inter', 'sans-serif'])
        },
        'h1,.h1': {
          fontSize: fallback(`fontSize.${themeStyle.h1.size}`, '2.25rem'),
          fontWeight: fallback(`fontWeight.${themeStyle.h1.weight}`, '800'),
          letterSpacing: fallback(`letterSpacing.${themeStyle.h1.letterSpacing}`, 'normal'),
          textDecoration: themeStyle.h1.decoration,
          textTransform: themeStyle.h1.case
        },
        'h2,.h2': {
          fontSize: fallback(`fontSize.${themeStyle.h2.size}`, '1.875rem'),
          fontWeight: fallback(`fontWeight.${themeStyle.h2.weight}`, '700'),
          letterSpacing: fallback(`letterSpacing.${themeStyle.h2.letterSpacing}`, 'normal'),
          textDecoration: themeStyle.h2.decoration,
          textTransform: themeStyle.h2.case
        },
        'h3,.h3': {
          fontSize: fallback(`fontSize.${themeStyle.h3.size}`, '1.5rem'),
          fontWeight: fallback(`fontWeight.${themeStyle.h3.weight}`, '600'),
          letterSpacing: fallback(`letterSpacing.${themeStyle.h3.letterSpacing}`, 'normal'),
          textDecoration: themeStyle.h3.decoration,
          textTransform: themeStyle.h3.case
        },
        'h4,.h4': {
          fontSize: fallback(`fontSize.${themeStyle.h4.size}`, '1.25rem'),
          fontWeight: fallback(`fontWeight.${themeStyle.h4.weight}`, '600'),
          letterSpacing: fallback(`letterSpacing.${themeStyle.h4.letterSpacing}`, 'normal'),
          textDecoration: themeStyle.h4.decoration,
          textTransform: themeStyle.h4.case
        },
        h5: {
          fontSize: fallback(`fontSize.${themeStyle.h5.size}`, '1.125rem'),
          fontWeight: fallback(`fontWeight.${themeStyle.h5.weight}`, '500'),
          letterSpacing: fallback(`letterSpacing.${themeStyle.h5.letterSpacing}`, 'normal'),
          textDecoration: themeStyle.h5.decoration,
          textTransform: themeStyle.h5.case
        },
        h6: {
          fontSize: fallback(`fontSize.${themeStyle.h6.size}`, '1rem'),
          fontWeight: fallback(`fontWeight.${themeStyle.h6.weight}`, '500'),
          letterSpacing: fallback(`letterSpacing.${themeStyle.h6.letterSpacing}`, 'normal'),
          textDecoration: themeStyle.h6.decoration,
          textTransform: themeStyle.h6.case
        }
      });

      /* ───────── Stackbit Components ───────── */
      addComponents({
        '.sb-component-button-primary': {
          borderRadius: fallback(`borderRadius.${themeStyle.buttonPrimary.borderRadius}`, '0.375rem'),
          boxShadow: fallback(`boxShadow.${themeStyle.buttonPrimary.shadow}`, 'none'),
          fontWeight: themeStyle.buttonPrimary.weight,
          letterSpacing: fallback(`letterSpacing.${themeStyle.buttonPrimary.letterSpacing}`, 'normal'),
          padding: `${themeStyle.buttonPrimary.verticalPadding}px ${themeStyle.buttonPrimary.horizontalPadding}px`,
          textTransform: themeStyle.buttonPrimary.case
        },
        '.sb-component-button-secondary': {
          borderRadius: fallback(`borderRadius.${themeStyle.buttonSecondary.borderRadius}`, '0.375rem'),
          boxShadow: fallback(`boxShadow.${themeStyle.buttonSecondary.shadow}`, 'none'),
          fontWeight: themeStyle.buttonSecondary.weight,
          letterSpacing: fallback(`letterSpacing.${themeStyle.buttonSecondary.letterSpacing}`, 'normal'),
          padding: `${themeStyle.buttonSecondary.verticalPadding}px ${themeStyle.buttonSecondary.horizontalPadding}px`,
          textTransform: themeStyle.buttonSecondary.case
        },
        '.sb-component-link-primary': {
          fontWeight: themeStyle.linkPrimary.weight,
          letterSpacing: fallback(`letterSpacing.${themeStyle.linkPrimary.letterSpacing}`, 'normal'),
          textTransform: themeStyle.linkPrimary.case
        },
        '.sb-component-link-secondary': {
          fontWeight: themeStyle.linkSecondary.weight,
          letterSpacing: fallback(`letterSpacing.${themeStyle.linkSecondary.letterSpacing}`, 'normal'),
          textTransform: themeStyle.linkSecondary.case
        }
      });
    })
  ]
};
