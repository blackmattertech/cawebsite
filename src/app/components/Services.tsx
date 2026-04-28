import {
  Lightbulb,
  FileText,
  FileCheck,
  CheckCircle,
  Calculator,
  Briefcase,
  PieChart,
  Building2,
  Scale,
} from 'lucide-react';

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

const services = [
  {
    icon: Calculator,
    title: 'Taxation',
    description:
      'Comprehensive tax planning and filing services to minimize your tax liability while ensuring full compliance.',
    color: '#2BB673',
  },
  {
    icon: CheckCircle,
    title: 'Audit & Assurance',
    description: 'Independent audit services providing credibility and confidence to your financial statements.',
    color: '#4A90E2',
  },
  {
    icon: FileText,
    title: 'GST Consulting',
    description:
      'Expert GST registration, filing, and advisory services to navigate complex indirect tax regulations.',
    color: '#2BB673',
  },
  {
    icon: FileCheck,
    title: 'Compliance',
    description:
      'Stay compliant with regulatory requirements through our comprehensive compliance management services.',
    color: '#4A90E2',
  },
  {
    icon: Briefcase,
    title: 'Business Advisory',
    description:
      'Strategic business consulting to help you make informed decisions and achieve sustainable growth.',
    color: '#2BB673',
  },
  {
    icon: PieChart,
    title: 'Financial Planning',
    description:
      'Tailored financial planning solutions to help you achieve your long-term business objectives.',
    color: '#4A90E2',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F7F9FC]">
      {/* Featured “how we help” row — navy band, reference layout */}
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
                      className="h-full w-full origin-center object-cover object-center scale-[1.22] motion-safe:transition-transform motion-safe:duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-16">
            <span className="text-xs font-medium tracking-[0.15em] text-[#2BB673] sm:text-sm sm:tracking-[0.2em]">
              OUR SERVICES
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0B1F3A] sm:mt-4 sm:text-4xl lg:text-5xl">
              Comprehensive Solutions for Your Business
            </h2>
            <p className="mt-4 text-base text-[#1A1A1A]/70 sm:mt-6 sm:text-lg">
              From taxation to business strategy, we provide end-to-end financial services tailored to your unique
              needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group cursor-pointer rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#2BB673]/20 hover:shadow-2xl sm:rounded-2xl sm:p-8"
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14 sm:rounded-xl"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: service.color }} />
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-[#0B1F3A] transition-colors group-hover:text-[#4A90E2] sm:mb-3 sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#1A1A1A]/70 sm:text-base">{service.description}</p>

                  <button
                    type="button"
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-[#2BB673] transition-all group-hover:gap-3 sm:mt-6 sm:text-base"
                  >
                    Learn More
                    <span className="text-base sm:text-lg">→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
