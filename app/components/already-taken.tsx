'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface TakenHome {
  id: string
  address: string
  lot: string
  floorPlan: string
  sqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  completion: string
  status: string
  features: string[]
}

const takenHomes: TakenHome[] = [
  {
    id: '1',
    address: '8958 Grabill Spruce St',
    lot: 'ARR181',
    floorPlan: 'Captiva',
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    status: 'Pending',
    features: ['End Unit'],
  },
]

type SortOption = 'price-low' | 'price-high' | 'sqft-low' | 'sqft-high' | 'completion'

export default function AlreadyTaken() {
  const [sortBy, setSortBy] = useState<SortOption>('price-low')
  const [sortedHomes, setSortedHomes] = useState(takenHomes)

  const handleSort = (option: SortOption) => {
    setSortBy(option)
    const sorted = [...takenHomes].sort((a, b) => {
      switch (option) {
        case 'price-low':
          return 0
        case 'price-high':
          return 0
        case 'sqft-low':
          return a.sqft - b.sqft
        case 'sqft-high':
          return b.sqft - a.sqft
        case 'completion':
          return a.completion.localeCompare(b.completion)
        default:
          return 0
      }
    })
    setSortedHomes(sorted)
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ALREADY TAKEN</h2>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-gray-700">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value as SortOption)}
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="sqft-low">Sq Ft: Low to High</option>
            <option value="sqft-high">Sq Ft: High to Low</option>
            <option value="completion">Est Completion Date</option>
          </select>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-sm text-yellow-800">
          <strong>Homes reserved or under contract</strong>
          <br />
          Homes are selling fast! See what's still available at this community above.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedHomes.map((home) => (
          <div key={home.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition opacity-75">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div className="absolute top-2 left-2">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold">
                  {home.status}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{home.address}</h3>
                <p className="text-sm text-gray-600">Lot {home.lot}</p>
                <p className="text-sm text-gray-600">Est. Completion: {home.completion}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-lg font-semibold text-blue-600 mb-2">{home.floorPlan}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                <div>
                  <span className="text-gray-600">Square Footage:</span>
                  <span className="font-semibold ml-1">{home.sqft} sq ft</span>
                </div>
                <div>
                  <span className="text-gray-600">Bedrooms:</span>
                  <span className="font-semibold ml-1">{home.bedrooms} br</span>
                </div>
                <div>
                  <span className="text-gray-600">Bathrooms:</span>
                  <span className="font-semibold ml-1">{home.bathrooms} ba</span>
                </div>
                <div>
                  <span className="text-gray-600">Parking Bays:</span>
                  <span className="font-semibold ml-1">{home.parking} {home.parking > 1 ? 'bays' : 'bay'}</span>
                </div>
              </div>

              {home.features.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {home.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Button variant="outline" className="w-full">
                Call for Available Homes
              </Button>
              <Button variant="ghost" className="w-full mt-2">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

