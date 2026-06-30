/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep midnight navy / charcoal — backgrounds, headings, text hierarchy
        midnight: {
          DEFAULT: '#0B1220',
          50: '#F3F5F8',
          100: '#E4E8EF',
          200: '#C3CBD9',
          300: '#9AA6BC',
          400: '#5E6E8C',
          500: '#33425E',
          600: '#1E2B43',
          700: '#131C2E',
          800: '#0B1220',
          900: '#070B14',
        },
        // Electric Teal — primary accent, used sparingly for emphasis
        accent: {
          DEFAULT: '#00E0C6',
          50: '#E6FFFB',
          100: '#C2FFF6',
          200: '#85F7EA',
          300: '#47EEDC',
          400: '#16E0CB',
          500: '#00E0C6',
          600: '#00B7A3',
          700: '#018C7E',
          800: '#0A6F66',
          900: '#0C5A54',
        },
        // Clean off-whites & cool greys for layered section depth
        surface: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#F7F9FB',
          200: '#EEF2F6',
          300: '#E3E9F0',
          400: '#D2DAE4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '80rem',
      },
      boxShadow: {
        soft: '0 10px 40px -18px rgba(11, 18, 32, 0.22)',
        card: '0 16px 50px -24px rgba(11, 18, 32, 0.28)',
        glass: '0 8px 32px -10px rgba(11, 18, 32, 0.25)',
        glow: '0 14px 50px -12px rgba(0, 224, 198, 0.45)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'cool-fade':
          'linear-gradient(180deg, #FFFFFF 0%, #F7F9FB 55%, #EEF2F6 100%)',
      },
      keyframes: {
        'accent-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'accent-pulse': 'accent-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
