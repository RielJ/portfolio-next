/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },

    extend: {
      colors: {
        background: '#050816',
        primary: '#915EFF',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        accent: '#ff4057',
      },
      backgroundImage: {
        'hero-pattern': "url('/lines.png')",
      },
      fontFamily: {
        primary: ['var(--font-poppins)'],
        secondary: ['var(--font-jetbrains-mono)'],
        logo: ['var(--font-kavoon)'],
      },
    },
  },
  plugins: [],
}
