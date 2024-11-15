import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
      letterSpacing: {
        small: '.4rem',
        letter18: '1.8rem',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in',
        'move-horizontal': 'move-horizontal 3s linear infinite',
        'move-vertical': 'move-vertical 3s linear infinite',
        shine: 'shine 8s infinite linear',
        'gradient-x': 'gradient-x 3s infinite linear',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'move-horizontal': {
          '0%': {
            transform: 'translateX(-100vw)',
          },
          '100%': {
            transform: 'translateX(100vw)',
          }
        },
        'move-vertical': {
          '0%': {
            transform: 'translateY(-100vh)',
          },
          '100%': {
            transform: 'translateY(100vh)',
          },
        },
        shine: {
          '0%': {
            'background-position': '100%',
          },
          '100%': {
            'background-position': '-200%',
          },
        },
        'gradient-x': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/forms'),
  ],
};

/** @type {import('tailwindcss').Config} */
export default config;
