const { fontFamily } = require('tailwindcss/defaultTheme');
const { coolGray, warmGray } = require('tailwindcss/colors');
const isProduction = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: [
      './src/svelte/**/*.svelte',
      './src/svelte/**/*.html'
    ],
    defaultExtractor: content => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
      const broadMatchesWithoutTrailingSlash = broadMatches.map(match => _.trimEnd(match, '\\'));
      const matches = broadMatches.concat(broadMatchesWithoutTrailingSlash);
      return matches;
    },
    enabled: isProduction
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-dark': '#000',
        'main-light': '#fff',
        'main-gray': '#a8a8a83f',
        transparent: 'transparent',
        current: 'currentColor',
        'cool-gray': coolGray,
        'warm-gray': warmGray,
        'k8s-blue': '#326ce5'
      },
      fontFamily: {
        sans: ['Ubuntu', ...fontFamily.sans]
      },
      spacing: {
        '100': '25rem',
        'px-2': '2px'
      },
      minWidth: {
        '28': '7rem'
      },
      maxWidth: {
        '80': '20rem'
      },
      borderRadius: {
        '2lg': '1.25rem'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'active'],
      zIndex: ['hover', 'active'],
      boxShadow: ['active']
    },
  },
  plugins: [],
}
