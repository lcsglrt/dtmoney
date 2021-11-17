module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontSize: {
      'summary': '2rem'
    },
    maxWidth: {
      'custom': '1120px',
    },
    colors: {
      blue: '#5429CC',
      green: '#33CC95',
      red: '#E62E4D',
      shape: '#FFFFFF',
      title: '#363F5F',
      text: '#969CB3',
      background: '#F0F2F5',
      btn: '#6933FF',
    },
    extend: {
      width: {
        'logo': '135px'
      },
      lineHeight: {
        'summary': '3rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
