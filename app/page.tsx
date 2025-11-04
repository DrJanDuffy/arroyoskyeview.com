'use client'

import { useState } from 'react'
import Header from './components/header'
import HeroCarousel from './components/hero-carousel'
import AvailableHomes from './components/available-homes'
import FloorPlans from './components/floor-plans'
import Overview from './components/overview'
import AreaInformation from './components/area-information'
import RequestInfo from './components/request-info'
import Footer from './components/footer'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'homes' | 'plans' | 'overview' | 'area'>('homes')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('homes')}
                className={`${
                  activeTab === 'homes'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Available Homes
              </button>
              <button
                onClick={() => setActiveTab('plans')}
                className={`${
                  activeTab === 'plans'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Floor Plans
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`${
                  activeTab === 'overview'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('area')}
                className={`${
                  activeTab === 'area'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Area Information
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-6">
            {activeTab === 'homes' && <AvailableHomes />}
            {activeTab === 'plans' && <FloorPlans />}
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'area' && <AreaInformation />}
          </div>
        </div>

        <RequestInfo />
      </main>
      <Footer />
    </div>
  )
}
