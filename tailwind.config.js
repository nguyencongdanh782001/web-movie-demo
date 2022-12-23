/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'gray-custom-1': '#D9D9D9',
      'gray-custom-2': '#7D7D7D',
    },
    fontSize: {
      sm: '0.8rem',
      base: '15px',
      base2: '18px',
      xl: ['20px', '23px'],
      '2xl': '1.563rem',
      '3xl': ['30px', '35px'],
      '4xl': ['35px', '40px'],
      '5xl': ['40px', '47px'],
    },
  },
  plugins: [],
};
