import { Award, Clock, HeadphonesIcon, Lock, Target, Users2 } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Proven Excellence',
    description: 'Award-winning team with a track record of delivering exceptional results'
  },
  {
    icon: Users2,
    title: 'Client-Centric Approach',
    description: 'Personalized solutions tailored to your unique business requirements'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Meet deadlines consistently without compromising on quality'
  },
  {
    icon: Lock,
    title: 'Confidentiality Assured',
    description: 'Strict data protection and privacy protocols for your peace of mind'
  },
  {
    icon: Target,
    title: 'Result-Oriented',
    description: 'Focus on measurable outcomes that drive your business forward'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Always available to address your concerns and queries promptly'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="text-[#2BB673] tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium">WHY CHOOSE US</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 leading-tight">
            What Sets Us Apart
          </h2>
          <p className="text-base sm:text-lg text-white/80 mt-4 sm:mt-6">
            We combine technical expertise with a genuine commitment to your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#2BB673]/30 transition-all duration-300 group hover:bg-white/10"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#2BB673]/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#2BB673]" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
