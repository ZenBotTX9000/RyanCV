
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-grey': '#bfbfbf',
        'dark-grey': '#737373',
        'beige': '#fff4de',
        'dark-mode-bg': '#2a2a2a',
        'dark-mode-surface': '#3a3a3a',
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(135deg, rgba(191, 191, 191, 1) 0%, rgba(153, 151, 151, 1) 100%)',
        'dark-gradient': 'linear-gradient(135deg, rgba(115, 115, 115, 1) 0%, rgba(66, 66, 66, 1) 100%)',
        'beige-gradient': 'linear-gradient(135deg, rgba(255, 244, 222, 1) 0%, rgba(252, 223, 177, 1) 100%)',
        'dark-mode-gradient': 'linear-gradient(135deg, rgba(42, 42, 42, 1) 0%, rgba(58, 58, 58, 1) 100%)',
        'dark-mode-surface-gradient': 'linear-gradient(135deg, rgba(58, 58, 58, 1) 0%, rgba(74, 74, 74, 1) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 0.8s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
}