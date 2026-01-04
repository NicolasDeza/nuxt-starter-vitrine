<script setup lang="ts"></script>

<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-white text-neutral-900">
    <AppHeader />
    <!-- Main content -->
    <main class="flex-1 w-full">
      <!-- Wrapper du site (max w à changer selon vos choix) -->
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>
