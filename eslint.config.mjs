import withNuxt from "@nuxt/eslint-config";

// Utiliser npm run linit avant commit git

export default withNuxt({
  rules: {
    // Starter-friendly
    "vue/multi-word-component-names": "off",

    "no-console": "off",
    "no-debugger": "off",
  },
});
