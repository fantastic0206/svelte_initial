const colors = require('tailwindcss/colors');
const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: (content) => [
        // This is an internal Tailwind function that we're not supposed to be allowed to use
        // So if this stops working, please open an issue at
        // https://github.com/babichjacob/svelte-add-tailwindcss/issues
        // rather than bothering Tailwind Labs about it
        ...tailwindExtractor(content),
        // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
        // ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
      ],
      keyframes: true,
    },
  },
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: '#1B2026',
        secondary: '#272B34',
        tertiary: '#727B8F',
      },
    },
    fontFamily: {
      sans: [
        'Decimal',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
