<template>
  <section class="w-full bg-[#0F172B] py-10">
    <div class="mx-auto max-w-[1440px] px-8">
      <div class="rounded-lg px-6 py-16 text-center dark:bg-white/5">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Prêt à démarrer votre prochain projet Nuxt ?
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-white/70">
          Une base Nuxt moderne, performante et prête pour la production. Gagnez
          du temps et concentrez-vous sur l’essentiel.
        </p>

        <div
          class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <NuxtLink
            to="#"
            class="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-hover"
          >
            Commencer
            <span aria-hidden="true">→</span>
          </NuxtLink>

          <NuxtLink
            to="#"
            class="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
          >
            Voir sur GitHub
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
