/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        imagebg: '#eaeaec',
        primary: '#4F46E5', 
        secondary: '#F43F5E', 
        accent: '#10B981',  
        black:'#ffffff',  
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        vibes: ['"Great Vibes"', 'cursive'],
        poppins: ['"Poppins"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        merriweather: ['"Merriweather"', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        lora: ['"Lora"', 'serif'],
        comfortaa: ['"Comfortaa"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
        pacifico: ['"Pacifico"', 'cursive'],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}

