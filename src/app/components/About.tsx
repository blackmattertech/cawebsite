import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1577100078279-b3445eae827c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Professional team discussion"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-32 h-32 sm:w-64 sm:h-64 bg-[#2BB673]/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-32 h-32 sm:w-64 sm:h-64 bg-[#4A90E2]/10 rounded-2xl -z-10"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-[#2BB673] tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium">ABOUT OUR FIRM</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mt-3 sm:mt-4 leading-tight">
                Your Trusted Financial Partner
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed">
              With decades of combined experience, our firm provides comprehensive accounting, tax, and business advisory services to help you navigate complex financial landscapes with confidence.
            </p>

            <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed">
              We believe in building long-term relationships based on trust, transparency, and exceptional service. Our team of qualified Chartered Accountants brings deep industry knowledge and a commitment to excellence that sets us apart.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-[#4A90E2]">25+</div>
                <div className="text-xs sm:text-sm text-[#1A1A1A]/70">Years of Experience</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-[#4A90E2]">500+</div>
                <div className="text-xs sm:text-sm text-[#1A1A1A]/70">Satisfied Clients</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-[#4A90E2]">15+</div>
                <div className="text-xs sm:text-sm text-[#1A1A1A]/70">Expert Professionals</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-[#4A90E2]">98%</div>
                <div className="text-xs sm:text-sm text-[#1A1A1A]/70">Client Retention Rate</div>
              </div>
            </div>

            <button className="bg-[#0B1F3A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#4A90E2] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 group mt-4 sm:mt-6 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start">
              Learn More About Us
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
