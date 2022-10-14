/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    colors: {
      blue: '#5082E6',
      'dark-blue': '#062543',
      'white-blue': '#F1F5FF',
      gray: '#373737',
      'gray-500': '#808080',
      'gray-300': '#9F9F9F',
      dark: '#0A141E',
      white: '#ffffff',
      transparent: 'transparent',
      'blue-link': '#233255',
      'line-gray': '#C4C4C4',
      yellow: '#FABE00'
    },
    fontFamily: {
      heading: ['Inter', 'sans-serif'],
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif']
    },
    fontSize: {
      xs: ['.8125rem', '1.1375rem'], // 13px
      sm: ['.875rem', '1.45rem'], // 14px
      base: ['1rem', '1.4rem'], // 16px
      lg: ['1.125rem', '1.575rem'], // 18px
      xl: ['1.25rem', '1.75rem'], // 20px
      '2xl': ['1.375rem', '1.875rem'], // 22px
      '3xl': ['1.5rem', '2.1rem'], // 24px
      '4xl': ['1.75rem', '2.1rem'], // 28px
      '5xl': ['2.185rem', '3.0625rem'], // 34,96px
      '6xl': ['2.875rem', '4.025rem'] // 46px
    },
    screens: {
      'max-sm': { max: '639px' },

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      'max-md': { max: '767px' },

      md: '768px',
      // => @media (min-width: 768px) { ... }

      'only-md': { min: '768px', max: '1023px' },

      'max-lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1630px',
      // => @media (min-width: 1536px) { ... }

      retina: {
        raw: '(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)'
      }
    },
    extend: {}
  },
  plugins: []
}
