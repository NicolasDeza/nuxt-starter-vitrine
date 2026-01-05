// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/color-mode"],

  colorMode: {
    preference: "light", // 👈 DEFAULT
    fallback: "light", // 👈 sécurité
    classSuffix: "", // => .dark / .light
    storageKey: "color-mode", // ok par défaut
  },
});
