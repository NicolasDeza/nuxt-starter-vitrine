<script setup lang="ts">
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
  ogImage: "https://your-domain.com/og-image.jpg",
  ogUrl: "https://your-domain.com",
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterTitle: "Nuxt Starter Vitrine",
  twitterDescription:
    "Template Nuxt prêt pour la production : SEO, performance et design moderne.",
  twitterImage: "https://your-domain.com/og-image.jpg",
});
</script>




<template>
  <div>
    <HeroSection />
    <FeaturesSection />
  </div>
</template>
