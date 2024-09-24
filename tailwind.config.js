const { Square } = require('@mui/icons-material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      listStyleType : {
        square:'square',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lilac' : '#D3C5E5',
        'periwinkle' : '#735DA5',
        'black' : '#000000',
        'red' : '#ff0000',
        'yellow-gold': '#d0b807',
        'custom-grey':'#f2f2f2'
      },
    },
  },
  plugins: [],
};
