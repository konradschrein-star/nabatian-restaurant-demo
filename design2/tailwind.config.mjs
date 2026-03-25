/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'topbar-green': '#0e9b01',
        'burgundy': '#711521',
        'wine': '#ad083a',
        'hover-red': '#bc0f0f',
        'gray-text': '#939393',
      },
      fontFamily: {
        maven: ['Maven Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
