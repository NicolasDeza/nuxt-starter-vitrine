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
  runtimeConfig: {
    smtp: {
      host: process.env.NUXT_SMTP_HOST || "",
      port: Number(process.env.NUXT_SMTP_PORT) || 587,
      user: process.env.NUXT_SMTP_USER || "",
      pass: process.env.NUXT_SMTP_PASS || "",
    },
    mail: {
      from: process.env.NUXT_MAIL_FROM || "",
      to: process.env.NUXT_MAIL_TO || "",
    },
  },

  /* =========================
   SEO GLOBAL (BASE) – Nuxt Starter
   ========================= */
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },

      // Titre par défaut + template
      titleTemplate: "%s – Nuxt Starter",

      meta: [
        {
          name: "description",
          content:
            "Starter Nuxt moderne pour créer des sites vitrines performants, SEO-ready et prêts pour la production.",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Nuxt Starter" },
        { name: "theme-color", content: "#0F172B" },
      ],

      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: "/nuxt-logo.png",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/nuxt-logo.png",
        },
      ],
    },
  },
});
