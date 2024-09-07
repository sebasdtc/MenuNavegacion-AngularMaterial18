/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'topbar': '0px 2px 20px rgba(1, 41, 112, 0.1)',
      },
    },
  },
  plugins: [],
}

