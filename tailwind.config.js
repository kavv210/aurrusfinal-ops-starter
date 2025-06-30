safelist: [
  // built‑in text utilities your theme already needs
  'text-neutral',
  'text-light',
  {
    // keeps common margin / padding utilities
    pattern: /(m|p)(t|b|l|r)-(0|px|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/
  },

  /* ─── NEW: keep our custom gradient + hover classes ─── */
  'bg-gradient-to-br',
  'from-[#FFE0B2]',
  'via-[#FFD180]',
  'to-[#FFE0C3]',

  /* title colours + hover effects */
  'text-[#1E88E5]',      // base mid‑blue
  'hover:text-[#FFA500]',// brighter blue on hover
  'hover:scale-105',

  /* transition utilities used in className */
  'transition-all',
  'duration-300',
  'ease-in-out'
],
