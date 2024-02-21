/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import tailwindcssanimated from 'tailwindcss-animated'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      customFont: ['"Open Sans"', "sans-serif"],
      // Add more custom font families as needed
    },},
  
  },
  daisyui: {
    themes: ["light", "dark", "cupcake","forest","dracula","synthwave","luxury","night","sunset"],
  },
  plugins: [daisyui,tailwindcssanimated],
}
