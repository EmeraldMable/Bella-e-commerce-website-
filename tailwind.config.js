/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'star': "url('src/assets/star.svg')",
        
      },
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

