/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "blue": "#5BB2CA",
      "orange": "#E08645",
      "green": "#57A69D",
      "red": "#CF4237",
      "gray": "#8B8686",
      "lightGray": "#D2CAC8",
      "transparent": 'transparent',
      "current": 'currentColor',
      "white": "#FFF",
      "black": "#000",


    },

    screens: {
      sm: '560px',
      // => @media (min-width: 560px) { ... }
      md: '1024px',
      // => @media (min-width: 1024px) { ... }
      lg: '1280px',
      // => @media (min-width: 1280px) { ... }
      xl: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}