<script setup lang="ts">
const year = new Date().getFullYear();

// État pour gérer l'ouverture des accordéons (mobile uniquement)
const openSections = ref<Record<string, boolean>>({
  navigation: false,
  resources: false,
});

const toggleSection = (section: string) => {
  openSections.value[section] = !openSections.value[section];
};
</script>

<template>
  <footer
    class="w-full border-t border-foreground/20 bg-primary-bg"
    aria-label="Pied de page"
  >
    <div class="mx-auto max-w-6xl px-6 pt-12 pb-4 md:pb-6">
      <!-- Grille responsive avec accordéon sur mobile -->
      <div class="grid gap-8 md:grid-cols-3">
        <!-- Colonne 1 : Branding (toujours visible) -->
        <div class="text-center md:text-left pb-6">
          <h2 class="text-xl font-semibold text-foreground">
            Nuxt Starter Vitrine
          </h2>
          <p
            class="mt-2 text-sm text-foreground/60 mx-auto md:mx-0 max-w-[220px]"
          >
            Une base moderne et performante pour créer des sites Nuxt prêts pour
            la production.
          </p>
        </div>

        <!-- Colonne 2 : Navigation (accordéon sur mobile) -->
        <nav aria-label="Navigation du pied de page">
          <!-- Titre avec bouton toggle (mobile uniquement) -->
          <button
            type="button"
            class="flex w-full items-center justify-between text-sm font-semibold text-foreground md:cursor-default md:pointer-events-none"
            :aria-expanded="openSections.navigation"
            aria-controls="nav-links"
            @click="toggleSection('navigation')"
          >
            <span>Navigation</span>
            <svg
              class="h-5 w-5 md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <!-- Ligne horizontale (toujours visible = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
              <!-- Ligne verticale (visible = +, cachée = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16"
                class="transition-opacity duration-200"
                :class="openSections.navigation ? 'opacity-0' : 'opacity-100'"
              />
            </svg>
          </button>

          <!-- Liste de liens (accordéon sur mobile, toujours visible sur desktop) -->
          <div
            id="nav-links"
            class="grid overflow-hidden transition-all duration-300 ease-in-out md:block"
            :class="
              openSections.navigation
                ? 'mt-2 grid-rows-[1fr]'
                : 'grid-rows-[0fr] md:mt-2 md:grid-rows-[1fr]'
            "
          >
            <ul class="min-h-0 space-y-2 text-sm">
              <li>
                <NuxtLink
                  to="/"
                  class="text-foreground/60 hover:text-foreground transition"
                >
                  Accueil
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-foreground/60 hover:text-foreground transition"
                >
                  Services
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-foreground/60 hover:text-foreground transition"
                >
                  Projets
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-foreground/60 hover:text-foreground transition"
                >
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>

        <!-- Colonne 3 : Ressources (accordéon sur mobile) -->
        <nav aria-label="Ressources">
          <!-- Titre avec bouton toggle (mobile uniquement) -->
          <button
            type="button"
            class="flex w-full items-center justify-between text-sm font-semibold text-foreground md:cursor-default md:pointer-events-none"
            :aria-expanded="openSections.resources"
            aria-controls="resource-links"
            @click="toggleSection('resources')"
          >
            <span>Ressources</span>
            <svg
              class="h-5 w-5 md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <!-- Ligne horizontale (toujours visible = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
              <!-- Ligne verticale (visible = +, cachée = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16"
                class="transition-opacity duration-200"
                :class="openSections.resources ? 'opacity-0' : 'opacity-100'"
              />
            </svg>
          </button>

          <!-- Liste de liens (accordéon sur mobile, toujours visible sur desktop) -->
          <div
            id="resource-links"
            class="grid overflow-hidden transition-all duration-300 ease-in-out md:block"
            :class="
              openSections.resources
                ? 'mt-2 grid-rows-[1fr]'
                : 'grid-rows-[0fr] md:mt-2 md:grid-rows-[1fr]'
            "
          >
            <ul class="min-h-0 space-y-2 text-sm">
              <li>
                <NuxtLink
                  to="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-foreground/60 hover:text-foreground transition"
                  aria-label="GitHub (ouvre dans un nouvel onglet)"
                >
                  GitHub
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/mentions-legales"
                  class="text-foreground/60 hover:text-foreground transition"
                >
                  Mentions légales
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- Bas de footer -->
      <div
        class="mt-10 border-t border-foreground/20 pt-6 text-center text-sm text-foreground/50"
      >
        <p>© {{ year }} Nuxt Starter Vitrine. Tous droits réservés.</p>
        <p class="mt-2">
          Site réalisé par
          <NuxtLink
            to="https://nicolasdeza.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-foreground/70 hover:text-foreground transition underline"
            aria-label="Nicolas Deza (ouvre dans un nouvel onglet)"
          >
            Nicolas Deza
          </NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>
