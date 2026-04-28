import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Shield, Target, TrendingUp, Users } from 'lucide-react';
import AboutTrustedPartnerBlock from './AboutTrustedPartnerBlock';
import AboutStatsBanner from './AboutStatsBanner';
import { BRAND_GREEN } from '../constants/brand';

const ABOUT_HIGHLIGHTS = [
  {
    title: 'Trusted by Hundreds',
    description: 'Proudly serving 500+ clients with professionalism and dedication.',
    Icon: Shield,
  },
  {
    title: 'Expert Professionals',
    description: 'Our team of 15+ qualified Chartered Accountants brings deep expertise.',
    Icon: Users,
  },
  {
    title: 'Client-Centric Approach',
    description: 'We focus on your goals and deliver solutions that drive real results.',
    Icon: Target,
  },
  {
    title: 'Results That Matter',
    description: '98% client retention rate reflects our commitment to excellence.',
    Icon: TrendingUp,
  },
] as const;

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-10 lg:mb-12">
          <span className="text-xs font-medium tracking-[0.15em] text-[#2BB673] sm:text-sm sm:tracking-[0.2em]">
            ABOUT OUR FIRM
          </span>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-[#0B1F3A] sm:mt-4 sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15] xl:text-5xl">
            Your Trusted Financial Partner for Growth &amp; Compliance
          </h2>
        </header>

        <div className="grid items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image */}
          <div className="relative order-2 flex min-h-[300px] flex-col lg:order-1 lg:min-h-0">
            <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-2xl shadow-2xl sm:min-h-[380px] lg:min-h-0">
              <ImageWithFallback
                src="/images/accountingservices.png"
                alt="Accounting and professional services"
                className="h-full w-full min-h-[300px] object-cover sm:min-h-[380px] lg:min-h-0"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-2xl bg-[#2BB673]/10 sm:-bottom-8 sm:-right-8 sm:h-64 sm:w-64"></div>
            <div className="pointer-events-none absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-2xl bg-[#4A90E2]/10 sm:-left-8 sm:-top-8 sm:h-64 sm:w-64"></div>
          </div>

          {/* Right - Content + highlights */}
          <div className="order-1 flex min-h-0 flex-col lg:order-2">
            <div className="grid h-full min-h-0 gap-8 lg:grid-cols-[1fr,minmax(0,320px)] lg:items-stretch lg:gap-10 xl:grid-cols-[1fr,minmax(0,340px)]">
              <div className="flex min-h-0 flex-col space-y-4 sm:space-y-5">
                <p className="text-base leading-relaxed text-[#1A1A1A]/85 sm:text-lg">
                  We help businesses stay compliant, financially structured, and growth-ready. Our team of Chartered
                  Accountants delivers end-to-end solutions across accounting, taxation, and advisory—so you can focus
                  on building your business while we handle the numbers.
                </p>

                <p className="text-sm leading-relaxed text-[#1A1A1A]/75 sm:text-base">
                  From startups to established enterprises, we bring clarity to your finances with accurate reporting,
                  proactive tax planning, and strategic insights. Our approach is simple—transparent processes, timely
                  execution, and long-term partnership.
                </p>
              </div>

              <aside className="flex h-full min-h-0 flex-col rounded-2xl border border-[#E3EEF6] bg-white p-5 shadow-sm sm:p-6">
                <p className="flex-shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-[#4A90E2]">
                  Key highlights
                </p>
                <ul
                  className="mt-5 flex flex-1 flex-col justify-between gap-5 sm:gap-6 lg:mt-5 lg:gap-4"
                  role="list"
                >
                  {ABOUT_HIGHLIGHTS.map(({ title, description, Icon }) => (
                    <li key={title} className="flex gap-4">
                      <span
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#E8F2FC] text-[#0B1F3A]"
                        aria-hidden
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-sm font-bold leading-snug text-[#0B1F3A] sm:text-base">{title}</p>
                        <p className="mt-1.5 text-xs leading-relaxed text-[#5c6570] sm:text-sm">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>

        <AboutStatsBanner />

        <AboutTrustedPartnerBlock />

        <p className="mx-auto mt-12 max-w-2xl text-center text-base text-[#1A1A1A]/80 sm:mt-16 md:mt-20">
          Let&apos;s simplify your finances and unlock better business decisions.
        </p>

        <div className="mt-6 flex flex-col items-stretch gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6">
          <Link
            to="/#services"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B1F3A] px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#4A90E2] hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" aria-hidden />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            Free consultation
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white">
              <ArrowRight className="h-5 w-5" style={{ color: BRAND_GREEN }} aria-hidden />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
