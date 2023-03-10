/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        errorBar: {
          from: "width: 0%",
          to: "width: 100%",
        },
      },
      width: {
        "200px": "12.5rem",
        "60px": "3.75rem",
      },
      fontFamily: {
        Baloo: "'Baloo 2'",
        Roboto: "Roboto",
      },
      maxHeight: {
        "544pxbackground": "34rem",
      },
      borderRadius: {
        36: "2.25rem",
      },
      fontSize: {
        xxs: "0.6250rem",
      },
      backgroundImage: {
        "home-background": "url('./src/assets/Background.png')",
      },
      colors: {
        "yellow-dark": "#C47F17",
        yellow: "#DBAC2C",
        "yellow-light": "#F1E9C9",

        "purple-dark": "#4B2995",
        purple: "#8047F8",
        "purple-light": "#EBE5F9",

        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574F4D",
        "base-label": "#8D8686",
        "base-hover": "#D7D5D5",
        "base-button": "#E6E5E5",
        "base-input": "#EDEDED",
        "base-card": "#F3F2F2",
        background: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
