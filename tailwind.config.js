/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      'spaceage': ['SPACE AGE', 'sans-serif'],
      "myfont": ['myfont', 'sans-serif'],
    },
  },
  plugins: [],
}
