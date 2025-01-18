// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#2a292e',
        secondary: '#66FCF1',
        accent: '#1F2833',
        supporting1: '#C5C6C7',
        supporting2: '#45A29E',
        btgold: '#f7cd6f'
      },
      fontFamily:{
        neuropol: ['"Neuropol-Regular"','sans-serif']
      }
    },

  },
  darkMode: 'class',
  plugins: [],
}