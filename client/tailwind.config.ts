import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoSlab: ['Roboto Slab', 'serif'],
        Roboto: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [daisyui],
};