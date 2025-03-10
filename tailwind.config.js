/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.html",  // All HTML files in the public folder
        "./src/**/*.{html,js}" // All HTML and JS files in the src folder
      ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  }
  
  