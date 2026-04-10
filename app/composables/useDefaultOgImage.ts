interface DefaultOgImageOptions {
  title: string;
  description?: string;
  eyebrow?: string;
}

export const useDefaultOgImage = (options: DefaultOgImageOptions) => {
  const site = useSiteConfig();
  const config = useRuntimeConfig();

  const domain = computed(() => {
    const fallback = "nuxt-starter-vitrine.vercel.app";

    try {
      return new URL(
        site.url || config.public.siteUrl || `https://${fallback}`,
      ).hostname.replace(/^www\./, "");
    } catch {
      return fallback;
    }
  });

  defineOgImage(
    "Starter",
    {
      title: options.title,
      description: options.description,
      eyebrow: options.eyebrow || site.name || "Nuxt Starter Vitrine",
      domain,
    },
    {
      alt: options.title,
      width: 1200,
      height: 630,
    },
  );
};
