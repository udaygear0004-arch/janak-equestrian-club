import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#080713',
        plum: '#171228',
        haze: '#271a4f',
        orchid: '#6c45c5',
        gold: '#e6bf6b',
        peach: '#ffb38a'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(255,179,138,0.18), transparent 30%), radial-gradient(circle at 70% 20%, rgba(108,69,197,0.22), transparent 30%), linear-gradient(180deg, #120c24 0%, #09080f 100%)'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(230,191,107,0.2), 0 18px 80px rgba(0,0,0,0.45)',
        soft: '0 20px 60px rgba(11, 9, 20, 0.28)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseSlow: 'pulseSlow 6s ease-in-out infinite',
        grain: 'grain 8s steps(10) infinite'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseSlow: {
          '0%,100%': { opacity: '0.35' },
          '50%': { opacity: '0.85' }
        },
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-2%,-3%)' },
          '20%': { transform: 'translate(1%,2%)' },
          '30%': { transform: 'translate(3%,-1%)' },
          '40%': { transform: 'translate(-1%,2%)' },
          '50%': { transform: 'translate(-3%,1%)' },
          '60%': { transform: 'translate(2%,0)' },
          '70%': { transform: 'translate(0,2%)' },
          '80%': { transform: 'translate(3%,-2%)' },
          '90%': { transform: 'translate(-2%,1%)' }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
