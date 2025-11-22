'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Home {
  id: string
  address: string
  lot: string
  floorPlan: string
  price: number
  sqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  completion: string
  features: string[]
  image?: string
}

const homes: Home[] = [
  {
    id: '1',
    address: '8933 Grabill Spruce St',
    lot: 'ARR224',
    floorPlan: 'Delray',
    price: 424590,
    sqft: 1729,
    bedrooms: 4,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['Gray cabinets'],
    image: '/images/homes/homes-1.jpg',
  },
  {
    id: '2',
    address: '8925 Grabill Spruce St',
    lot: 'ARR223',
    floorPlan: 'Captiva',
    price: 405720,
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['LVP Flooring', 'White Cabinets'],
    image: '/images/homes/homes-2.jpg',
  },
  {
    id: '3',
    address: '8942 Grabill Spruce St',
    lot: 'ARR183',
    floorPlan: 'Delray',
    price: 416960,
    sqft: 1729,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['End Unit', 'White Cabinets'],
    image: '/images/homes/homes-3.jpg',
  },
  {
    id: '4',
    address: '8917 Grabill Spruce St',
    lot: 'ARR222',
    floorPlan: 'Beverly',
    price: 392640,
    sqft: 1531,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['LG Kitchen Appliances', 'Java Cabinets'],
    image: '/images/homes/homes-4.jpg',
  },
  {
    id: '5',
    address: '8909 Grabill Spruce St',
    lot: 'ARR221',
    floorPlan: 'Captiva',
    price: 411090,
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['End unit', 'Courtyard Entry'],
    image: '/images/homes/homes-5.jpg',
  },
]

type SortOption = 'price-low' | 'price-high' | 'sqft-low' | 'sqft-high' | 'completion'

export default function AvailableHomes() {
  const [sortBy, setSortBy] = useState<SortOption>('price-low')
  const [sortedHomes, setSortedHomes] = useState(homes)

  const handleSort = (option: SortOption) => {
    setSortBy(option)
    const sorted = [...homes].sort((a, b) => {
      switch (option) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Available homes</h2>
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

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
        <p className="text-sm text-blue-800">
          <strong>Buy online today!</strong> Lock in your new construction home at Arroyo at Skyeview Homes or other Skye Canyon communities through the convenient and completely online{' '}
          <strong>Buy Now</strong> process with expert buyer representation from Dr. Jan Duffy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedHomes.map((home) => (
          <div key={home.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              {home.image ? (
                <Image
                  src={home.image}
                  alt={`${home.floorPlan} floor plan at ${home.address}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{home.address}</h3>
                <p className="text-sm text-gray-600">Lot {home.lot}</p>
                <p className="text-sm text-gray-600">Est. Completion: {home.completion}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-lg font-semibold text-blue-600 mb-2">{home.floorPlan}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{formatPrice(home.price)}</p>
                <p className="text-sm text-gray-600">Contact for monthly payment estimate</p>
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
                  <span className="font-semibold ml-1">{home.parking} bay</span>
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

              <div className="flex gap-2">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Buy Now
                </Button>
                <Button variant="outline" className="flex-1">
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

