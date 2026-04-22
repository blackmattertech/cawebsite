import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    position: 'CEO, Tech Innovations Ltd',
    content: 'Their expertise in tax planning saved us significant costs while ensuring full compliance. The team is professional, responsive, and truly understands business needs.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    position: 'Founder, StartUp Ventures',
    content: 'As a startup, we needed guidance at every step. Their business advisory services have been instrumental in our growth journey. Highly recommend their services.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    position: 'CFO, Manufacturing Corp',
    content: 'Working with this firm has been a game-changer. Their attention to detail in audit services and proactive approach to compliance is exceptional.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="text-[#2BB673] tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium">TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mt-3 sm:mt-4 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A]/70 mt-4 sm:mt-6">
            Don't just take our word for it. Here's what our valued clients have to say.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-gray-100"
            >
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 text-[#2BB673]/10" />

              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#2BB673] text-[#2BB673]" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed mb-4 sm:mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-100 pt-4 sm:pt-6">
                <div className="font-bold text-[#0B1F3A] text-sm sm:text-base">{testimonial.name}</div>
                <div className="text-xs sm:text-sm text-[#1A1A1A]/60 mt-1">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
