import { FileText, CheckCircle, Calculator, FileCheck, Briefcase, PieChart } from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Taxation',
    description: 'Comprehensive tax planning and filing services to minimize your tax liability while ensuring full compliance.',
    color: '#2BB673'
  },
  {
    icon: CheckCircle,
    title: 'Audit & Assurance',
    description: 'Independent audit services providing credibility and confidence to your financial statements.',
    color: '#4A90E2'
  },
  {
    icon: FileText,
    title: 'GST Consulting',
    description: 'Expert GST registration, filing, and advisory services to navigate complex indirect tax regulations.',
    color: '#2BB673'
  },
  {
    icon: FileCheck,
    title: 'Compliance',
    description: 'Stay compliant with regulatory requirements through our comprehensive compliance management services.',
    color: '#4A90E2'
  },
  {
    icon: Briefcase,
    title: 'Business Advisory',
    description: 'Strategic business consulting to help you make informed decisions and achieve sustainable growth.',
    color: '#2BB673'
  },
  {
    icon: PieChart,
    title: 'Financial Planning',
    description: 'Tailored financial planning solutions to help you achieve your long-term business objectives.',
    color: '#4A90E2'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="text-[#2BB673] tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium">OUR SERVICES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mt-3 sm:mt-4 leading-tight">
            Comprehensive Solutions for Your Business
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A]/70 mt-4 sm:mt-6">
            From taxation to business strategy, we provide end-to-end financial services tailored to your unique needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-[#2BB673]/20 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: service.color }} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A] mb-2 sm:mb-3 group-hover:text-[#4A90E2] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-4 sm:mt-6 text-[#2BB673] font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base">
                  Learn More
                  <span className="text-base sm:text-lg">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
