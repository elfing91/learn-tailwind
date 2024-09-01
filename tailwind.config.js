/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:["./src/**/*.html"],
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.625rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}

