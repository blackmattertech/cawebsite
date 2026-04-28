import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  /** JSON-LD object or array of objects. */
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  /** Path only, e.g. "/" or "/contact" — used with window.location.origin for canonical */
  path?: string;
};

export default function Seo({ title, description, keywords, jsonLd, path = '/' }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', description);

    if (keywords) {
      const kwMeta = document.querySelector('meta[name="keywords"]');
      if (kwMeta) kwMeta.setAttribute('content', keywords);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    if (!origin) return;

    const canonicalHref = `${origin}${path === '/' ? '' : path}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalHref;

    let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalHref);

    const scriptId = 'page-jsonld';
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, jsonLd, path]);

  return null;
}
