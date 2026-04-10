import tailwindcss from "@tailwindcss/vite";

const siteUrl =
  process.env.NUXT_SITE_URL
  || process.env.NUXT_PUBLIC_SITE_URL
  || "https://nuxt-starter-vitrine.vercel.app";

const siteName = "Nuxt Starter Vitrine";
const siteDescription =
  "Starter Nuxt moderne pour creer des sites vitrines performants, SEO-ready et prets pour la production.";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/image", "@nuxtjs/color-mode", "@nuxtjs/seo"],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    url: siteUrl,
    name: siteName,
    description: siteDescription,
    defaultLocale: "fr",
  },

  ogImage: {
    defaults: {
      width: 1200,
      height: 630,
    },
  },

  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
    storageKey: "color-mode",
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

    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY,

    public: {
      siteUrl,
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },

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
