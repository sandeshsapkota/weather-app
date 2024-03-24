/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fffdf2',
          '100': '#fffbe8',
          '200': '#fcf1c2',
          '300': '#fae69d',
          '400': '#f7cc57',
          '500': '#f6ae12',
          '600': '#db930d',
          '700': '#b87209',
          '800': '#945406',
          '900': '#6e3803',
          '950': '#472001'
        },
        charade : {
          '50': '#f0f3f5',
          '100': '#e1e8eb',
          '200': '#b8c6cf',
          '300': '#90a3b0',
          '400': '#4f6173',
          '500': '#1f2937',
          '600': '#1a2433',
          '700': '#111a29',
          '800': '#0b1321',
          '900': '#060c1a',
          '950': '#02060f'
        }
      },
    },
  },
  plugins: [],
}

