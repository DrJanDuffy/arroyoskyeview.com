'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface FloorPlan {
  id: string
  name: string
  price: number
  sqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  description: string
  status: string
}

const floorPlans: FloorPlan[] = [
  {
    id: '1',
    name: 'Beverly',
    price: 364990,
    sqft: 1531,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    description: 'Interior Unit',
    status: 'Model Open',
  },
  {
    id: '2',
    name: 'Captiva',
    price: 374990,
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    description: '3 Bed + Loft',
    status: 'Modeled',
  },
  {
    id: '3',
    name: 'Delray',
    price: 384990,
    sqft: 1729,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    description: 'End Unit',
    status: 'Stunning Model',
  },
]

type SortOption = 'price-low' | 'price-high' | 'sqft-low' | 'sqft-high'

export default function FloorPlans() {
  const [sortBy, setSortBy] = useState<SortOption>('price-low')
  const [sortedPlans, setSortedPlans] = useState(floorPlans)

  const handleSort = (option: SortOption) => {
    setSortBy(option)
    const sorted = [...floorPlans].sort((a, b) => {
      switch (option) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'sqft-low':
          return a.sqft - b.sqft
        case 'sqft-high':
          return b.sqft - a.sqft
        default:
          return 0
      }
    })
    setSortedPlans(sorted)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Floor Plans</h2>
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
          </select>
        </div>
      </div>

      <p className="text-gray-600 mb-6">
        Check out quality layouts that may be available for purchase at this community today!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPlans.map((plan) => (
          <div key={plan.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div className="absolute top-2 right-2">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">{plan.status}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
                <p className="text-2xl font-bold text-blue-600 mb-1">From {formatPrice(plan.price)}</p>
                <p className="text-sm text-gray-600">Est. $X,XXX/mo</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 text-sm border-t border-gray-200 pt-4">
                <div>
                  <span className="text-gray-600">Square Footage:</span>
                  <span className="font-semibold ml-1">{plan.sqft} sq ft</span>
                </div>
                <div>
                  <span className="text-gray-600">Bedrooms:</span>
                  <span className="font-semibold ml-1">{plan.bedrooms} br</span>
                </div>
                <div>
                  <span className="text-gray-600">Bathrooms:</span>
                  <span className="font-semibold ml-1">{plan.bathrooms} ba</span>
                </div>
                <div>
                  <span className="text-gray-600">Parking Bays:</span>
                  <span className="font-semibold ml-1">{plan.parking} bay</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  Request Info
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

