import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#711521',
          dark: '#6B1C1C',
        },
        wine: {
          DEFAULT: '#ad083a',
          light: '#D82B2B',
        },
        'nabatian-green': '#0e9b01',
      },
      fontFamily: {
        maven: ['var(--font-maven)', 'sans-serif'],
        quattrocento: ['var(--font-quattrocento)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
