/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'burgundy': {
          DEFAULT: '#711521',
          dark: '#6B1C1C',
        },
        'wine': {
          DEFAULT: '#ad083a',
          light: '#D82B2B',
        },
        'nabatian-green': '#0e9b01',
      },
      fontFamily: {
        maven: ['Maven Pro', 'sans-serif'],
        quattrocento: ['Quattrocento Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
