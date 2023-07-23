/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        moveCloud: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        }
      },
      animation: {
        moveCloud30s: "moveCloud 30s linear infinite",
        moveCloud35s: "moveCloud 35s linear infinite",
        moveCloud40s: "moveCloud 40s linear infinite",
        moveCloud45s: "moveCloud 45s linear infinite",
        moveCloud60s: "moveCloud 60s linear infinite",
        moveCloud90s: "moveCloud 90s linear infinite",
      }
    },
  },
  plugins: [],
};
