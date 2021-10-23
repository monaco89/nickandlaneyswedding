const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#d3d7be',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        orange: colors.orange,
        blue: colors.blue,
        green: colors.green,
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
        11: '5rem',
        12: '7rem',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
        '9xl': '12rem',
        '10xl': '8rem',
        '11xl': '16rem',
        '12xl': '9rem',
        '13xl': '3.5rem',
        '14xl': '11rem',
      },
      fontFamily: {
        sans: ['canto', 'orpheuspro', 'ui-sans', 'system-ui'],
        serif: ['ui-sans-serif', 'system-ui'],
        custom: ['la-bohemienne', 'sans-serif'],
        system: ['system-ui'],
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      screens: {
        xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
        sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
        lg: { min: '1200px' }, // Desktop smallest.
        xl: { min: '1159px' }, // Desktop wide.
        xxl: { min: '1359px' }, // Desktop widescreen.
      },
      rotate: {
        '-8': '-8deg',
      },
    },
  },
};
