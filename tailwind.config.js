/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'main':'#e2e8f0',
     'button':'#A3CFCD',
     'primary':'#4B4A54',
     'secondary':'#677381',
    },

    screens: {

      'mobile': '360px',
      // => @media (min-width: 400px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
}