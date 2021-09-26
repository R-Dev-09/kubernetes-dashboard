const { fontFamily } = require('tailwindcss/defaultTheme');
const { coolGray, warmGray } = require('tailwindcss/colors');
const isProduction = !process.env.ROLLUP_WATCH;

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/svelte/**/*.svelte',
      './src/svelte/**/*.html',
      './dist/www/index.html'
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
        'px-2': '2px'
      },
    },
  },
  plugins: [],
}
