const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#f8f5ec",
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        orange: colors.orange,
        blue: colors.blue,
        green: colors.green,
        secondary: "#B3BFC2",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
        widest: "2rem",
      },
      lineHeight: {
        tight: 1.2,
        11: "5rem",
        12: "6rem",
        13: "3rem",
        14: "4rem",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
        "9xl": "12rem",
        "10xl": "8rem",
        "11xl": "16rem",
        "12xl": "9rem",
        "13xl": "3.5rem",
        "14xl": "11rem",
        "15xl": "4rem",
        "16xl": "3.25rem",
        "17xl": "14rem",
        "18xl": "2rem",
        "19xl": "10rem",
      },
      height: {
        100: "34rem",
        101: "36rem",
      },
      width: {
        "10p": "10%",
        50: "50rem",
        fit: "fit-content",
      },
      fontFamily: {
        sans: ["canto", "orpheuspro", "ui-sans", "system-ui"],
        serif: ["ui-sans-serif", "system-ui"],
        custom: ["la-bohemienne", "sans-serif"],
        system: ["system-ui"],
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      screens: {
        xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
        sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        md: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
        lg: { min: "1200px" }, // Desktop smallest.
        xl: { min: "1159px" }, // Desktop wide.
        xxl: { min: "1359px" }, // Desktop widescreen.
      },
      rotate: {
        "-8": "-8deg",
      },
    },
  },
};
