import { ChevronDown, TrendingDown, TrendingUp, X } from 'lucide-react';
import Gauge from './Gauge';

export default function DashboardPreview() {
  return (
    <div className="w-full max-w-[880px] rounded-3xl bg-[#f5f2ee] p-4 sm:p-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {/* Card 1 — Clicks */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[13px] font-semibold text-[#ef4d23]">Clicks</span>
            <span className="text-[13px] text-neutral-500">This Month</span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-[28px] font-semibold leading-none text-neutral-900">6,896</span>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-medium text-red-600">
              <TrendingDown className="h-3 w-3" strokeWidth={2.5} aria-hidden />
              -3,382 (33%)
            </span>
          </div>
          <p className="mt-2 text-[13px] text-neutral-500">Compared to yesterday</p>
          <p className="mt-4 text-center text-[13px] font-medium text-neutral-700">Month Target achieved</p>
          <div className="mt-3 flex justify-center">
            <Gauge value={92} color="#ef4d23" showLabels min="389K" max="425K" />
          </div>
          <div className="mt-4 rounded-full bg-neutral-100 p-1">
            <div className="flex">
              <button
                type="button"
                className="flex-1 rounded-full bg-white py-1.5 text-center text-[13px] font-medium text-neutral-900 shadow-sm"
              >
                Impressions
              </button>
              <button
                type="button"
                className="flex-1 rounded-full py-1.5 text-center text-[13px] font-medium text-neutral-500"
              >
                Clicks
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 — Form */}
        <div className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm">
          <div className="space-y-1.5">
            <label className="text-[12px] text-neutral-700">Show figures for</label>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-left text-[13px] text-neutral-900"
            >
              This month
              <ChevronDown className="h-4 w-4 text-neutral-500" strokeWidth={2} aria-hidden />
            </button>
          </div>
          <div className="space-y-1.5">
            <label className="text-[12px] text-neutral-700">Compare period by</label>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-left text-[13px] text-neutral-900"
            >
              Month-to-date (MTD)
              <ChevronDown className="h-4 w-4 text-neutral-500" strokeWidth={2} aria-hidden />
            </button>
          </div>
          <div className="space-y-1.5">
            <label className="text-[12px] text-neutral-700">Ste targets (This month)</label>
            <div className="flex items-center rounded-lg border border-neutral-200 px-3 py-2">
              <span className="text-neutral-400">#</span>
              <input
                type="text"
                readOnly
                defaultValue="10"
                className="ml-1 w-full bg-transparent text-[13px] text-neutral-900 outline-none"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[12px] text-neutral-700">Ste targets (This year)</label>
            <div className="flex items-center rounded-lg border border-neutral-200 px-3 py-2">
              <span className="text-neutral-400">#</span>
              <input
                type="text"
                readOnly
                defaultValue="100"
                className="ml-1 w-full bg-transparent text-[13px] text-neutral-900 outline-none"
              />
            </div>
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
            <button type="button" className="rounded-lg bg-[#ef4d23] px-5 py-2 text-[13px] font-semibold text-white">
              Save
            </button>
            <button type="button" className="text-[13px] font-medium text-neutral-700 underline underline-offset-2">
              Cancel
            </button>
            <button
              type="button"
              className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 hover:bg-neutral-100"
              aria-label="Close"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Card 3 — Video Starts */}
        <div className="rounded-2xl bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[13px] font-semibold text-[#ef4d23]">Video Starts</span>
            <span className="text-[13px] text-neutral-500">today</span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-[28px] font-semibold leading-none text-neutral-900">0</span>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600">
              <TrendingUp className="h-3 w-3" strokeWidth={2.5} aria-hidden />0
            </span>
          </div>
          <p className="mt-2 text-[13px] text-neutral-500">Compared to yesterday</p>
          <div className="mt-4 flex justify-center">
            <Gauge value={68} color="#9ca3af" />
          </div>
          <div className="mt-4 rounded-full bg-neutral-100 p-1">
            <div className="flex">
              <button
                type="button"
                className="flex-1 rounded-full bg-white py-1.5 text-center text-[13px] font-medium text-neutral-900 shadow-sm"
              >
                Video Clicks
              </button>
              <button
                type="button"
                className="flex-1 rounded-full py-1.5 text-center text-[13px] font-medium text-neutral-500"
              >
                Video Starts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
