export default defineNuxtPlugin(() => {
  if (!import.meta.client) return;

  const config = useRuntimeConfig();

  // Désactivation automatique si pas configuré
  if (!config.public.matomoUrl) return;

  const _paq = window._paq ?? [];
  window._paq = _paq;

  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);

  const u = config.public.matomoUrl;
  _paq.push(["setTrackerUrl", `${u}matomo.php`]);
  _paq.push(["setSiteId", config.public.matomoSiteId ?? "1"]);

  const script = document.createElement("script");
  script.async = true;
  script.src = `${u}matomo.js`;

  document.head.appendChild(script);
});
