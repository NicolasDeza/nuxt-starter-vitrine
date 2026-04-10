// Centralise la construction des URL canoniques a partir du site config.
export const useCanonical = () => {
  const route = useRoute();
  const site = useSiteConfig();
  const config = useRuntimeConfig();

  return computed(() => {
    const base = (site.url || config.public.siteUrl || "").replace(/\/$/, "");

    if (route.path === "/") {
      return base;
    }

    return `${base}${route.path}`;
  });
};
