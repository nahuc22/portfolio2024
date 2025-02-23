const { Space_Grotesk, Quantico } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        spaceGrotesk:[ "Space Grotesk", "sans-serif"],
        Quantico : ["Quantico", "sans-serif"]      
      }
    },
  },
  plugins: [],
}