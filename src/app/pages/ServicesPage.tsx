import { useEffect, useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';
import Seo from '../components/Seo';
import { BRAND_GREEN } from '../constants/brand';
import { PREMIUM_SERVICES } from '../constants/services';
import ServicePremiumCard from '../components/ServicePremiumCard';

function normalizeServiceTitle(title: string) {
  return title.trim().toLowerCase();
}

function readServiceQuery(search: string) {
  const params = new URLSearchParams(search);
  const value = params.get('service');
  return value ? value.trim() : '';
}

export default function ServicesPage() {
  const location = useLocation();
  const pills = useMemo(() => ['All', ...PREMIUM_SERVICES.map((s) => s.title)], []);
  const [active, setActive] = useState<string>('All');

  useEffect(() => {
    const q = readServiceQuery(location.search);
    if (!q) {
      setActive('All');
      return;
    }

    const match = pills.find((p) => normalizeServiceTitle(p) === normalizeServiceTitle(q));
    setActive(match ?? 'All');
  }, [location.search, pills]);

  const filtered = useMemo(() => {
    if (active === 'All') return PREMIUM_SERVICES;
    return PREMIUM_SERVICES.filter((s) => s.title === active);
  }, [active]);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <Seo
        title="Services | Shivanichchi & Co. Chartered Accountants"
        description="Explore our CA services: company registration, GST filing, income tax, ROC compliance, accounting, payroll, and more."
        path="/services"
      />
      <Navbar />

      <main id="main-content" className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider" style={{ color: BRAND_GREEN }}>
              Our services
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl">
              Services that keep your business compliant and growth-ready
            </h1>
            <p className="mt-3 text-base text-neutral-600 sm:text-lg">
              Pick a service to filter. Clicking “Explore Services” from the home page will open this page with the
              right filter already applied.
            </p>
          </header>

          <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3">
            {pills.map((label) => {
              const selected = label === active;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActive(label)}
                  className={[
                    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition',
                    'backdrop-blur-md',
                    'border',
                    selected
                      ? 'text-white shadow-md'
                      : 'text-[#0B1F3A] hover:shadow-sm',
                  ].join(' ')}
                  style={{
                    background: selected
                      ? 'linear-gradient(135deg, rgba(30,58,138,0.95), rgba(22,163,74,0.95))'
                      : 'rgba(255,255,255,0.55)',
                    borderColor: selected ? 'rgba(255,255,255,0.22)' : 'rgba(15,23,42,0.12)',
                    boxShadow: selected ? '0 10px 24px rgba(15, 23, 42, 0.14)' : undefined,
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <section className="mt-10">
            <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {filtered.map((service) => (
                <li key={service.title} className="h-full">
                  <ServicePremiumCard icon={service.icon} title={service.title} description={service.description} />
                </li>
              ))}
            </ul>
          </section>

          <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-neutral-200 bg-[#F7F9FC] p-6 text-center shadow-sm sm:mt-16 sm:p-8">
            <p className="text-lg font-semibold text-[#0B1F3A] sm:text-xl">Not sure what you need?</p>
            <p className="mt-2 text-sm text-neutral-600 sm:text-base">
              Share your requirement and we’ll suggest the best approach.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: BRAND_GREEN }}
            >
              Free consultation
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingContactButtons />

      <style>
        {`
          /* Subtle “glass” background behind pill row */
          main {
            background:
              radial-gradient(800px circle at 20% 0%, rgba(30,58,138,0.06), transparent 55%),
              radial-gradient(800px circle at 80% 10%, rgba(22,163,74,0.05), transparent 55%);
          }
        `}
      </style>
    </div>
  );
}

