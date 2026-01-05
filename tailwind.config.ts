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
        primary: "#0f172a",
      },
    },
  },

  plugins: [],
};
