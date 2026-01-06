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

## 🎨 Dark Mode (Optionnel)

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
