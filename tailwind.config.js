/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Ocean Blue & Midnight Theme
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        midnight: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #075985 100%)',
        'gradient-ocean-dark': 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0284c7 100%)',
        'gradient-light': 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
        'mesh-light': 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.15) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(199, 89%, 48%, 0.15) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(204, 94%, 94%, 0.3) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(195, 100%, 39%, 0.1) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 27% 37%, hsla(199, 89%, 48%, 0.12) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(215, 98%, 61%, 0.12) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(204, 94%, 94%, 0.05) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(195, 100%, 39%, 0.08) 0px, transparent 50%)',
      },
      boxShadow: {
        'ocean': '0 4px 14px 0 rgba(14, 165, 233, 0.39)',
        'ocean-lg': '0 10px 40px 0 rgba(14, 165, 233, 0.35)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.4)',
        'glow-lg': '0 0 40px rgba(14, 165, 233, 0.6)',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite 1s',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
      },
    },
  },
  plugins: [],
}
