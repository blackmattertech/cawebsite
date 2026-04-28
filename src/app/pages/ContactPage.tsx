import { Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import FloatingContactButtons from '../components/FloatingContactButtons';
import { BRAND_GREEN } from '../constants/brand';
import {
  CONTACT_ADDRESS_LINE,
  CONTACT_EMAIL,
  CONTACT_MAP_EMBED_SRC,
  CONTACT_PHONE_DISPLAY,
  contactMailtoHref,
  contactTelHref,
  contactWhatsAppHref,
} from '../constants/contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-12">
            <p className="text-sm font-medium uppercase tracking-wider" style={{ color: BRAND_GREEN }}>
              Get in touch
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl">
              Contact us
            </h1>
            <p className="mt-3 max-w-2xl text-base text-neutral-600 sm:text-lg">
              Visit our Bengaluru office, call, email, or message us on WhatsApp—we will get back to you as soon as we can.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
            <div className="relative min-h-[300px] h-full w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-md sm:min-h-[380px]">
              <iframe
                src={CONTACT_MAP_EMBED_SRC}
                title="Shivanichchi & Co. office location on Google Maps"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex min-h-[300px] h-full flex-col sm:min-h-[380px]">
              <section className="flex h-full min-h-0 flex-col rounded-2xl border border-neutral-200 bg-[#F7F9FC] p-6 sm:p-8">
                <div>
                  <h2 className="text-lg font-semibold text-[#0B1F3A] sm:text-xl">Office</h2>
                  <p className="mt-1 text-sm text-neutral-600">Shivanichchi & Co., Chartered Accountants</p>
                </div>
                <ul className="mt-6 flex-1 space-y-5">
                  <li className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100">
                      <MapPin className="h-5 w-5" style={{ color: BRAND_GREEN }} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Address</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-800 sm:text-base">
                        {CONTACT_ADDRESS_LINE}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100">
                      <Phone className="h-5 w-5" style={{ color: BRAND_GREEN }} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Phone</p>
                      <a
                        href={contactTelHref()}
                        className="mt-1 block text-sm font-medium text-[#0B6EB0] hover:underline sm:text-base"
                      >
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                      <a
                        href={contactWhatsAppHref()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm text-neutral-600 underline decoration-neutral-300 underline-offset-2 hover:text-[#0B6EB0]"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100">
                      <Mail className="h-5 w-5" style={{ color: BRAND_GREEN }} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Email</p>
                      <a
                        href={contactMailtoHref()}
                        className="mt-1 block text-sm font-medium text-[#0B6EB0] break-all hover:underline sm:text-base"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <FloatingContactButtons />
    </div>
  );
}
