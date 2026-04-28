import { motion, MotionConfig } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock,
  HeadphonesIcon,
  Lock,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

type WhyCard = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  extra: string;
};

const CARDS: WhyCard[] = [
  {
    icon: BadgeCheck,
    title: 'Expert CA & Compliance Team',
    description:
      'Work with experienced Chartered Accountants specializing in GST registration, income tax filing, ROC compliance, and business advisory services.',
    extra: '500+ businesses served',
  },
  {
    icon: Rocket,
    title: 'Startup & Business Focused Solutions',
    description:
      'We help startups and MSMEs with company registration, tax planning, and financial structuring to scale efficiently.',
    extra: 'Startup-friendly approach',
  },
  {
    icon: Clock,
    title: '100% Timely Filing & Compliance',
    description:
      'Never miss deadlines with timely GST returns, ITR filing, and ROC compliance handled by experts.',
    extra: '99% on-time filing rate',
  },
  {
    icon: Lock,
    title: 'Data Security & Confidentiality',
    description:
      'Your financial data is protected with strict security protocols and professional confidentiality standards.',
    extra: 'Secure & encrypted systems',
  },
  {
    icon: TrendingUp,
    title: 'Result-Oriented Financial Advisory',
    description:
      'We help reduce taxes, improve cash flow, and increase profitability with strategic financial planning.',
    extra: 'Focus on measurable outcomes',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated CA Support',
    description:
      'Get expert CA consultation for tax queries, notices, and financial decisions whenever you need it.',
    extra: 'Quick response support',
  },
];

function WhyChooseCard({ icon: Icon, title, description, extra, index }: WhyCard & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03 }}
      className="group relative h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-[#16A34A]/20 hover:shadow-xl"
    >
      <div
        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{
          background:
            'linear-gradient(135deg, rgba(30,58,138,0.10) 0%, rgba(22,163,74,0.10) 55%, rgba(30,58,138,0.06) 100%)',
        }}
        aria-hidden
      >
        <Icon
          className="h-6 w-6 text-[#1E3A8A] transition-transform duration-300 group-hover:rotate-[6deg]"
          strokeWidth={1.8}
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-[#16A34A] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {extra}
        </p>
      </div>

      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at 30% 20%, rgba(30,58,138,0.12), transparent 55%), radial-gradient(420px circle at 70% 80%, rgba(22,163,74,0.12), transparent 55%)',
        }}
        aria-hidden
      />
    </motion.article>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="resources"
      className="scroll-mt-24 bg-gradient-to-b from-white to-[#f8fbff] py-20"
      aria-label="Why choose us"
    >
      <MotionConfig reducedMotion="user">
        <div className="relative">
          {/* Subtle premium blobs */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.16), transparent 60%)' }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(22,163,74,0.14), transparent 60%)' }}
            aria-hidden
          />

          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <motion.header
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl font-extrabold leading-tight text-[#003d82] sm:text-4xl lg:text-5xl">
                Why Choose Our Chartered Accountant Services in India
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                We provide reliable, compliant, and growth-focused CA services including GST filing, company
                registration, income tax, and business compliance for startups and businesses across India.
              </p>
            </motion.header>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {CARDS.map((c, idx) => (
                <WhyChooseCard key={c.title} {...c} index={idx} />
              ))}
            </div>

            {/* SEO paragraph */}
            <p className="mx-auto mt-10 max-w-5xl text-center text-sm leading-relaxed text-gray-600 sm:text-base">
              We are a trusted Chartered Accountant firm in India offering GST registration, income tax filing, company
              registration, ROC compliance, and accounting services. Our expert team supports startups, small
              businesses, and enterprises with reliable and cost-effective financial solutions.
            </p>

            {/* CTA */}
            <div className="mx-auto mt-12 max-w-3xl text-center">
              <p className="text-xl font-semibold text-gray-900">Need expert guidance for your business?</p>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#1E3A8A] to-[#16A34A] px-6 py-3 text-base font-semibold text-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#16A34A]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
              >
                Talk to a CA Expert
              </a>
            </div>
          </div>
        </div>
      </MotionConfig>
    </section>
  );
}
