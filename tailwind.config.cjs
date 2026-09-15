/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Cascadia Code',
          'Cascadia Mono',
          // Japanese fallbacks, in the order global.css explains.
          'BIZ UDGothic',
          'Yu Gothic',
          'Hiragino Kaku Gothic ProN',
          'Noto Sans CJK JP',
          'monospace',
        ],
        mono: [
          'Cascadia Code',
          'Cascadia Mono',
          // Japanese fallbacks, in the order global.css explains.
          'BIZ UDGothic',
          'Yu Gothic',
          'Hiragino Kaku Gothic ProN',
          'Noto Sans CJK JP',
          'monospace',
        ],
      },
      colors: {
        // Cyan: single accent for the whole site; matches the glass-* borders.
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
    },
  },
  plugins: [],
};
