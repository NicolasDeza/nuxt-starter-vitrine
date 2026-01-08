<script setup lang="ts">
import type { Component } from "vue";
defineProps<{
  title: string;
  description: string;
  icon: Component;
}>();
</script>

<template>
  <div class="flex gap-4 rounded-lg bg-white p-4 dark:bg-white/5">
    <!-- Icône -->
    <div
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20"
    >
      <component :is="icon" class="h-6 w-6" />
    </div>
    <!-- Texte -->
    <div>
      <h3 class="font-semibold text-foreground">
        {{ title }}
      </h3>
      <p class="mt-1 text-sm text-muted-foreground dark:text-gray-300">
        {{ description }}
      </p>
    </div>
  </div>
</template>
