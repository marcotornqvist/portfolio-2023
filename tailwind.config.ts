import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      lora: ['var(--font-lora)'],
      merriweather: ['var(--font-merriweather)'],
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      lightgrey: '#F4F4F4',
      eerieblack: '#111111',
      purple: '#5C2AF4',
    },
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    borderRadius: {
      sm: '3px',
      md: '6px',
      lg: '12px',
      full: '9999px',
    },
    keyframes: {
      fadeUp: {
        from: { transform: 'translateY(24px)', opacity: '0' },
        to: { transform: 'translateY(0)', opacity: '1' },
      },
      fadeIn: {
        from: { opacity: '0' },
        to: { opacity: '1' },
      },
      fadeOut: {
        from: { opacity: '1' },
        to: { opacity: '0' },
      },
      scaleIn: {
        from: { opacity: '0', transform: 'scale(1.15)' },
        to: { opacity: '1', transform: 'scale(1)' },
      },
      // navbarShow: {
      //   from: { transform: 'translateY(-80px)' },
      //   to: { transform: 'translateY(0)' },
      // },
      // navbarHide: {
      //   from: { transform: 'translateY(0)' },
      //   to: { transform: 'translateY(-80px)' },
      // },
      // menuShow: {
      //   from: { opacity: '0', transform: 'translateY(100%)' },
      //   to: { opacity: '1', transform: 'translateY(0)' },
      // },
      // menuHide: {
      //   from: { opacity: '1', transform: 'translateY(0)' },
      //   to: { opacity: '0', transform: 'translateY(100%)' },
      // },
      dropdownShow: {
        from: { opacity: '0', transform: 'translateY(-2px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
      dropdownHide: {
        from: { opacity: '1', transform: 'translateY(0)' },
        to: { opacity: '0', transform: 'translateY(-2px)' },
      },
      slideDown: {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      slideUp: {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      fadeUp: 'fadeUp 200ms forwards',
      fadeUpSlow: 'fadeUp 500ms forwards',
      fadeIn: 'fadeIn 200ms forwards',
      fadeInSlow: 'fadeIn 500ms forwards',
      fadeOut: 'fadeOut 200ms forwards',
      scaleIn: 'scaleIn 500ms forwards cubic-bezier(0.16, 1, 0.3, 1)',
      menuShow: 'menuShow 300ms',
      menuHide: 'menuHide 300ms',
      navbarShow: 'navbarShow 200ms forwards',
      navbarHide: 'navbarHide 200ms forwards',
      dropdownShow: 'dropdownShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      dropdownHide: 'dropdownHide 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    },
    extend: {},
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    plugin(function ({ addComponents, theme }) {
      // Add your custom styles here
      addComponents({
        '.text-heading-1': {
          fontSize: '2.5rem',
          lineHeight: '140%',

          '@screen md': {
            fontSize: '3.5rem',
          },
        },

        '.text-heading-2': {
          fontSize: '2.25rem',
          lineHeight: '140%',

          '@screen md': {
            fontSize: '3rem',
          },
        },

        '.text-heading-3': {
          fontSize: '2rem',
          lineHeight: '140%',

          '@screen md': {
            fontSize: '2.5rem',
          },
        },

        '.text-heading-4': {
          fontSize: '1.5rem',
          lineHeight: '140%',

          '@screen md': {
            fontSize: '2rem',
          },
        },

        '.text-heading-5': {
          fontSize: '1.25rem',
          lineHeight: '140%',

          '@screen md': {
            fontSize: '1.5rem',
          },
        },

        '.text-heading-6': {
          fontSize: '1.125rem',
          lineHeight: '140%',

          '@screen md': {
            fontSize: '1.25rem',
          },
        },

        '.text-medium-normal': {
          fontSize: '1.125rem',
          lineHeight: '170%',
          fontWeight: '400',
          'font-family': 'var(--font-merriweather)',
        },

        '.text-regular-normal': {
          fontSize: '1rem',
          lineHeight: '170%',
          fontWeight: '400',
          'font-family': 'var(--font-merriweather)',
        },

        '.container': {
          width: '100%',
          margin: '0 auto',
          padding: '0 1rem',

          '@screen sm': {
            padding: '0 1.5rem',
          },

          // '@screen md': {
          //   padding: '0 4rem',
          // },

          '@screen 2xl': {
            maxWidth: theme('screens.2xl'),
            padding: '0 4rem',
          },
        },
      });
    }),
  ],
};

export default config;
