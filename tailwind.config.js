// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors:{
        primary: {DEFAULT : '#2a292e',dark:'#2a292e',light:'#757575'},
        secondary: {light:'#f5f5f5',dark:'#66FCF1'},
        accent: {light:'#212121',dark:'#1F2833'},
        supporting1: {dark:'#C5C6C7',light:""},
        supporting2: {dark:'#45A29E',light:""},
        btgold: {dark:'#f7cd6f',light:""}
      },
      fontFamily:{
        neuropol: ['"Neuropol-Regular"','sans-serif'],
        robotoMono: ['"Roboto Mono"','monospace']
      }
    },

  },
  darkMode: 'class',
  plugins: [],
}