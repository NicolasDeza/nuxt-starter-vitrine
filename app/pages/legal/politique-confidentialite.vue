<script setup>
usePageSeo({
  title: "Politique de confidentialite - Nuxt Starter Vitrine",
  description: "Politique de confidentialite et protection des donnees personnelles.",
  eyebrow: "Protection des donnees",
  robots: "noindex, follow",
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-slate-50/50 dark:from-[#0F172B] dark:to-[#0A0E1A] py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="space-y-8">
        <div class="space-y-4">
          <div
            class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            Protection des donnees
          </div>
          <h1
            class="text-4xl sm:text-5xl font-bold text-foreground dark:text-white leading-tight"
          >
            Politique de confidentialite
          </h1>
          <p class="text-lg text-foreground/70 dark:text-white/70">
            Derniere mise a jour : 21 janvier 2026
          </p>
        </div>

        <div
          class="prose prose-slate dark:prose-invert max-w-none p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-foreground/10 dark:border-white/10 shadow-xl"
        >
          <section class="mb-8">
            <h2>1. Introduction</h2>
            <p>
              Cette politique explique quelles donnees personnelles peuvent etre
              collectees via le site, pour quelles finalites, et comment elles sont
              protegees.
            </p>
          </section>

          <section class="mb-8">
            <h2>2. Responsable du traitement</h2>
            <p>
              <strong>Nom :</strong> [Votre nom ou raison sociale]<br>
              <strong>Adresse :</strong> [Votre adresse]<br>
              <strong>Email :</strong> nicolasdeza@hotmail.be<br>
              <strong>Pays :</strong> Belgique
            </p>
          </section>

          <section class="mb-8">
            <h2>3. Donnees collectees</h2>
            <ul>
              <li>Nom et prenom</li>
              <li>Adresse email</li>
              <li>Numero de telephone si fourni</li>
              <li>Entreprise si fournie</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2>4. Finalites du traitement</h2>
            <ul>
              <li>Repondre aux demandes de contact</li>
              <li>Fournir les services demandes</li>
              <li>Ameliorer le site et l'experience utilisateur</li>
              <li>Respecter les obligations legales</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2>5. Base legale</h2>
            <ul>
              <li>Consentement lorsqu'un formulaire est envoye</li>
              <li>Interet legitime pour l'amelioration du site</li>
              <li>Execution d'un contrat pour la fourniture des services</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2>6. Analyse d'audience</h2>
            <p>
              Aucune solution d'analyse d'audience n'est actuellement utilisee
              sur ce site.
            </p>
          </section>

          <section class="mb-8">
            <h2>7. Duree de conservation</h2>
            <ul>
              <li>Donnees de contact : jusqu'a 3 ans apres le dernier echange</li>
              <li>Donnees legales : selon les obligations applicables</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2>8. Partage des donnees</h2>
            <p>
              Les donnees ne sont jamais revendues. Elles peuvent etre transmises
              uniquement a l'hebergeur, aux prestataires techniques ou aux
              autorites competentes lorsque la loi l'impose.
            </p>
          </section>

          <section class="mb-8">
            <h2>9. Vos droits</h2>
            <p>
              Vous disposez d'un droit d'acces, de rectification, d'effacement,
              d'opposition, de limitation et de portabilite. Pour exercer ces
              droits, contactez-nous a l'adresse indiquee plus haut.
            </p>
          </section>

          <section class="mb-8">
            <h2>10. Securite</h2>
            <p>
              Des mesures techniques et organisationnelles raisonnables sont mises
              en place pour proteger les donnees personnelles contre l'acces non
              autorise, la perte, l'alteration ou la divulgation.
            </p>
          </section>

          <section>
            <h2>11. Mise a jour de la politique</h2>
            <p>
              Cette politique peut etre modifiee a tout moment. La date de mise a
              jour indiquee en haut de page fait foi.
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
