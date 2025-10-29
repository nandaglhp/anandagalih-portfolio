/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palet utama
        primary: {
          50: "#fff5f8", // soft background pink
          100: "#ffe6ee",
          200: "#ffcce0",
          300: "#ffb3d1",
          400: "#ff99c2",
          500: "#ff80b3", // main pink
          600: "#e673a1",
          700: "#cc668f",
          800: "#b3597d",
          900: "#994c6b",
        },
        accent: {
          50: "#fafafa", // white variant
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        neutral: {
          DEFAULT: "#fdfdfd", // soft white
          dark: "#0f0f0f", // text dark
        },
      },

      backdropBlur: {
        sm: "4px",
      },

      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
