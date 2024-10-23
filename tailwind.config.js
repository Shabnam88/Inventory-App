/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", '[class="dark-mode"]'],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Vazir", ...fontFamily.sans],
      // },

      container: {
        center: true,
        padding: "1rem",
      },

      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
        },
        secondary: {
          800: withOpacity("--color-secondary-800"),
          700: withOpacity("--color-secondary-700"),
          600: withOpacity("--color-secondary-600"),
          500: withOpacity("--color-secondary-500"),
          400: withOpacity("--color-secondary-400"),
          300: withOpacity("--color-secondary-300"),
          200: withOpacity("--color-secondary-200"),
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
