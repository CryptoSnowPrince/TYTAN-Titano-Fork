module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1300px",
        },
      },
      fontFamily: {
        sans: ["Planer Regular"],
      },
      colors: {
        primary: {
          DEFAULT: "#00FF00",
        },
        secondary: {
          DEFAULT: "#1C3F47",
          500: "#1A5050",
        },
        lightGray: {
          400: "#D0DCE8B2",
        },
        dark: {
          400: "#222222",
          500: "#2C2C2C",
          600: "#282828",
        },
        red: {
          DEFAULT: "#FF005C",
        },
      },
    },
  },
  plugins: [],
};
