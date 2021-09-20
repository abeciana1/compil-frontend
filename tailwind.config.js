const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      white: {
        'DEFAULT': '#fffdf3',
      },
      black: {
        'DEFAULT': '#28262c',
      },
      red: {
        'DEFAULT': '#e54b4b'
      },
      blue: {
        'light': "#9FC2CC",
        'DEFAULT': '#035E7B',
      }
    },
    screens: {
      ...defaultTheme.screens,
      // 'xs': '425px',
      // 'sm': '640px',
      // 'md': '768px',
      // 'lg': '1024px',
      // 'xl': '1280px',
      // '2xl': '1536px',
      // 'sm': {'min': '640px', 'max': '767px'},
      // 'md': {'min': '768px', 'max': '1023px'},
      // 'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // 'lg': {'min': '1024px'},
      // 'xl': {'min': '1280px'},
      // '2xl': {'min': '1536px'},
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
