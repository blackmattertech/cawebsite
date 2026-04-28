import { Link } from 'react-router';
import {
  Lightbulb,
  CheckCircle,
  Building2,
  Scale,
  Rocket,
} from 'lucide-react';
import ServicePremiumCard from './ServicePremiumCard';
import ConvixVideoBackdrop from './ConvixVideoBackdrop';
import { PREMIUM_SERVICES } from '../constants/services';

/** Add matching files under public/images/helpcard1.png … helpcard4.png */
const helpYouCards = [
  {
    icon: Lightbulb,
    title: 'Ideation & Incorporations',
    description:
      'We shape your ideas and help you set up your dream venture—register a company or establish a subsidiary in India along with applicable statutory registrations.',
    hoverImage: '/images/helpcard1.png',
  },
  {
    icon: Scale,
    title: 'Tax & Regulatory',
    description:
      'End-to-end tax planning, GST, and regulatory compliance so you meet every obligation with clarity and confidence.',
    hoverImage: '/images/helpcard2.png',
  },
  {
    icon: CheckCircle,
    title: 'Audit & Assurance',
    description:
      'Independent audit and assurance services that add credibility to your financial statements and support stakeholder trust.',
    hoverImage: '/images/helpcard3.png',
  },
  {
    icon: Building2,
    title: 'Growth & Advisory',
    description:
      'Strategic advice on structuring, performance, and expansion—so you can scale with sound financial decisions.',
    hoverImage: '/images/helpcard4.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      {/* Featured “how we help” row */}
      <div className="bg-[#0B1F3A] py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            How can we help you?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {helpYouCards.map(({ icon: Icon, title, description, hoverImage }) => (
              <div key={title} className="help-card-frame group h-full">
                <div className="help-card-inner">
                  <div className="relative z-[2] flex h-full flex-col items-center px-5 py-8 text-center transition-opacity duration-300 ease-out group-hover:pointer-events-none group-hover:opacity-0 sm:px-6 sm:py-9">
                    <Icon
                      className="h-10 w-10 shrink-0 text-[#0B1F3A] sm:h-11 sm:w-11"
                      strokeWidth={1.35}
                      aria-hidden
                    />
                    <h3 className="mt-5 text-base font-bold leading-snug text-[#0B1F3A] sm:text-lg">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/80 sm:text-[0.9375rem]">{description}</p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                    <img
                      src={hoverImage}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full origin-center scale-[1.22] object-cover object-center motion-safe:transition-transform motion-safe:duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium CA services — full-bleed video (no frame / no rounded corners) */}
      <div
        className="relative min-h-screen w-full overflow-hidden bg-[#d9d9d9] font-sans"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        <ConvixVideoBackdrop videoClassName="opacity-90" />

        <div className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <header className="mx-auto max-w-5xl text-center">
              <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#003d82] drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                Comprehensive CA Services for Modern Businesses
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] sm:mt-6 sm:text-lg">
                From company registration to tax compliance, we simplify legal, financial, and regulatory processes so
                you can focus on growth.
              </p>
            </header>

            <ul className="mt-12 grid list-none grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3" role="list">
              {PREMIUM_SERVICES.map((service) => (
                <li key={service.title} className="h-full">
                  <ServicePremiumCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-14 max-w-xl rounded-3xl border border-white/15 bg-black/25 p-6 text-center text-white shadow-lg shadow-black/20 backdrop-blur-md sm:mt-16 sm:p-8">
              <p className="text-lg font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] sm:text-xl">
                Need help choosing the right service?
              </p>
              <Link
                to="/contact"
                className="group mt-6 inline-flex min-w-[240px] items-center justify-center rounded-[16px] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-[1.3em] py-[0.8em] text-[17px] font-medium tracking-[0.05em] text-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <Rocket
                  className="mr-[3px] h-6 w-6 text-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] rotate-[30deg] group-hover:translate-x-[5px] group-hover:rotate-90"
                  strokeWidth={2.25}
                  aria-hidden
                />
                <span className="whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[7px]">
                  Talk to an Expert
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
