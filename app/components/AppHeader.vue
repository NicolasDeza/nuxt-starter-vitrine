<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useColorMode } from "#imports";

// Menu mobile gestion état
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Color mode (dark/light)
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

// Fermer le menu avec la touche Escape ( accèssibilité)
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full bg-primary-bg text-text border-b border-gray-200 dark:border-white/10 transition-colors"
  >
    <nav
      class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      aria-label="Navigation principale"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
        aria-label="Retour à l'accueil"
        @click="closeMenu"
      >
        <NuxtImg
          :src="
            colorMode.preference === 'dark'
              ? '/images/logo/logo-dark-nuxt.svg'
              : '/images/logo/logo-light-nuxt.svg'
          "
          alt="Logo Nom du site"
          class="h-7 w-auto"
          loading="eager"
          decoding="async"
        />
      </NuxtLink>

      <!-- Navigation desktop -->
      <ul class="hidden md:flex items-center gap-8 font-semibold">
        <li>
          <NuxtLink
            to="/"
            class="hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            Accueil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/services"
            class="hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/projets"
            class="hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            Projets
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <!-- Toggle dark mode -->
        <ClientOnly>
          <button
            type="button"
            aria-label="Basculer le thème"
            class="h-9 w-9 rounded-md border border-gray-200 dark:border-gray-700 bg-white hover:bg-gray-50 dark:bg-white dark:hover:bg-gray-50 flex items-center justify-center transition"
            @click="toggleTheme"
          >
            <!-- Soleil -->
            <svg
              v-if="colorMode.preference === 'light'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m0-11.314 1.414 1.414m11.314 11.314 1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>

            <!-- Lune -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
              />
            </svg>
          </button>
        </ClientOnly>

        <!-- CTA desktop -->
        <NuxtLink
          to="/contact"
          class="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover transition"
        >
          Contact
        </NuxtLink>

        <!-- Hamburger mobile -->
        <button
          type="button"
          class="md:hidden h-9 w-9 rounded-md border border-gray-200 dark:border-gray-700 bg-white hover:bg-gray-50 dark:bg-white dark:hover:bg-gray-50 flex items-center justify-center transition"
          :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          @click="toggleMenu"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
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
            class="h-5 w-5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
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
        id="mobile-menu"
        class="md:hidden bg-primary-bg border-t border-gray-200 dark:border-white/10"
        role="region"
        aria-label="Menu de navigation mobile"
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
              class="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover transition"
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
