/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saenz: {
          navy: '#0B1F3A',
          navyDark: '#061325',
          blue: '#0077FF',
          blueLight: '#3393FF',
          cyan: '#00D2FF',
          grayIce: '#E6EEF7',
          silver: '#F4F7FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 119, 255, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(0, 210, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
