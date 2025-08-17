/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fefcf6',
        foreground: '#1a1a1a',
        muted: '#717182',
        border: '#e5e5e5',
        'link-background': '#fef8e7',
        'link-hover': '#dc2626',
        accent: '#f5f2ea',
        'accent-foreground': '#1a1a1a',
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
      },
      fontSize: {
        '2xl': '2.5rem',
        'xl': '1.5rem',
        'lg': '1.3rem',
        'base': '1.1rem',
        'sm': '0.9rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
} 