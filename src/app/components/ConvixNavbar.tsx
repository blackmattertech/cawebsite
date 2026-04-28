import { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, ShoppingCart } from 'lucide-react';

function ConvixLogo() {
  const petals = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4;
    const cx = 16 + 10 * Math.cos(a);
    const cy = 16 + 10 * Math.sin(a);
    return <circle key={k} cx={cx} cy={cy} r={3.5} fill="#ef4d23" />;
  });
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" aria-hidden>
      {petals}
      <circle cx={16} cy={16} r={3.5} fill="#ef4d23" />
    </svg>
  );
}

const navLinkClass = 'text-[14px] font-medium text-neutral-900';

export default function ConvixNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex justify-center px-3 pt-4 sm:px-4 sm:pt-6">
      <div className="relative w-full max-w-[760px] rounded-full border border-neutral-200 bg-white py-2 pl-2 pr-2 shadow-sm">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex shrink-0 items-center gap-2 pl-1">
            <ConvixLogo />
          </div>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex" aria-label="Main">
            <a href="#" className={`${navLinkClass} inline-flex items-center gap-1.5`}>
              <span className="rounded-full bg-black" style={{ width: 1.5, height: 1.5 }} aria-hidden />
              Home
            </a>
            <a href="#" className={navLinkClass}>
              Features
            </a>
            <a href="#" className={navLinkClass}>
              About
            </a>
            <a href="#" className={`${navLinkClass} inline-flex items-center gap-1 text-[#ef4d23]`}>
              Pages
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="hidden text-neutral-700 md:flex md:h-9 md:w-9 md:items-center md:justify-center"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[#ef4d23] py-1.5 pl-3 pr-1.5 text-[14px] font-semibold text-white sm:pl-4"
            >
              <span className="hidden sm:inline">Get early access</span>
              <span className="sm:hidden">Early access</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 sm:h-7 sm:w-7">
                <ChevronRight className="h-4 w-4 text-white" strokeWidth={2.5} aria-hidden />
              </span>
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-800 md:hidden"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {open && (
          <div className="absolute left-2 right-2 top-full z-20 mt-2 rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg md:hidden">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="block rounded-lg px-3 py-2 text-[14px] font-medium text-neutral-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block rounded-lg px-3 py-2 text-[14px] font-medium text-neutral-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="block rounded-lg px-3 py-2 text-[14px] font-medium text-neutral-900">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium text-[#ef4d23]"
                >
                  Pages
                  <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
