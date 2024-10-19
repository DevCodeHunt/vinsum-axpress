/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DA2C43",
        foreground: "#F3F3F3",
        background: "#F3F3F3",
        card: "#0C0D0E",
        cardSecondary: "#292929",
        text: "#667085",
        backgroundSecondary: "#222222",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
