<script setup>
usePageSeo({
  title: "Mentions legales - Nuxt Starter Vitrine",
  description: "Informations legales et mentions obligatoires du site.",
  eyebrow: "Page legale",
  robots: "noindex, follow",
});
</script>

<template>
  <div class="min-h-screen bg-linear-to-b from-white to-slate-50/50 dark:from-[#0F172B] dark:to-[#0A0E1A] py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="space-y-8">
        <div class="space-y-4">
          <div
            class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            Informations legales
          </div>
          <h1
            class="text-4xl sm:text-5xl font-bold text-foreground dark:text-white leading-tight"
          >
            Mentions legales
          </h1>
          <p class="text-lg text-foreground/70 dark:text-white/70">
            Derniere mise a jour : 9 janvier 2026
          </p>
        </div>

        <div
          class="prose prose-slate dark:prose-invert max-w-none p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-foreground/10 dark:border-white/10 shadow-xl"
        >
          <section class="mb-8">
            <h2>1. Editeur du site</h2>
            <p>
              <strong>Nom :</strong> [Votre nom ou raison sociale]<br>
              <strong>Adresse :</strong> [Votre adresse]<br>
              <strong>Email :</strong> nicolasdeza@hotmail.be<br>
              <strong>Pays :</strong> Belgique
            </p>
          </section>

          <section class="mb-8">
            <h2>2. Hebergement</h2>
            <p>
              <strong>Hebergeur :</strong> [Nom de l'hebergeur]<br>
              <strong>Adresse :</strong> [Adresse de l'hebergeur]<br>
              <strong>Site web :</strong> [URL de l'hebergeur]
            </p>
          </section>

          <section class="mb-8">
            <h2>3. Propriete intellectuelle</h2>
            <p>
              L'ensemble du contenu du site est protege par les regles de propriete
              intellectuelle. Toute reproduction, meme partielle, est interdite
              sans autorisation prealable.
            </p>
          </section>

          <section class="mb-8">
            <h2>4. Donnees personnelles</h2>
            <p>
              Conformement au RGPD, vous disposez d'un droit d'acces, de
              rectification et de suppression de vos donnees personnelles. Pour
              exercer ce droit, contactez-nous a l'adresse ci-dessus.
            </p>
          </section>

          <section class="mb-8">
            <h2>5. Cookies</h2>
            <p>
              Le site peut utiliser des cookies techniques necessaires a son bon
              fonctionnement. Vous pouvez configurer votre navigateur pour les
              limiter ou les refuser.
            </p>
          </section>

          <section>
            <h2>6. Responsabilite</h2>
            <p>
              L'editeur s'efforce de fournir des informations a jour, sans garantir
              l'absence totale d'erreurs ou d'omissions. L'utilisateur reste
              responsable de l'usage qu'il fait des informations presentes sur le
              site.
            </p>
          </section>
        </div>

        <div class="flex justify-center pt-8">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors"
          >
            <span aria-hidden="true">&larr;</span>
            Retour a l'accueil
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
