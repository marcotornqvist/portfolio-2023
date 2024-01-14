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
      grey: '#D9D9D9',
      eerieblack: '#111111',
      destructive: '#EF2820',
      purple: {
        DEFAULT: '#5C2AF4',
        hover: '#4F1EEB',
      },
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
      md: '8px',
      lg: '12px',
      full: '9999px',
    },
    animation: {
      'fade-in-fast': 'fade-in 0.3s ease-in-out forwards',
      'fade-in': 'fade-in 0.6s ease-in-out forwards',
      'fade-in-up': 'fade-in-up 0.6s ease-in-out forwards',
      'scale-in': 'scale-in 0.6s cubic-bezier(0.20, 1, 0.4, 1) forwards',
      'slide-in-left':
        'slide-in-left 0.6s cubic-bezier(0.20, 1, 0.4, 1) forwards',

      //   fadeUp: 'fadeUp 200ms forwards',
      //   fadeUpSlow: 'fadeUp 500ms forwards',
      //   fadeIn: 'fadeIn 200ms forwards',
      //   fadeInSlow: 'fadeIn 500ms forwards',
      //   fadeOut: 'fadeOut 200ms forwards',
      //   scaleIn: 'scaleIn 500ms forwards cubic-bezier(0.16, 1, 0.3, 1)',
      //   menuShow: 'menuShow 300ms',
      //   menuHide: 'menuHide 300ms',
      //   navbarShow: 'navbarShow 200ms forwards',
      //   navbarHide: 'navbarHide 200ms forwards',
      //   dropdownShow: 'dropdownShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      //   dropdownHide: 'dropdownHide 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      //   slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      //   slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    },
    keyframes: {
      'fade-in': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      'fade-in-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(24px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'scale-in': {
        '0%': {
          opacity: '0',
          transform: 'scale(0.93)',
        },
        '100%': {
          opacity: '1',
          transform: 'scale(1)',
        },
      },
      'slide-in-left': {
        '0%': {
          opacity: '0',
          transform: 'translateX(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
    },
    extend: {
      height: {
        18: '4.5rem',
      },
      padding: {
        18: '4.5rem',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '1100': '1100ms',
        '1200': '1200ms',
        '1300': '1300ms',
        '1400': '1400ms',
        '1500': '1500ms',
        '1600': '1600ms',
        '1700': '1700ms',
        '1800': '1800ms',
        '1900': '1900ms',
        '2000': '2000ms',
      },
      gradientColorStops: (theme) => ({
        transparent: 'rgba(255, 255, 255, 0)',
        'to-custom-color': '#5C2AF4',
      }),
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    plugin(function ({ addComponents, theme }) {
      // Add your custom styles here
      addComponents({
        '.text-heading-1': {
          fontSize: '2.5rem',
          lineHeight: '140%',
          fontWeight: '400',

          '@screen md': {
            fontSize: '3.5rem',
          },
        },

        '.text-heading-2': {
          fontSize: '2.25rem',
          lineHeight: '140%',
          fontWeight: '400',

          '@screen md': {
            fontSize: '3rem',
          },
        },

        '.text-heading-3': {
          fontSize: '2rem',
          lineHeight: '140%',
          fontWeight: '400',

          '@screen md': {
            fontSize: '2.5rem',
          },
        },

        '.text-heading-4': {
          fontSize: '1.5rem',
          lineHeight: '140%',
          fontWeight: '400',

          '@screen md': {
            fontSize: '2rem',
          },
        },

        '.text-heading-5': {
          fontSize: '1.25rem',
          lineHeight: '140%',
          fontWeight: '700',

          '@screen md': {
            fontSize: '1.5rem',
          },
        },

        '.text-heading-6': {
          fontSize: '1.125rem',
          lineHeight: '140%',
          fontWeight: '400',

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

        '.text-small-normal': {
          fontSize: '0.875rem',
          lineHeight: '170%',
          fontWeight: '400',
          'font-family': 'var(--font-merriweather)',
        },

        '.text-tiny-normal': {
          fontSize: '0.75rem',
          lineHeight: '170%',
          fontWeight: '400',
          'font-family': 'var(--font-merriweather)',
        },

        '.container': {
          minWidth: '100%',
          margin: '0 auto',
          padding: '0 5%',

          '@screen 2xl': {
            minWidth: 'initial',
            maxWidth: theme('screens.2xl'),
            padding: '0 4.5rem',
          },
        },
      });
    }),
  ],
};

export default config;
