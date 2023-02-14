/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'main':'#e2e8f0',
     'button':'#A3CFCD',
     'primary':'#f9a826',
     'secondary':'#FFAB5C',
     'ternary':'#FFB38A',
     'white':'#ffffff',
     'transparent':'#00FFFFFF',
     'error':'#880808',
     'success':'#4BB543',
     'dark':'#050505',
     'item':'#BABABA'
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