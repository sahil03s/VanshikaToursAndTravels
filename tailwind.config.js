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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lilac' : '#D3C5E5',
        'periwinkle' : '#735DA5',
        'black' : '#3c4043',
        'red' : '#d93025',
        'custom-grey':'#f7f7f7'
      },
    },
  },
  plugins: [],
};
