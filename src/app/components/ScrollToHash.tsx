import { useEffect } from 'react';
import { useLocation } from 'react-router';

/** Fixed navbar is h-20 (80px); extra gap so headings are not clipped */
const SCROLL_OFFSET_PX = 96;

/**
 * React Router client navigation does not scroll to hash targets like a normal
 * browser navigation. When pathname is home and the hash changes, scroll the
 * matching element into view with offset for the fixed header.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== '/') return;
    if (!hash || hash === '#') {
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    if (!id) return;

    let cancelled = false;
    const run = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET_PX;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    };

    run();
    const raf = window.requestAnimationFrame(run);
    const t0 = window.setTimeout(run, 0);
    const t150 = window.setTimeout(run, 150);
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(raf);
      window.clearTimeout(t0);
      window.clearTimeout(t150);
    };
  }, [pathname, hash]);

  return null;
}
