/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'oxford': '#F8F9FA',
        'charcoal': '#1A1A1A',
        'champagne': '#F2D4D4',
        'blush': '#E5B8B8',
        'birkin': '#CBA135',
        'surface': {
          DEFAULT: '#fdf8f8',
          dim: '#ddd9d8',
          container: '#f1edec',
          high: '#ebe7e6',
          highest: '#e5e2e1',
        },
        'on-surface': '#1c1b1b',
        'on-surface-variant': '#444748',
        'wine': '#6f5959',
        'wine-container': '#fadbdb',
        'line': { DEFAULT: '#747878', variant: '#c4c7c7' },
      },
      fontSize: {
        'hero': ['84px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-sm': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'subtitle': ['14px', { lineHeight: '1.5', letterSpacing: '0.4em' }],
        'card-title': ['18px', { lineHeight: '1.4' }],
        'body-std': ['14px', { lineHeight: '1.6' }],
        'ui-label': ['11px', { lineHeight: '1', letterSpacing: '0.05em' }],
        'ticker': ['10px', { lineHeight: '1', letterSpacing: '0.02em' }],
      },
      fontFamily: {
        'display': ['"Playfair Display"', '"Noto Serif"', 'Georgia', 'serif'],
        'body': ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        'mono': ['"Courier New"', 'Courier', 'monospace'],
      },
      borderRadius: {
        'card': '4px',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
