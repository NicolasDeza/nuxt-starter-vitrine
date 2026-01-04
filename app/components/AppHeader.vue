<template>
  <header class="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
    <nav
      class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      aria-label="Navigation principale"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <NuxtImg
          src="/images/logo/logo-light-nuxt.svg"
          alt="Nom du site"
          class="h-7 w-auto"
          loading="eager"
          decoding="async"
        />
      </NuxtLink>

      <!-- Navigation desktop -->
      <ul class="hidden md:flex items-center gap-8 text-sm font-medium">
        <li>
          <NuxtLink to="/" class="hover:text-neutral-600 transition">
            Accueil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services" class="hover:text-neutral-600 transition">
            Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projets" class="hover:text-neutral-600 transition">
            Projets
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:text-neutral-600 transition">
            Contact
          </NuxtLink>
        </li>
      </ul>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <!-- Toggle dark mode (placeholder) -->
        <button
          type="button"
          aria-label="Basculer le thème"
          class="h-9 w-9 rounded-md border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition"
        >
          <!-- Icône soleil (temporaire) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m0-11.314 1.414 1.414m11.314 11.314 1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>
        </button>

        <!-- CTA -->
        <NuxtLink
          to="/contact"
          class="hidden sm:inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
        >
          Contact
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
