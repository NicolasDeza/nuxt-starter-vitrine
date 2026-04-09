<script setup>
const canonical = useCanonical();
const seo = {
  title: "Nuxt Starter Vitrine",
  description:
    "Template Nuxt moderne pour creer des sites vitrines performants, SEO-ready et prets pour la production.",
};
const socialDescription = "Base Nuxt moderne avec Tailwind, SEO, Dark Mode, ESLint et Nuxt Image.";

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: canonical.value,
    },
  ],
}));

useDefaultOgImage({
  title: seo.title,
  description: socialDescription,
});

useSeoMeta({
  title: seo.title,
  description: seo.description,
  robots: "index, follow",
  ogTitle: seo.title,
  ogDescription: socialDescription,
  ogUrl: canonical,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: seo.title,
  twitterDescription: socialDescription,
});
</script>

<template>
  <div>
    <HeroSection />
    <FeaturesSection />
  </div>
</template>
