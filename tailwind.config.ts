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
        text: "hsl(var(--text))",
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
