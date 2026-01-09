# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Icônes avec Lucide

Le projet utilise **[Lucide Icons](https://lucide.dev/)** pour les icônes.

### Installation

```bash
npm install lucide-vue-next
```

### Utilisation

```vue
<script setup>
import { Menu, X, Sun, Moon } from "lucide-vue-next";
</script>

<template>
  <Menu :size="20" />
  <Sun :size="20" class="text-gray-700" />
</template>
```

### Avantages

- Icônes modernes et cohérentes
- Tree-shakable (seules les icônes utilisées sont incluses)
- Personnalisables via props (size, color, strokeWidth)
- Compatible avec Tailwind CSS

Voir la [documentation Lucide](https://lucide.dev/guide/packages/lucide-vue-next) pour plus d'exemples.

## Dark Mode (Optionnel)

Le starter inclut un dark mode fonctionnel et prêt à l'emploi.

### Utiliser le dark mode

- Toggle déjà intégré dans le header
- Variables CSS dans `app/assets/css/main.css`
- Classes Tailwind `dark:` dans les composants

### Désactiver le dark mode

1. Commenter/supprimer le toggle dans `AppHeader.vue`
2. Supprimer la section `.dark` dans `main.css`
3. Retirer les classes `dark:` dans les composants

Simple et flexible selon vos besoins !

## Footer - Deux Versions Disponibles

Le starter propose **deux versions du footer** pour s'adapter à vos besoins.

### AppFooter.vue (par défaut)

Footer classique avec affichage permanent des liens.

- Simple et direct
- Idéal pour 5-10 liens
- Accessible et sémantique

### AppFooterAccordion.vue

Footer avec accordéon sur mobile, grille classique sur desktop.

- Économise l'espace vertical sur mobile
- Animation smooth avec icône + qui devient ×
- Idéal pour footers riches (10+ liens)

### Changer de version

Dans `app/layouts/default.vue` :

```vue
<!-- Version classique (défaut) -->
<AppFooter />

<!-- Version accordéon mobile -->
<AppFooterAccordion />
```

**Performances** : Seul le composant utilisé est inclus dans le bundle final (tree-shaking automatique).
