import { useEffect } from 'react';
import {
  CONTACT_ADDRESS_LINE,
  CONTACT_EMAIL,
  CONTACT_PHONE_DIGITS,
} from '../constants/contact';

const SCRIPT_ATTR = 'data-jsonld-home';

/**
 * LocalBusiness / AccountingService structured data for Google rich results.
 */
export default function HomeJsonLd() {
  useEffect(() => {
    const origin = window.location.origin;
    const payload = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['LocalBusiness', 'AccountingService'],
          '@id': `${origin}/#localbusiness`,
          name: 'Shivanichchi & Co.',
          legalName: 'Shivanichchi & Co.',
          description:
            'Chartered accountants in Bengaluru offering taxation, audit and assurance, GST consulting, compliance, and business advisory.',
          url: origin,
          telephone: `+${CONTACT_PHONE_DIGITS}`,
          email: CONTACT_EMAIL,
          address: {
            '@type': 'PostalAddress',
            streetAddress: CONTACT_ADDRESS_LINE,
            addressLocality: 'Bengaluru',
            addressRegion: 'Karnataka',
            postalCode: '560086',
            addressCountry: 'IN',
          },
          priceRange: '$$',
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute(SCRIPT_ATTR, '');
    script.textContent = JSON.stringify(payload);
    document.head.appendChild(script);

    return () => {
      document.querySelectorAll(`script[${SCRIPT_ATTR}]`).forEach((el) => el.remove());
    };
  }, []);

  return null;
}
