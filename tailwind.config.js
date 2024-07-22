/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        black: {
          100: "#1B1B1B",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#100909",
          800: "#2d3748",
          900: "#051917",
        },

        white: "#fff",
        pink: {
          100: "#FFA2BA",
          200: "#F4433640",
        },
        blue: {
          100: "#7580F233",
          200: "#7580F233",
          300: "#7580F233",
          400: "#7580F233",
          500: "#7580F233",
          600: "#3667F6",
          700: "#8CB4FC",
          800: "#7580F233",
          900: "#7580F2",
        }, gray: {
          400: "#ACACAC",
          500: "#707070",
          600: "#F7F7F7",
          700: "#FBFBFB",
          800: "#F0F0F0",
          900: "#989898",
        },red: { 100: "#F44336" },
        yellow: { 100: "#ECC74F", 200: "#FFD960" },
        green: {
          300: "#B9FBA4",
          400: "#008F45",
          500: "#07CC66",
          600: "#27B1A41A",
          700: "#177067",
          800: "#27B1A4",
          900: "#54CF2E",
        },
        transparent: "transparent",
      }, width: {
        128: "32rem",
      },
      screens: {
        sm: { min: "350px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        md: { min: "768px", max: "1100px" },
        lg: "1101px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
}

