import { Users, Shield, TrendingUp } from 'lucide-react';
import SplitText from './ui/SplitText';

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 relative min-h-[100dvh] flex items-center pt-20 bg-[#F7F9FC]">
      {/* Background Video Container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark Overlay - only on left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#0B1F3A]/85 via-[#0B1F3A]/60 md:via-[#0B1F3A]/40 to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center md:object-right"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 sm:py-16 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <SplitText
                text="Building Trust."
                tag="span"
                className="block"
                display="block"
                textAlign="left"
                splitType="chars"
                delay={35}
                duration={1}
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                text="Delivering Excellence."
                tag="span"
                className="block text-[#F47920]"
                display="block"
                textAlign="left"
                splitType="chars"
                delay={35}
                duration={1}
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
            </h1>

            <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed">
              Expert financial solutions tailored to help your business grow, comply, and thrive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-white text-[#0B1F3A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#F47920] hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base font-semibold">
                Our Services
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-[#0B1F3A] transition-all text-sm sm:text-base font-semibold">
                About Us
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="flex items-start gap-3 bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#F47920]/90 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Expert Team</h4>
                  <p className="text-xs sm:text-sm text-white/80">Experienced Professionals</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#F47920]/90 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Trusted Advisors</h4>
                  <p className="text-xs sm:text-sm text-white/80">Reliable. Ethical. Committed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#F47920]/90 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Value Driven</h4>
                  <p className="text-xs sm:text-sm text-white/80">Focused on Your Growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image space placeholder for desktop */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
