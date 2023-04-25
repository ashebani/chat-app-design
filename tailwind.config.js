/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
      16: "16px",
      30: "30px",
    },

    extend: {
      colors: {
        primaryPaleViolet: "hsl(276, 100%, 81%)",
        primaryModerateViolet: "hsl(276, 55%, 52%)",
        primaryDesaturatedDarkViolet: "hsl(271, 15%, 43%)",
        primaryGrayishBlue: "hsl(206, 6%, 79%)",
        primaryVeryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
        primaryDarkGrayishViolet: "hsl(270, 7%, 64%)",
        primaryLightMagenta: "hsl(293, 100%, 63%)",
        primaryLightViolet: "hsl(264, 100%, 61%)",
        secondaryLightGrayishViolet: "hsl(270, 20%, 96%)",
        secondaryVeryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
        secondaryVeryLightMagenta: "hsl(289, 100%, 72%)",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      verylarge: "16px",
      "6xl": "30px",
    },
  },
  plugins: [],
};
