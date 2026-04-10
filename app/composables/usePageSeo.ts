interface PageSeoOptions {
  title: string;
  description: string;
  socialDescription?: string;
  robots?: string;
  eyebrow?: string;
}

export const usePageSeo = (options: PageSeoOptions) => {
  const canonical = useCanonical();

  useHead(() => ({
    link: [
      {
        rel: "canonical",
        href: canonical.value,
      },
    ],
  }));

  useDefaultOgImage({
    title: options.title,
    description: options.socialDescription || options.description,
    eyebrow: options.eyebrow,
  });

  useSeoMeta({
    title: options.title,
    description: options.description,
    robots: options.robots || "index, follow",
    ogTitle: options.title,
    ogDescription: options.socialDescription || options.description,
    ogUrl: canonical,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: options.title,
    twitterDescription: options.socialDescription || options.description,
  });
};
