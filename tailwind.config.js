/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['CustomFont', 'sans'],
      },
      colors: {
        'sky': '#87CEEB',
        'cloud': '#F0F8FF',
        'sunshine': '#FFD700',
      },
      Images: {
        'CustomImage': 'url("https://cdn.dribbble.com/users/12780792/screenshots/19271218/media/5d7966ac9ccc7b88a4a91fb1f3d639ea.png?resize=400x300&vertical=center")',
      },
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

