import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router';

type ServicePremiumCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Dashboard-style card (Convix aesthetic): white surface, neutral border, orange accents. No motion. */
export default function ServicePremiumCard({ icon: Icon, title, description }: ServicePremiumCardProps) {
  const href = `/services?service=${encodeURIComponent(title)}`;

  return (
    <article className="group relative flex h-full min-h-[254px] flex-col overflow-hidden rounded-[20px] border-2 border-[#c3c6ce] bg-[#f5f5f5] p-[1.8rem] transition-[border-color,box-shadow,transform] duration-500 ease-out hover:-translate-y-0.5 hover:border-[#003d82] hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)]">
      <div className="grid h-full place-content-center gap-2 text-center text-neutral-900 transition-[filter,opacity] duration-300 ease-out group-hover:blur-[2px] group-hover:opacity-60">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#003d82]/10" aria-hidden>
          <Icon className="h-6 w-6 text-[#003d82]" strokeWidth={1.75} />
        </div>
        <h3 className="text-title text-[1.5em] font-bold leading-snug">{title}</h3>
        <p className="text-body text-sm leading-relaxed text-neutral-500">{description}</p>
      </div>

      <div
        className="pointer-events-none absolute inset-0 grid place-items-center bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/10"
        aria-hidden
      >
        <Link
          to={href}
          className="pointer-events-auto inline-flex w-[70%] items-center justify-center rounded-[1rem] bg-[#003d82] px-4 py-2 text-center text-base font-semibold text-white opacity-0 shadow-lg transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100 group-hover:scale-[1.02]"
        >
          Explore Services
        </Link>
      </div>
    </article>
  );
}
