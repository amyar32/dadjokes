module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      height: ['group-hover'],
    },
  },
  plugins: [],
};
