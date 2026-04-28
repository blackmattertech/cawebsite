import { ChevronRight } from 'lucide-react';
import ConvixNavbar from './ConvixNavbar';
import ConvixVideoBackdrop from './ConvixVideoBackdrop';
import DashboardPreview from './DashboardPreview';

export default function ConvixHero() {
  return (
    <div
      className="min-h-screen w-full bg-[#ededed] p-3 font-sans sm:p-4"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="relative h-[calc(100vh-24px)] w-full overflow-hidden rounded-2xl bg-[#d9d9d9] sm:h-[calc(100vh-32px)] sm:rounded-3xl">
        <ConvixVideoBackdrop />

        <div className="relative z-10 flex min-h-full flex-col">
          <ConvixNavbar />

          <div className="flex flex-1 flex-col px-4 pb-8 pt-10 text-center sm:pb-12 sm:pt-16">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#ef4d23]" aria-hidden />
                <span className="text-[13px] font-medium text-neutral-900">Convix Software</span>
              </div>

              <h1
                className="mt-5 max-w-4xl sm:mt-6"
                style={{
                  fontSize: 'clamp(36px, 8vw, 72px)',
                  lineHeight: 1.05,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                }}
              >
                Shaping{' '}
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  Agencies
                </span>
                <br />
                of tomorrow
              </h1>

              <p
                className="mt-4 max-w-2xl px-2 text-neutral-700 sm:mt-6"
                style={{ fontSize: 'clamp(13px, 3.5vw, 16px)' }}
              >
                The All-In-One Software Powering the Future of PR Agencies
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#0b0f1a] py-2 pl-6 pr-2 text-[14px] font-semibold text-white sm:mt-8 sm:py-2.5 sm:pl-7"
              >
                Get Started
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 sm:h-7 sm:w-7">
                  <ChevronRight className="h-4 w-4 text-white" strokeWidth={2.5} aria-hidden />
                </span>
              </button>
            </div>

            <div className="mt-auto w-full px-3 pt-10 sm:px-4 sm:pt-12">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
