<script setup>
  useHead({
  link: [
    {
      rel: "canonical",
      href: useRequestURL().href, 
    },
  ],
});

useSeoMeta({
  title: "Nuxt Starter Vitrine",
  description:
    "Template Nuxt moderne pour créer des sites vitrines performants, SEO-ready et prêts pour la production.",

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
    <HeroSection />
    <FeaturesSection />
  </div>
</template>
