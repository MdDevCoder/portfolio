/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        bg2: '#111118',
        bg3: '#16161f',
        surface: '#1c1c28',
        surface2: '#222232',
        border: '#2a2a3d',
        border2: '#363656',
        text: '#f0f0ff',
        text2: '#a0a0c0',
        text3: '#606080',
        accent: '#7c6af7',
        accent2: '#a78bfa',
        accent3: '#c4b5fd',
        teal: '#22d3c8',
        teal2: '#06b6d4',
        pink: '#f472b6',
        amber: '#f59e0b',
        green: '#22c55e',
        red: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 30px rgba(124,106,247,0.3)',
        'glow-accent-hover': '0 8px 40px rgba(124,106,247,0.4)',
        'glow-teal': '0 0 8px rgba(34,211,200,0.5)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-fast': 'pulse-fast 2s ease infinite',
        'scroll-down': 'scrollDown 1.5s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        'pulse-fast': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        scrollDown: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
