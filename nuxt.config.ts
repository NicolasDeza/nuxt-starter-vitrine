// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/color-mode", "@nuxtjs/sitemap"],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://nuxt-starter-vitrine.vercel.app",
  },

  // Dark mode
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
    storageKey: "color-mode",
  },

  // Runtime config (server + public)
  runtimeConfig: {
    // ===== Server only =====
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

    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY,

    // ===== Public (client) =====
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://www.cgrenov.be",
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,

      // 🔥 Matomo (Analytics RGPD)
      matomoUrl: process.env.NUXT_PUBLIC_MATOMO_URL || "",
      matomoSiteId: process.env.NUXT_PUBLIC_MATOMO_SITE_ID || "1",
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

      titleTemplate: "%s – Nuxt Starter",

      meta: [
        {
          name: "description",
          content:
            "Starter Nuxt moderne pour créer des sites vitrines performants, SEO-ready et prêts pour la production.",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Nuxt Starter" },
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

      script: [
        {
          src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
          async: true,
          defer: true,
        },
      ],
    },
  },
});
