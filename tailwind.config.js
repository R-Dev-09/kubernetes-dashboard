const { fontFamily } = require('tailwindcss/defaultTheme');
const { gray, stone } = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/svelte/**/*.{html,svelte}',
    './dist/www/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'main-dark': '#000',
        'main-light': '#fff',
        'main-gray': '#a8a8a83f',
        transparent: 'transparent',
        current: 'currentColor',
        'cool-gray': gray,
        'warm-gray': stone,
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
