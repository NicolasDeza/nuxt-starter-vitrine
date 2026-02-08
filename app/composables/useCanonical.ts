/**
 * Composable pour gérer l'URL canonique de manière centralisée
 */
export const useCanonical = () => {
  const route = useRoute();
  const config = useRuntimeConfig();

  return computed(() => {
    const base = (config.public.siteUrl || "").replace(/\/$/, "");
    const path = route.path === "/" ? "" : route.path;
    return `${base}${path}`;
  });
};
