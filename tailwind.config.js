/** @type {import('tailwindcss').Config} */
// tailwind.config.js



module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem', // You can adjust the value accordingly
      },
    },
  },
  plugins: [
    // ...
  ],
  layers: {
    utilities: ['w-600'],
  },
};






