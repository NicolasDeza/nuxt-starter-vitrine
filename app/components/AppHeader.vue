<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
    <nav
      class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      aria-label="Navigation principale"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2" @click="closeMenu">
        <NuxtImg
          src="/images/logo/logo-light-nuxt.svg"
          alt="Nom du site"
          class="h-7 w-auto"
          loading="eager"
          decoding="async"
        />
      </NuxtLink>

      <!-- Navigation desktop -->
      <ul class="hidden md:flex items-center gap-8 font-medium">
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

        <!-- CTA desktop -->
        <NuxtLink
          to="/contact"
          class="hidden sm:inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
        >
          Contact
        </NuxtLink>

        <!-- Hamburger mobile -->
        <button
          class="md:hidden h-9 w-9 rounded-md border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition"
          aria-label="Menu"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Menu mobile -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden border-t border-neutral-200 bg-white"
      >
        <ul class="flex flex-col px-4 py-4 gap-2 text-sm font-medium">
          <li>
            <NuxtLink to="/" class="block py-2" @click="closeMenu">
              Accueil
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services" class="block py-2" @click="closeMenu">
              Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projets" class="block py-2" @click="closeMenu">
              Projets
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="block py-2" @click="closeMenu">
              Contact
            </NuxtLink>
          </li>

          <!-- CTA mobile -->
          <li class="pt-2">
            <NuxtLink
              to="/contact"
              class="inline-flex w-full justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
              @click="closeMenu"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
