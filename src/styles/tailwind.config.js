module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      100: '10rem',
      80: '8rem',
      64: '6.4rem',
      16: '1.6rem'
    },
    fontWeight: {
      bold: '700',
      medium: '500',
      regular: '400',
      light: '300',
    },
    borderWidth: {
      '0': '0',
      '1': '1px'
    },
    fontSize: {
      '16': '1.6rem',
      '24': '2.4rem'
    },
    screens: {
      lg: {
        min: '1025px'
      },
      md: {
        max: '1024px',
        min: '768px'
      },
      sm: {
        max: '767px'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
