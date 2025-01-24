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
        btgold: {dark:'#f7cd6f',light:""},
        aliceblue:{light:"#f2f7fe",dark:""},
        smokewhite:{light:"#f7f7f7",dark:""},
        ghostwhite:{light:"#f9fafb"},
        blend:{dark:"#1E201E",light:"#2a292e"},
        header:{dark:"#ffc107", light:""},
        subheader:{dark:"#5ec4cc",light:""},
        button:{dark:"#03a9f4",light:""},
        textbody:{dark:"#e0e0e0",light:""},
        texthigh1:{dark:'#ffd54f',light:''},
        texthigh2:{dark:'#80deea'}
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