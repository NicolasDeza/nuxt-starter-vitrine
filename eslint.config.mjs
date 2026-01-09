import withNuxt from "@nuxt/eslint-config";

// Utiliser npm run lint avant commit git

export default withNuxt({
  rules: {
    // Starter-friendly
    "vue/multi-word-component-names": "off",
    "no-console": "off",
    "no-debugger": "off",

    // Autoriser le self-closing sur les void elements HTML (input, img, br, etc.)
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always", // <input />
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
});
