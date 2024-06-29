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
      colors:{
        primary : "#512BD9", //azul
      },
      fontSize: {
        'custom-88': '88px',
      },
    },
  },
  plugins: [],
}