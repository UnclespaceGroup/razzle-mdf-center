module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'black40a': 'rgba(0, 0, 0, 0.4)',
      'red': '#FC0000',
      'black': 'black',
      'white': 'white'
    },
    spacing: {
      '1/2': '50%',
      '1/3': '33.33%',
      100: '10rem',
      80: '8rem',
      64: '6.4rem',
      24: '2.4rem',
      16: '1.6rem',
      8: '.8rem'
    },
    width: {
      'desktop': '132rem',
      'full': '100%',
      '1/3': '33.33%',
      '2/3': '66.66%',
    },
    height: {
      '1': '1px',
      '2': '2px',
      '1/3': '33.33%',
      '1/4': '25%',
      '1/2': '50%',
      '2/3': '66.66%',
      'full': '100%',
      'screen': '100vh',
      80: '8rem',
      64: '6.4rem'
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
      '18': '1.8rem',
      '24': '2.4rem',
      '32': '3.2rem',
      '72': '7.2rem'
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
  prefix: '',
  experimental: {
    applyComplexClasses: true
  },
  future: {
    purgeLayersByDefault: true
  },
  plugins: [
    require('tailwindcss-interaction-variants'),
    require('tailwindcss-aspect-ratio'),
  ],
}
