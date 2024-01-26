/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "470px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      mdlg: "1043px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
    },
  },
  plugins: [],
};
