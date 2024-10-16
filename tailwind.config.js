/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DA2C43",
        background: "#141414",
        card: "#353535",
        cardSecondary: "#353535",
        text: "#9E9E9E",
        backgroundSecondary: "#222222",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
