import React, { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig, useInView } from 'motion/react';

const STATS = [
  { end: 25, suffix: '+', label: 'Years of Experience' },
  { end: 500, suffix: '+', label: 'Satisfied Clients' },
  { end: 15, suffix: '+', label: 'Expert Professionals' },
  { end: 98, suffix: '%', label: 'Client Retention Rate' },
] as const;

function useCountUp(end: number, active: boolean, durationMs = 1600) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      return;
    }
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(end * eased));
      if (t < 1) requestAnimationFrame(tick);
      else setValue(end);
    };

    requestAnimationFrame(tick);
  }, [active, end, durationMs]);

  return value;
}

function StatCard({
  end,
  suffix,
  label,
  index,
}: {
  end: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-12% 0px' });
  const count = useCountUp(end, isInView, 1400 + index * 120);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 20,
        delay: index * 0.08,
      }}
      className="w-[7.75rem] flex-shrink-0 snap-center rounded-xl border border-white/20 bg-white p-3 shadow-lg shadow-black/20 sm:w-[8.75rem] sm:p-4 md:w-full md:max-w-[9.75rem] md:justify-self-center md:snap-normal lg:max-w-[10.25rem]"
    >
      <motion.div
        className="text-2xl font-bold tabular-nums text-[#4A90E2] sm:text-3xl"
        key={count}
        initial={{ scale: 0.92 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        {count}
        {suffix}
      </motion.div>
      <p className="mt-1.5 text-xs font-medium leading-snug text-[#1A1A1A]/80 sm:text-sm">{label}</p>
    </motion.div>
  );
}

export default function AboutStatsBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerInView = useInView(bannerRef, { once: true, margin: '-8% 0px' });

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        ref={bannerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={bannerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 sm:mt-16 md:mt-20"
      >
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 px-4 py-10 shadow-2xl sm:px-8 sm:py-12 md:px-10 md:py-14"
          style={{
            background: 'linear-gradient(135deg, #0B1F3A 0%, #153a5c 45%, #0d2847 100%)',
          }}
        >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4A90E2]/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#2BB673]/15 blur-3xl"
          aria-hidden
        />

        <p className="relative text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm">
          Our impact in numbers
        </p>
        <h3 className="relative mx-auto mt-3 max-w-2xl text-center text-2xl font-bold text-white sm:text-3xl">
          Trusted by businesses across India
        </h3>

        <div className="relative mx-auto mt-10 flex max-w-5xl snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 md:grid md:grid-cols-4 md:justify-items-center md:gap-3 md:overflow-visible md:pb-0 md:snap-none [&::-webkit-scrollbar]:hidden">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} end={stat.end} suffix={stat.suffix} label={stat.label} index={i} />
          ))}
        </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
