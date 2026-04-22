import { Factory, Rocket, ShoppingBag, Building2 } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Specialized services for production and industrial businesses'
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Support for emerging businesses and entrepreneurs'
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    description: 'Comprehensive solutions for retail and e-commerce'
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Expert guidance for property and construction sectors'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="text-[#2BB673] tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium">INDUSTRIES WE SERVE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mt-3 sm:mt-4 leading-tight">
            Expertise Across Multiple Sectors
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A]/70 mt-4 sm:mt-6">
            Deep industry knowledge combined with technical expertise to serve your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F7F9FC] to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#4A90E2]/30 transition-all duration-300 group cursor-pointer hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#4A90E2] to-[#2BB673] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-base sm:text-xl font-bold text-[#0B1F3A] mb-2 sm:mb-3">
                  {industry.title}
                </h3>

                <p className="text-xs sm:text-base text-[#1A1A1A]/70">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
