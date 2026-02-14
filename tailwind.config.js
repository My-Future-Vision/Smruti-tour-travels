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
        antigravity: {
          deep: 'hsl(var(--color-antigravity-deep) / <alpha-value>)',
          white: 'hsl(var(--color-antigravity-white) / <alpha-value>)',
          cyan: 'hsl(var(--color-antigravity-cyan) / <alpha-value>)',
          violet: 'hsl(var(--color-antigravity-violet) / <alpha-value>)',
          nebula: 'hsl(var(--color-antigravity-nebula) / <alpha-value>)',
          dust: 'hsl(var(--color-antigravity-dust) / <alpha-value>)',
          orange: 'hsl(var(--color-antigravity-orange) / <alpha-value>)',
          green: 'hsl(var(--color-antigravity-green) / <alpha-value>)',
        },
        lovable: {
          primary: 'hsl(var(--color-antigravity-cyan) / <alpha-value>)',
          secondary: 'hsl(var(--color-antigravity-violet) / <alpha-value>)',
          accent: 'hsl(var(--color-antigravity-violet) / <alpha-value>)',
          dark: 'hsl(var(--color-antigravity-deep) / <alpha-value>)',
          light: 'hsl(var(--color-antigravity-white) / <alpha-value>)',
        },
        glass: {
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['44px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-title': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 30px rgba(0, 212, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
