'use client'

export default function PurpleSaleBanner() {
  return (
    <div className="bg-violet-600 py-2 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold">PURPLE TAG SALE</span>
        <span className="text-xs opacity-90" aria-hidden>
          |
        </span>
        <span className="text-center text-sm sm:text-left">
          Special Pricing with a <strong>3.875% (4.827% APR)*</strong> interest rate? Yes, please!
        </span>
        <button
          type="button"
          className="ml-1 rounded-sm p-1 text-sm underline decoration-white/80 underline-offset-2 transition hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90"
          aria-label="More about purple tag sale"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}
