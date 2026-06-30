/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bright corporate blue — primary brand action color
        primary: {
          DEFAULT: '#0066FF',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        // Deep industrial blues — backgrounds, surfaces, headings
        navy: {
          DEFAULT: '#0A1A2F',
          50: '#E7EBF0',
          100: '#C2CDDA',
          200: '#8295AD',
          300: '#3D5A80',
          400: '#1E3A5F',
          500: '#142B47',
          600: '#0F2236',
          700: '#0A1A2F',
          800: '#071321',
          900: '#040B14',
        },
        // Bright accent gold/yellow — highlights, accents, badges
        accent: {
          DEFAULT: '#FFB800',
          50: '#FFF8E6',
          100: '#FFEFBF',
          200: '#FFE08A',
          300: '#FFD24D',
          400: '#FFC520',
          500: '#FFB800',
          600: '#CC9300',
          700: '#996E00',
          800: '#664A00',
          900: '#332500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          lg: '2rem',
        },
        screens: {
          '2xl': '1280px',
        },
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(10, 26, 47, 0.18)',
        'card-hover': '0 20px 50px -12px rgba(0, 102, 255, 0.25)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
