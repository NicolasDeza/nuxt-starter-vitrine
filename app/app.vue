<script setup>
import { useRouter } from 'vue-router'

// Gestion matomo en SPA
const router = useRouter()

router.afterEach(() => {
  if (import.meta.client && window._paq) {
    window._paq.push(['trackPageView'])
  }
})
// Dark mode
const colorMode = useColorMode();



// Theme color dynamique selon le mode
useHead({
  meta: [
    {
      name: "theme-color",
      content: computed(() =>
        colorMode.preference === "dark" ? "#0F172B" : "#FFFFFF"
      ),
    },
  ],
});
</script>

<template>
  <NuxtLoadingIndicator
    color="#00DC82"
    :height="3"
    :duration="2500"
    :throttle="0"
  />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
