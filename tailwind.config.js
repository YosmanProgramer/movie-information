module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#373b69',
        'blue-dark': '#22254b',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
