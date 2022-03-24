module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Play", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#00FF00",
        },
        lightGray: {
          400: "#D0DCE8B2",
        },
        dark: {
          400: "#222222",
        },
      },
    },
  },
  plugins: [],
};
