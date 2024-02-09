/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown .5s ease-in-out",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: 'translateX(-20px)' ,opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

