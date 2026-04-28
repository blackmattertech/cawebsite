import { useState } from 'react';

/** Hero image: `public/images/about-trusted-partner.png`. If missing, fallback loads via `onError`. */
export const ABOUT_TRUSTED_PARTNER_IMAGE_PRIMARY = '/images/about-trusted-partner.png';

const ABOUT_TRUSTED_PARTNER_IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&auto=format&fit=crop';

export default function AboutTrustedPartnerBlock() {
  const [heroSrc, setHeroSrc] = useState(ABOUT_TRUSTED_PARTNER_IMAGE_PRIMARY);

  return (
    <div className="mt-16 md:mt-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-end">
        <div className="max-w-4xl lg:max-w-none">
          <h3 className="break-words text-3xl font-bold leading-tight text-[#0B1F3A] sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15] xl:text-5xl">
            <span>Your Trusted Partner for </span>
            <span className="font-extrabold text-[1.06em] sm:text-[1.05em] lg:text-[1.06em]">Financial Advisor</span>
          </h3>
        </div>

        <div className="flex flex-col justify-end lg:max-w-md lg:justify-self-end">
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            Empowering businesses with tailored strategies to unlock growth and optimize performance. We combine
            chartered expertise with practical insight so you can focus on what you do best.
          </p>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 sm:mt-12 md:rounded-3xl md:shadow-xl">
        <img
          src={heroSrc}
          alt="Professional advisory discussion at Shivanichchi & Co."
          className="h-[220px] w-full object-cover sm:h-[320px] md:h-[400px] lg:h-[460px]"
          loading="lazy"
          decoding="async"
          onError={() => setHeroSrc(ABOUT_TRUSTED_PARTNER_IMAGE_FALLBACK)}
        />
      </div>
    </div>
  );
}
