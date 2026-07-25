/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0E14',
        surface: '#121620',
        surfaceHover: '#171C29',
        raised: '#181D2A',
        line: 'rgba(255,255,255,0.08)',
        lineStrong: 'rgba(255,255,255,0.14)',
        ink: '#F3F5F8',
        muted: '#8B93A7',
        faint: '#5B6478',
        coral: '#FF6B57',
        coralDark: '#E8503C',
        mint: '#34D399',
        mintDark: '#22B37D',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        pin: '22px',
      },
      boxShadow: {
        pin: '0 18px 44px -20px rgba(0, 0, 0, 0.55)',
        pinHover: '0 26px 60px -18px rgba(255, 107, 87, 0.28)',
        glow: '0 0 0 1px rgba(52, 211, 153, 0.25), 0 18px 44px -20px rgba(52, 211, 153, 0.2)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
