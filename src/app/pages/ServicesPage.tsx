import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';
import Seo from '../components/Seo';
import { BRAND_GREEN } from '../constants/brand';
import { contactWhatsAppHref } from '../constants/contact';

const SERVICES = [
  {
    key: 'company-registration',
    eyebrow: 'SERVICE 1',
    title: 'Company Registration Services in India',
    subtitle: 'Register Your Business the Right Way – Pvt Ltd, LLP, OPC & More',
    videoSrc: '/videos/services/1.mp4',
    contentBg: '#ffffff',
    cta: 'Get Free Consultation',
    body: `Starting a business in India? Our Chartered Accountants guide you through the entire company incorporation process — from choosing the right legal structure to receiving your Certificate of Incorporation.`,
    bullets: [
      'Private Limited Company Registration (MCA, DSC, DIN, MOA/AOA, COI, PAN, TAN)',
      'LLP Registration (Limited Liability Partnership)',
      'One Person Company (OPC) Registration',
      'Startup India Registration & DPIIT Recognition',
      'Udyam / MSME Registration',
      'Section 8 Company (NGO / Non-Profit)',
      'Sole Proprietorship Setup',
    ],
    why: `Incorrect entity selection or DIY filing errors can cause MCA rejections and compliance penalties. Our experts ensure error-free registration with the right shareholding structure, authorized capital, and object clauses from Day 1.`,
  },
  {
    key: 'gst',
    eyebrow: 'SERVICE 2',
    title: 'GST Registration & Filing Services',
    subtitle: 'End-to-End GST Compliance for Businesses Across India',
    videoSrc: '/videos/services/2.mp4',
    contentBg: '#e8f4fc',
    cta: 'Talk to a GST Expert',
    body: `Goods and Services Tax (GST) compliance is mandatory for businesses crossing the prescribed turnover threshold. Our CA team handles everything — from initial registration to monthly/quarterly filings and notice resolution.`,
    bullets: [
      'New GST Registration (regular, composition, voluntary)',
      'GSTR-1, GSTR-3B, GSTR-9 & GSTR-9C filing',
      'GST Annual Return & Reconciliation',
      'GST Amendments & Cancellation',
      'Input Tax Credit (ITC) reconciliation',
      'GST Notice & Demand Handling',
      'E-invoicing & E-way Bill compliance',
      'GST refund applications',
    ],
    why: `Late or incorrect GST filings attract interest at 18% p.a. and penalties. Our compliance calendar ensures zero missed deadlines and maximum ITC utilization.`,
  },
  {
    key: 'income-tax',
    eyebrow: 'SERVICE 3',
    title: 'Income Tax & ITR Filing Services',
    subtitle: 'Accurate, Timely Income Tax Returns for Individuals, Startups & Businesses',
    videoSrc: '/videos/services/3.mp4',
    contentBg: '#ffffff',
    cta: 'File My ITR Now',
    body: `Income tax compliance is not just about filing a return — it's about strategic planning to minimize your tax liability legally. Our CAs file ITRs for salaried individuals, freelancers, businesses, LLPs, and companies while ensuring maximum deductions and zero errors.`,
    bullets: [
      'ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, ITR-6 & ITR-7 filing',
      'Advance tax computation and payment',
      'Tax planning under Sections 80C, 80D, HRA, LTA',
      'Capital gains tax computation (property, stocks, mutual funds)',
      'TDS return filing (Form 24Q, 26Q, 27Q)',
      'Income tax notice & scrutiny handling',
      'Form 15CA/15CB for foreign remittances',
      'Tax audit under Section 44AB',
    ],
    why: `Missed ITR deadlines attract penalty up to ₹10,000 + interest under Section 234. Our proactive tax planning can legally reduce your tax outgo by thousands every year.`,
  },
  {
    key: 'trademark',
    eyebrow: 'SERVICE 4',
    title: 'Trademark & IP Protection Services',
    subtitle: 'Protect Your Brand Identity with Expert Trademark Registration & Copyright Services',
    videoSrc: '/videos/services/4.mp4',
    contentBg: '#e8f4fc',
    cta: 'Protect My Brand Today',
    body: `Your brand name, logo, and creative work are valuable assets. Our IP team helps you register and defend your intellectual property rights under Indian law — ensuring no one can legally copy or misuse your brand.`,
    bullets: [
      'Trademark Search & Registration (TM-A filing)',
      'Trademark Renewal & Restoration',
      'Trademark Objection Reply & Hearing Representation',
      'Copyright Registration (creative works, software, content)',
      'Patent Filing Assistance',
      'Design Registration',
      'Trademark Watch & Monitoring Services',
      'IP Assignment & Licensing Agreements',
    ],
    why: `An unregistered trademark gives you no legal protection. Once registered under the Trade Marks Act 1999, you get exclusive rights for 10 years (renewable) and the legal power to stop infringers.`,
  },
  {
    key: 'roc',
    eyebrow: 'SERVICE 5',
    title: 'MCA & ROC Compliance Services',
    subtitle: 'Stay Legally Compliant with Ministry of Corporate Affairs Filings',
    videoSrc: '/videos/services/5.mp4',
    contentBg: '#ffffff',
    cta: 'Get Compliance Calendar',
    body: `Every registered company and LLP in India must fulfill annual and event-based compliance requirements with the Registrar of Companies (ROC). Non-compliance attracts heavy penalties and director disqualification. Our team ensures you never miss a deadline.`,
    bullets: [
      'Annual ROC Filing (AOC-4, MGT-7 / MGT-7A)',
      'Director KYC (DIR-3 KYC) — Annual',
      'Appointment & Resignation of Directors (DIR-12)',
      'Increase in Authorized Share Capital (SH-7)',
      'Allotment of Shares (PAS-3)',
      'Registered Office Change (INC-22)',
      'Satisfaction & Creation of Charges (CHG-1, CHG-4)',
      'Winding Up & Strike Off (STK-2)',
      'LLP Annual Return (Form 11) & Statement of Accounts (Form 8)',
      'Board Meeting & AGM Compliance',
    ],
    why: `Failure to file ROC returns can result in penalties of ₹200/day per form, director disqualification under Section 164, and company strike-off by MCA. Stay protected with our compliance calendar.`,
  },
  {
    key: 'accounting-payroll',
    eyebrow: 'SERVICE 6',
    title: 'Accounting & Payroll Services',
    subtitle: 'End-to-End Bookkeeping, Payroll Processing & Financial Management for Growing Businesses',
    videoSrc: '/videos/services/6.mp4',
    contentBg: '#e8f4fc',
    cta: 'Outsource My Accounting',
    body: `Accurate books are the backbone of every successful business. Our outsourced accounting and payroll services let you focus on growth while we manage the numbers — from daily bookkeeping to monthly MIS reports, salary processing, and statutory compliance.`,
    bullets: [
      'Monthly/Quarterly Bookkeeping (Tally, QuickBooks, Zoho)',
      'Bank Reconciliation & Accounts Payable/Receivable Management',
      'Payroll Processing (salary slips, CTC structuring)',
      'PF Registration & Monthly ECR Filing',
      'ESI Registration & Monthly Filing',
      'Professional Tax (PT) Registration & Filing',
      'TDS Deduction, Deposit & Return Filing',
      'Monthly MIS & P&L Reports',
      'Year-End Financial Statement Preparation',
    ],
    why: `Unorganized books lead to wrong GST claims, missed TDS deadlines, and messy audits. Our real-time bookkeeping keeps your financials clean, tax-ready, and investor-friendly.`,
  },
  {
    key: 'licenses',
    eyebrow: 'SERVICE 7',
    title: 'Business Licenses & Registrations',
    subtitle: 'Obtain FSSAI, IEC, ISO, Shop Act & All Essential Business Licenses Quickly',
    videoSrc: '/videos/services/7.mp4',
    contentBg: '#ffffff',
    cta: 'Check My License Requirements',
    body: `Operating without the required licenses can result in heavy fines, business closure, or criminal liability. Our team identifies which licenses apply to your business and obtains them efficiently — so you can operate legally and confidently.`,
    bullets: [
      'FSSAI Registration & License (Basic, State, Central)',
      'Import Export Code (IEC) Registration',
      'ISO Certification Facilitation (9001, 14001, 27001)',
      'Shop & Establishment Act Registration',
      'Professional Tax Registration',
      'Drug License (retail & wholesale)',
      'PSARA License (security agencies)',
      'Factory License & Fire NOC Assistance',
      'Labour Law Registrations (Contract Labour, CLRA)',
      'MSME / Udyam Re-registration',
    ],
    why: `Every industry has specific licensing requirements under central and state law. Non-compliance risks raids, penalties, and reputational damage. We map the exact licenses you need and handle the entire application process.`,
  },
] as const;

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
  const [active, setActive] = useState<string>('All');

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (nodes.length === 0) return;

    // Re-attach on filter changes because filtered sections mount after initial load.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = 'true';
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [active]);

  const firmName = 'Shivanichchi & Co.';
  const pageTitle = `CA Services in India | GST, ITR, Company Registration, Trademark & More – ${firmName}`;
  const pageDescription =
    'Expert Chartered Accountant services in India — company registration, GST filing, income tax, trademark, ROC compliance, accounting, payroll & business licenses. Trusted by 1000+ businesses.';
  const pageKeywords =
    'CA services India, GST registration India, GST return filing, ITR filing India, company registration India, private limited company registration, LLP registration, OPC registration, trademark registration India, ROC compliance India, outsourced accounting India, payroll processing India, business license India, FSSAI registration India, IEC registration, ISO certification India';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        name: firmName,
        url: typeof window !== 'undefined' ? `${window.location.origin}/services` : '/services',
        telephone: '+91 9901103901',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '# 824, 13th Cross, Mahalakshmi Layout',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          postalCode: '560086',
          addressCountry: 'IN',
        },
        areaServed: 'IN',
        serviceType: 'Chartered Accountant Services',
      },
      {
        '@type': 'ItemList',
        name: 'Our Services',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Company Registration Services' },
          { '@type': 'ListItem', position: 2, name: 'GST Registration & Filing' },
          { '@type': 'ListItem', position: 3, name: 'Income Tax & ITR Filing' },
          { '@type': 'ListItem', position: 4, name: 'Trademark & IP Protection' },
          { '@type': 'ListItem', position: 5, name: 'MCA & ROC Compliance' },
          { '@type': 'ListItem', position: 6, name: 'Accounting & Payroll Services' },
          { '@type': 'ListItem', position: 7, name: 'Business Licenses & Registrations' },
        ],
      },
    ],
  } as const;

  const services = SERVICES;

  const pills = useMemo(() => ['All', ...services.map((s) => s.title)], []);

  useEffect(() => {
    const q = readServiceQuery(location.search);
    if (!q) {
      setActive('All');
      return;
    }
    const match = pills.find((p) => normalizeServiceTitle(p) === normalizeServiceTitle(q));
    setActive(match ?? 'All');
  }, [location.search, pills]);

  useEffect(() => {
    if (active === 'All') return;
    const match = services.find((s) => s.title === active);
    if (!match) return;
    requestAnimationFrame(() => {
      document.getElementById(match.key)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [active, services]);

  const filteredServices = useMemo(() => {
    if (active === 'All') return services;
    return services.filter((s) => s.title === active);
  }, [active, services]);

  return (
    <div
      className="min-h-screen text-[#0d2b4e]"
      style={{
        backgroundColor: '#f4f8fc',
        fontFamily: 'DM Sans, system-ui, -apple-system, Segoe UI, sans-serif',
      }}
    >
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        jsonLd={jsonLd}
        path="/services"
      />
      <Navbar />

      <main id="main-content" className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-4xl text-center">
            <h1
              className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl"
              style={{ color: '#0d2b4e' }}
            >
              OUR SERVICES
            </h1>
            <p
              className="mx-auto mt-4 max-w-2xl text-base sm:text-lg"
              style={{ color: '#335f8a' }}
            >
              Trusted CA-managed compliance, tax, and advisory services for individuals, startups, and growing
              businesses across India.
            </p>
          </header>

          <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-3">
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
                    selected ? 'text-white shadow-md' : 'text-[#0d2b4e] hover:shadow-sm',
                  ].join(' ')}
                  style={{
                    background: selected
                      ? 'linear-gradient(135deg, rgba(13,43,78,0.96), rgba(240,165,0,0.9))'
                      : 'rgba(255,255,255,0.65)',
                    borderColor: selected ? 'rgba(255,255,255,0.22)' : 'rgba(13,43,78,0.12)',
                    boxShadow: selected ? '0 10px 24px rgba(13, 43, 78, 0.16)' : undefined,
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-12 space-y-8 sm:mt-16 sm:space-y-10">
          {filteredServices.map((service, idx) => {
            const even = idx % 2 === 1;
            return (
              <section
                key={service.key}
                id={service.key}
                className="relative w-screen"
                style={{
                  left: '50%',
                  right: '50%',
                  marginLeft: '-50vw',
                  marginRight: '-50vw',
                }}
              >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div
                    data-reveal
                    data-visible="false"
                    className={[
                      'flex min-h-[420px] overflow-hidden rounded-3xl border border-[#bcd8f0]/70 bg-white/40 shadow-sm',
                      'transition duration-700 ease-out',
                      'opacity-0 translate-y-6',
                      even ? 'md:flex-row-reverse' : 'md:flex-row',
                      'flex-col',
                    ].join(' ')}
                  >
                    <div className="video-placeholder relative flex w-full items-center justify-center bg-[#0d2b4e] md:w-[35%]">
                      <video
                        className="h-full w-full object-cover"
                        src={service.videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    </div>

                    <div
                      className={[
                        'w-full md:w-[65%]',
                        'p-6 sm:p-7 lg:p-8',
                        'transition duration-300',
                        'hover:-translate-y-1 hover:shadow-lg',
                      ].join(' ')}
                      style={{
                        backgroundColor: service.contentBg,
                      }}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#335f8a' }}>
                        {service.eyebrow}
                      </p>
                      <h2
                        className="mt-2 text-2xl font-bold sm:text-3xl"
                        style={{ color: '#0d2b4e' }}
                      >
                        {service.title}
                      </h2>
                      <h3 className="mt-2 text-base font-semibold sm:text-lg" style={{ color: '#335f8a' }}>
                        {service.subtitle}
                      </h3>

                      <div className="mt-5 overflow-hidden rounded-3xl border border-[#bcd8f0]/70 bg-white/60">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="p-4 sm:p-5">
                            <p className="text-sm font-bold" style={{ color: '#0d2b4e' }}>
                              Overview
                            </p>
                            <p className="mt-2 text-sm leading-6" style={{ color: '#335f8a' }}>
                              {service.body}
                            </p>
                          </div>

                          <div className="border-t border-[#bcd8f0]/70 p-4 sm:p-5 md:border-l md:border-t-0">
                            <p className="text-sm font-bold" style={{ color: '#0d2b4e' }}>
                              We handle
                            </p>
                            <ul className="mt-3 space-y-2 text-sm" style={{ color: '#0d2b4e' }}>
                              {service.bullets.slice(0, 4).map((b) => (
                                <li key={b} className="flex gap-3">
                                  <span
                                    className="mt-1 inline-block h-2 w-2 flex-none rounded-full"
                                    style={{ backgroundColor: '#f0a500' }}
                                  />
                                  <span className="leading-6">{b}</span>
                                </li>
                              ))}
                            </ul>
                            {service.bullets.length > 4 ? (
                              <p className="mt-3 text-xs font-semibold" style={{ color: '#335f8a' }}>
                                + {service.bullets.length - 4} more
                              </p>
                            ) : null}
                          </div>

                          <div className="border-t border-[#bcd8f0]/70 p-4 sm:p-5">
                            <p className="text-sm font-bold" style={{ color: '#0d2b4e' }}>
                              Why it matters
                            </p>
                            <p className="mt-2 text-sm leading-6" style={{ color: '#335f8a' }}>
                              {service.why}
                            </p>
                          </div>

                          <div className="border-t border-[#bcd8f0]/70 p-4 sm:p-5 md:border-l">
                            <p className="text-sm font-bold" style={{ color: '#0d2b4e' }}>
                              Next step
                            </p>
                            <p className="mt-2 text-sm leading-6" style={{ color: '#335f8a' }}>
                              Share your requirement and we’ll suggest the best approach for your situation.
                            </p>
                            <div className="mt-4 flex flex-wrap items-center gap-3">
                              <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold shadow-sm transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                style={{ backgroundColor: '#f0a500', color: '#0d2b4e', outlineColor: '#f0a500' }}
                              >
                                {service.cta}
                              </Link>
                              <a
                                href="#ready"
                                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition hover:bg-[#e8f4fc]"
                                style={{ color: '#335f8a' }}
                              >
                                See next services
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </section>

        <section id="ready" className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            data-reveal
            data-visible="false"
            className="rounded-3xl border border-[#bcd8f0]/70 bg-white/70 p-8 text-center shadow-sm transition duration-700 ease-out opacity-0 translate-y-6 sm:p-10"
          >
            <p
              className="text-3xl font-bold sm:text-4xl"
              style={{ color: '#0d2b4e' }}
            >
              Ready to Get Started?
            </p>
            <p
              className="mx-auto mt-3 max-w-2xl text-base sm:text-lg"
              style={{ color: '#335f8a' }}
            >
              Book a free 30-minute consultation with our CA experts. No obligations, just clarity.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-bold shadow-sm transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
                style={{ backgroundColor: '#f0a500', color: '#0d2b4e', outlineColor: '#f0a500' }}
              >
                Book Free Call
              </Link>
              <a
                href={contactWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-bold text-white shadow-sm transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
                style={{ backgroundColor: '#25D366', outlineColor: '#25D366' }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactButtons />

      <style>
        {`
          main {
            background:
              radial-gradient(800px circle at 20% 0%, rgba(30,58,138,0.06), transparent 55%),
              radial-gradient(800px circle at 80% 10%, rgba(22,163,74,0.05), transparent 55%);
          }
          [data-reveal][data-visible="true"] {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>
    </div>
  );
}

