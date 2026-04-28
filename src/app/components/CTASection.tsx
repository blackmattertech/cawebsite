import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      id="careers"
      className="scroll-mt-24 py-12 sm:py-16 md:py-24 bg-gradient-to-r from-[#0B1F3A] via-[#1a3a5f] to-[#4A90E2] relative overflow-hidden"
      aria-label="Careers and contact call to action"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#2BB673] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Need Expert Financial Guidance?
          </h2>
          <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-10">
            Let's discuss how we can help your business achieve its financial goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-[#0B1F3A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#2BB673] hover:text-white transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Us Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-[#0B1F3A] transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
              Schedule a Consultation
            </button>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">1000+</div>
              <div className="text-xs sm:text-base text-white/80">Cases Handled</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">25+</div>
              <div className="text-xs sm:text-base text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-base text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
