<script setup>
const canonical = useCanonical();

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: canonical.value,
    },
  ],
}));

useSeoMeta({
  title: "Mentions Légales",
  description: "Informations légales et mentions obligatoires du site",
  robots: "noindex, follow",
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-slate-50/50 dark:from-[#0F172B] dark:to-[#0A0E1A] py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="space-y-8">
        <!-- En-tête -->
        <div class="space-y-4">
          <div
            class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            Informations légales
          </div>
          <h1
            class="text-4xl sm:text-5xl font-bold text-foreground dark:text-white leading-tight"
          >
            Mentions Légales
          </h1>
          <p class="text-lg text-foreground/70 dark:text-white/70">
            Dernière mise à jour : 9 janvier 2026
          </p>
        </div>

        <!-- Contenu -->
        <div
          class="prose prose-slate dark:prose-invert max-w-none p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-foreground/10 dark:border-white/10 shadow-xl"
        >
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground dark:text-white mb-4">
              1. Éditeur du site
            </h2>
            <p class="text-foreground/80 dark:text-white/80">
              <strong>Nom :</strong> [Votre nom ou raison sociale]<br>
              <strong>Adresse :</strong> [Votre adresse]<br>
              <strong>Email :</strong> nicolasdeza@hotmail.be<br>
              <strong>Pays :</strong> Belgique
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground dark:text-white mb-4">
              2. Hébergement
            </h2>
            <p class="text-foreground/80 dark:text-white/80">
              Ce site est hébergé par :<br>
              <strong>Hébergeur :</strong> [Nom de l'hébergeur]<br>
              <strong>Adresse :</strong> [Adresse de l'hébergeur]<br>
              <strong>Site web :</strong> [URL de l'hébergeur]
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground dark:text-white mb-4">
              3. Propriété intellectuelle
            </h2>
            <p class="text-foreground/80 dark:text-white/80">
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est
              protégé par les lois relatives à la propriété intellectuelle. Toute
              reproduction, même partielle, est interdite sans autorisation
              préalable.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground dark:text-white mb-4">
              4. Données personnelles
            </h2>
            <p class="text-foreground/80 dark:text-white/80">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d'un droit d'accès, de rectification et de
              suppression de vos données personnelles. Pour exercer ce droit,
              contactez-nous à l'adresse : nicolasdeza@hotmail.be
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground dark:text-white mb-4">
              5. Cookies
            </h2>
            <p class="text-foreground/80 dark:text-white/80">
              Ce site peut utiliser des cookies pour améliorer l'expérience
              utilisateur. Vous pouvez configurer votre navigateur pour refuser
              les cookies.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-foreground dark:text-white mb-4">
              6. Responsabilité
            </h2>
            <p class="text-foreground/80 dark:text-white/80">
              L'éditeur s'efforce d'assurer l'exactitude des informations
              diffusées sur ce site, mais ne peut garantir l'absence d'erreurs ou
              d'omissions. L'utilisateur reconnaît utiliser ces informations sous
              sa propre responsabilité.
            </p>
          </section>
        </div>

        <!-- Bouton retour -->
        <div class="flex justify-center pt-8">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors"
          >
            <span aria-hidden="true">←</span>
            Retour à l'accueil
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>