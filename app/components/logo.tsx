import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group transition-all duration-200">
      {/* Enhanced Logo Icon with Modern Design */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          {/* House Icon */}
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        {/* Premium accent badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Enhanced Typography with Better Hierarchy */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span className="text-base md:text-lg font-bold text-blue-600 leading-tight group-hover:text-blue-700 transition-colors">
            Las Vegas
          </span>
          <span className="text-xs md:text-sm text-blue-500 font-medium">•</span>
        </div>
        <span className="text-sm md:text-base font-extrabold text-gray-900 leading-tight tracking-tight">
          Century Communities
        </span>
        <div className="mt-0.5 flex items-center gap-1.5">
          <div className="h-px w-4 bg-blue-300"></div>
          <span className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-[0.15em]">
            Realtor
          </span>
        </div>
      </div>
    </Link>
  )
}

