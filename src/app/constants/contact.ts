/** Country code + number, digits only (no +). Used for wa.me and tel: links. */
export const CONTACT_PHONE_DIGITS = '919901103901';

/** Human-readable line in UI */
export const CONTACT_PHONE_DISPLAY = '+91 9901103901';

export const CONTACT_EMAIL = 'shivanichchiashok@gmail.com';

export const CONTACT_ADDRESS_LINE =
  '# 824, 13th Cross, Mahalakshmi Layout, Bengaluru - 560 086.';

/** Google Maps embed (office location). */
export const CONTACT_MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.438688613488!2d77.5470266!3d13.007712399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d13bb25994d%3A0x5933a73df87750cb!2sShivanichchi%20and%20Co!5e0!3m2!1sen!2sin!4v1776939095307!5m2!1sen!2sin';

export function contactMailtoHref(): string {
  return `mailto:${CONTACT_EMAIL}`;
}

export function contactTelHref(): string {
  return `tel:+${CONTACT_PHONE_DIGITS}`;
}

export function contactWhatsAppHref(): string {
  const message = 'Hello, we are looking for CA services, can we get in touch';
  return `https://wa.me/${CONTACT_PHONE_DIGITS}?text=${encodeURIComponent(message)}`;
}
