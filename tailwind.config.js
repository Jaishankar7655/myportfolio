/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFE600',
          pink: '#FF6B9D',
          blue: '#4DEEEA',
          lime: '#74EE15',
          coral: '#FF7043',
          purple: '#B388FF',
          lavender: '#E8D5FF',
          mint: '#BFFFC7',
          peach: '#FFD5C2',
          sky: '#C2F0FF',
        },
        brutal: {
          black: '#1a1a2e',
          dark: '#16213e',
          white: '#FEFAE0',
          cream: '#FFF8E7',
          bg: '#F0EBD8',
          card: '#FFFDF7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #1a1a2e',
        'brutal-sm': '3px 3px 0px 0px #1a1a2e',
        'brutal-lg': '6px 6px 0px 0px #1a1a2e',
        'brutal-xl': '8px 8px 0px 0px #1a1a2e',
        'brutal-yellow': '4px 4px 0px 0px #FFE600',
        'brutal-pink': '4px 4px 0px 0px #FF6B9D',
        'brutal-blue': '4px 4px 0px 0px #4DEEEA',
        'brutal-lime': '4px 4px 0px 0px #74EE15',
        'brutal-hover': '6px 6px 0px 0px #1a1a2e',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
