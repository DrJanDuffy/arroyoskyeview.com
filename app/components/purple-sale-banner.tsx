'use client'

export default function PurpleSaleBanner() {
  return (
    <div className="bg-purple-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2">
          <span className="font-semibold text-sm">PURPLE TAG SALE</span>
          <span className="text-xs">|</span>
          <span className="text-sm">
            Special Pricing with a <strong>3.875% (4.827% APR)*</strong> interest rate? Yes, please!
          </span>
          <button className="ml-2 text-sm underline hover:no-underline">
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

