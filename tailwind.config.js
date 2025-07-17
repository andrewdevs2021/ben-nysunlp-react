/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "text-pattern":
          "url('./asserts/section-two-bg.jpg')",
        "text-pic":
          "url('./asserts/coint-bg.jpg')",
      },
      fontFamily: {
        playfair: ["Playfair Display SC", "serif"],
        opensans: ["Open Sans", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
