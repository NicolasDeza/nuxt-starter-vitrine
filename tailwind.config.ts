import type { Config } from "tailwindcss";

export default <Config>{
  darkMode: "class",

  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],

  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
        },
        "primary-bg": "hsl(var(--primary-bg))",
      },
    },
  },

  plugins: [],
};
