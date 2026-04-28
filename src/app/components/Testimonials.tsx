import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rohit Agarwal',
    content:
      'We were struggling with managing our export documentation and compliance. Their team streamlined everything into one system. It saved us a lot of manual effort and errors. Highly recommended for businesses dealing with international clients.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    content:
      'Very professional and responsive team. They helped us automate our accounting and GST processes. What I liked most is how patiently they explained everything to us.',
    rating: 5,
  },
  {
    name: 'Amit Sharma',
    content:
      'Good experience overall. We got our CRM integrated with our existing tools without any major issues. There were minor delays, but the final result was worth it.',
    rating: 4,
  },
  {
    name: 'Neha Verma',
    content:
      'Earlier we were handling everything on Excel sheets. Now with their system, we can track everything in one place. It has improved our team’s productivity a lot.',
    rating: 5,
  },
  {
    name: 'Sandeep Gupta',
    content:
      'They understand business problems, not just technology. That’s what makes them different. The solution they built actually fits our workflow.',
    rating: 5,
  },
  {
    name: 'Kavita Iyer',
    content:
      'The team is knowledgeable and easy to work with. They helped us set up automation for payroll and HR tasks. Saved us a lot of time every month.',
    rating: 4,
  },
  {
    name: 'Rahul Jain',
    content:
      'We approached them for a custom ERP solution for our manufacturing unit. The clarity and control we now have is something we never had before.',
    rating: 5,
  },
  {
    name: 'Ankit Mehta',
    content:
      'Quick delivery and very supportive team. Even after project completion, they are available whenever we need help.',
    rating: 5,
  },
  {
    name: 'Shreya Kulkarni',
    content:
      'The system is very user-friendly. Our team was able to adapt quickly without much training. That was a big plus for us.',
    rating: 4,
  },
  {
    name: 'Vikram Singh',
    content:
      'They helped us digitize our entire operations. From inventory to billing, everything is now structured and easy to track.',
    rating: 5,
  },
  {
    name: 'Pooja Desai',
    content:
      'Great experience working with them. Transparent communication and no hidden surprises during the project.',
    rating: 5,
  },
  {
    name: 'Manish Bansal',
    content:
      'Good team with strong technical knowledge. They understood our requirements well and delivered accordingly.',
    rating: 4,
  },
  {
    name: 'Sneha Reddy',
    content:
      'We saw immediate improvements in our workflow after implementing their system. It’s simple yet very effective.',
    rating: 5,
  },
  {
    name: 'Deepak Choudhary',
    content:
      'Their approach is very practical. Instead of overcomplicating things, they focus on what actually works for the business.',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    content:
      'Reliable team. They delivered what they promised and were always available for support during and after the project.',
    rating: 5,
  },
];

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="scroll-mt-24 py-12 sm:py-16 md:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003d82] mt-3 sm:mt-4 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A]/70 mt-4 sm:mt-6">
            Don't just take our word for it. Here's what our valued clients have to say.
          </p>
        </div>

        <div className="ca-testimonials-marquee relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#F7F9FC] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#F7F9FC] to-transparent z-10" />

          <div className="ca-testimonials-track flex w-max gap-4 sm:gap-6 md:gap-8 will-change-transform">
            {items.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-gray-100 w-[280px] sm:w-[340px] md:w-[380px] flex-none"
              >
                <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 text-[#2BB673]/10" />

                <div className="flex gap-1 mb-4 sm:mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#2BB673] text-[#2BB673]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed mb-4 sm:mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-100 pt-4 sm:pt-6">
                  <div className="font-bold text-[#0B1F3A] text-sm sm:text-base">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .ca-testimonials-track {
            animation: ca-testimonials-scroll 55s linear infinite;
          }
          .ca-testimonials-marquee:hover .ca-testimonials-track {
            animation-play-state: paused;
          }
          @keyframes ca-testimonials-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .ca-testimonials-track {
              animation: none;
              transform: none;
            }
          }
        `}
      </style>
    </section>
  );
}
