/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        clouds: "clouds 8s ease-in-out infinite",
        sunshines: "sunshines 2s infinite",
      },
      keyframes: {
        clouds: {
          '0%': { transform: 'translateX(15px)' },
          '50%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(15px)' },
        },
        sunshines: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

