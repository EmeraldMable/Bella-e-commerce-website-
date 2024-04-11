/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '10%': '200px',
    },
    screens: {
      'xs': '320px',
      
    },
    },
  },
  plugins: [],
}

