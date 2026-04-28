import { useEffect, useMemo, useState } from 'react';
import type { CarouselApi } from './ui/carousel';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const IMAGE_EXTS = ['png', 'jpg', 'jpeg', 'webp'] as const;

function CarouselImage({ index }: { index: number }) {
  const [extIdx, setExtIdx] = useState(0);
  const [missing, setMissing] = useState(false);
  const src = `/images/cara/${index}.${IMAGE_EXTS[extIdx]}`;

  if (missing) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/70 text-sm font-semibold text-neutral-700">
        Add image: <span className="ml-1 font-mono">{index}.png</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Industry slide ${index}`}
      loading="lazy"
      decoding="async"
      className="h-full w-full rounded-2xl bg-transparent object-contain"
      onError={() => {
        const next = extIdx + 1;
        if (next < IMAGE_EXTS.length) setExtIdx(next);
        else setMissing(true);
      }}
    />
  );
}

export default function Industries() {
  // Set how many slides you plan to add in `/public/images/cara/` as 1.png, 2.png, ...
  const slides = useMemo(() => Array.from({ length: 9 }, (_, i) => i + 1), []);
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const intervalMs = 3200;
    const id = window.setInterval(() => {
      api.scrollNext();
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [api]);

  const n = slides.length;

  return (
    <section
      id="industries"
      className="scroll-mt-24 w-full bg-sky-50 pb-12 pt-6 sm:pb-16 sm:pt-10 md:pb-24 md:pt-14"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003d82] mt-3 sm:mt-4 leading-tight">
            Expertise Across Multiple Sectors
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A]/70 mt-4 sm:mt-6">
            Deep industry knowledge combined with technical expertise to serve your specific needs.
          </p>
        </div>

        <div className="relative w-full">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: 'center', skipSnaps: false, containScroll: 'trimSnaps' }}
            className="w-full"
          >
            {/* tighter spacing between slides + 3D perspective */}
            <CarouselContent className="-ml-2 py-4 [perspective:1200px] sm:-ml-3 sm:py-5">
              {slides.map((slideNumber, i) => {
                // Coverflow math (handles loop by choosing shortest distance).
                let d = i - selected;
                if (d > n / 2) d -= n;
                if (d < -n / 2) d += n;
                const clamped = Math.max(-2, Math.min(2, d));
                const abs = Math.abs(clamped);

                const rotate = clamped * -28; // deg
                const scale = 1 - abs * 0.08;
                // Remove “fog/grey gradient” by avoiding blur/opacity haze.
                const opacity = 1;
                const blur = 0;
                const z = 30 - abs * 10;

                return (
                  <CarouselItem
                    key={slideNumber}
                    className="basis-[92%] pl-2 sm:basis-[62%] sm:pl-3 lg:basis-[42%]"
                  >
                    <div
                      className="relative mx-auto aspect-[4/5] w-full max-w-[420px] sm:max-w-[460px]"
                      style={{
                        transform: `translateZ(${z}px) rotateY(${rotate}deg) scale(${scale})`,
                        opacity,
                        filter: blur ? `blur(${blur}px)` : undefined,
                        transition:
                          'transform 420ms cubic-bezier(0.22,1,0.36,1), opacity 420ms cubic-bezier(0.22,1,0.36,1), filter 420ms cubic-bezier(0.22,1,0.36,1)',
                      }}
                    >
                      <div className="relative h-full w-full rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
                        <CarouselImage index={slideNumber} />
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 border border-neutral-200 bg-white/80 text-neutral-800 shadow-md backdrop-blur-sm hover:bg-white" />
            <CarouselNext className="right-4 top-1/2 -translate-y-1/2 border border-neutral-200 bg-white/80 text-neutral-800 shadow-md backdrop-blur-sm hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
