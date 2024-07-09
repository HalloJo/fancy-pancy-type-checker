/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        wittgenStein: ["Wittgenstein", "serif"],
        robotoSlab: ["Roboto Slab", "serif"],
        rubik: ["Rubik", "sans-serif"],
        garamond: ["Garamond", "serif"],
        archivo: ["Archivo", "sans-serif"],
        // Add more custom fonts as needed
      },
    },
  },
  plugins: [],
};
