import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      lightgrey: '#F4F4F4',
      eerieblack: '#111111',
      purple: '#5C2AF4',
    },
    extend: {},
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    plugin(function ({ addComponents }) {
      // Add your custom styles here
      addComponents({
        '.heading-1': {
          color: 'red',
        },

        '.container': {
          minWidth: '100%',
          margin: '0 auto',
          padding: '0 1rem',

          '@screen sm': {
            maxWidth: '640px',
            padding: '0 1.5rem',
          },

          '@screen md': {
            maxWidth: '768px',
            padding: '0 4rem',
          },
        },
      })
    }),
  ],
}

export default config
