import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  /** Path only, e.g. "/" or "/contact" — used with window.location.origin for canonical */
  path?: string;
};

export default function Seo({ title, description, path = '/' }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', description);

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
  }, [title, description, path]);

  return null;
}
