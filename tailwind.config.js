/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 800,
      },
      colors:{
        primary : "#464acc", //azul
        secondary: "#292931", // available
        hover : "#FFF5CE"
      },
      fontSize: {
        'custom-88': '88px',
        'custom-48': '48px',
      },
    },
  },
  plugins: [],
}