/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/styles/index.css",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        section: {
          DEFAULT: "hsl(var(--primary-section))",
          secondary: "hsl(var(--secondary-section))",
        },
        txt: {
          primary: "hsl(var(--primary-txt))",
          secondary: "hsl(var(--secondary-txt))",
        },
        accent: {
          DEFAULT: "hsl(var(--primary-accent))",
          secondary: "hsl(var(--secondary-accent))",
        },
        confirm: "hsl(var(--confirm))",
        dangerous: "hsl(var(--dangerous))",
      },
      boxShadow: {
        sm: "0 1px 2px 0 hsl(var(--shadow))",
        md: "0 4px 6px -1px hsl(var(--shadow)), 0 2px 4px -1px hsl(var(--shadow))",
        lg: "0 10px 15px -3px hsl(var(--shadow)), 0 4px 6px -2px hsl(var(--shadow))",
        xl: "0 20px 25px -5px hsl(var(--shadow)), 0 10px 10px -5px hsl(var(--shadow))",
        "2xl": "0 25px 50px -12px hsl(var(--shadow))",
      },
    },
  },
  plugins: [],
};
