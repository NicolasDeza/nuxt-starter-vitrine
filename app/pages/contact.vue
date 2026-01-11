<script setup lang="ts">
import { ShieldCheck } from "lucide-vue-next"

useHead({
  link: [
    {
      rel: "canonical",
      href: useRequestURL().href,
    },
  ],
});

useSeoMeta({
  title: "Contact - Nuxt Starter",
  description:
    "Contactez-nous pour discuter de votre projet web et de vos besoins.",

  robots: "index, follow",

  ogTitle: "Nuxt Starter Vitrine",
  ogDescription:
    "Base Nuxt moderne avec Tailwind, SEO, Dark Mode, ESLint et Nuxt Image.",
  ogImage: "https://nuxt-starter-vitrine.vercel.app/og-starter.jpg",
  ogUrl: "https://nuxt-starter-vitrine.vercel.app/",
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterTitle: "Nuxt Starter Vitrine",
  twitterDescription:
    "Template Nuxt prêt pour la production : SEO, performance et design moderne.",
  twitterImage: "https://nuxt-starter-vitrine.vercel.app/og-starter.jpg",
});
</script>
<template>
  <div>
    <ContactForm />

    <!-- Info développeur : Anti-spam -->
    <div class="w-full bg-primary-bg pt-6 pb-16 sm:pt-12 sm:pb-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="p-6 rounded-xl bg-primary/5 dark:bg-white/5 border border-primary/20 dark:border-white/20"
        >
        <div class="flex items-start gap-4">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 text-primary"
          >
            <ShieldCheck :size="20" />
          </div>
          <div>
            <h3 class="font-semibold text-foreground dark:text-white mb-2">
              🔒 Protection anti-spam intégrée (Cloudflare Turnstile)
            </h3>
            <p class="text-sm text-foreground/70 dark:text-white/80 mb-3">
              Le formulaire utilise des <strong>clés de test</strong> par
              défaut. Pour activer une vraie protection en production :
            </p>
            <ol class="text-sm text-foreground/70 dark:text-white/80 space-y-1 ml-4 list-decimal">
              <li>Créez un compte sur <code class="px-1.5 py-0.5 rounded bg-foreground/10 dark:bg-white/10 text-xs">dash.cloudflare.com</code></li>
              <li>Allez dans Turnstile et créez un widget</li>
              <li>
                Remplacez les clés dans
                <code class="px-1.5 py-0.5 rounded bg-foreground/10 dark:bg-white/10 text-xs">.env</code>
              </li>
            </ol>
            <p class="text-xs text-foreground/50 dark:text-white/60 mt-3">
              💡 Voir le README pour plus de détails
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div></template>