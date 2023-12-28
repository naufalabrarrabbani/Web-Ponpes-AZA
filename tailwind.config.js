/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#0D47A1',
        'secondary': '#1565C0',
        'accent': '#FFC107',
        'danger': '#D32F2F',
        'success': '#388E3C',
        'info': '#1976D2',
        'light': '#F5F5F5',
        'dark': '#212121',
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': {
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['"Roboto Mono"', 'monospace'],
      },
      fontSize: {
        'xs': '.75rem',     // 12px
        'sm': '.875rem',    // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '3.75rem',   // 60px
        '7xl': '4.5rem',    // 72px
        '8xl': '6rem',      // 96px
        '9xl': '8rem',      // 128px
      },
      fontWeight: {
        'hairline': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  ],
}

