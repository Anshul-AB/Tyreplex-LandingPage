/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto Condensed', 'sans-serif'],
      },
      colors:{
        'primaryRed':'#ed1c24',
        'primaryBg':"#f5f6f9",
        'green':'#4CA72C',
        'yellowBg':'#FFEAAA',
        'blueHover':'#007bff'
      }
    },
  },
  plugins: [],
}