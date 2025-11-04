'use client'

import { useState } from 'react'
import PurpleSaleBanner from './components/purple-sale-banner'
import Header from './components/header'
import DrJanHero from './components/dr-jan-hero'
import WhyChooseDrJan from './components/why-choose-dr-jan'
import BuyerJourney from './components/buyer-journey'
import DrJanTestimonials from './components/dr-jan-testimonials'
import BestOpportunities from './components/best-opportunities'
import DrJanFAQ from './components/dr-jan-faq'
import HeroCarousel from './components/hero-carousel'
import AvailableHomes from './components/available-homes'
import AlreadyTaken from './components/already-taken'
import FloorPlans from './components/floor-plans'
import HomesiteMap from './components/homesite-map'
import Overview from './components/overview'
import AreaInformation from './components/area-information'
import HomebuyerResources from './components/homebuyer-resources'
import SimilarCommunities from './components/similar-communities'
import HomeownerReviews from './components/homeowner-reviews'
import RequestInfo from './components/request-info'
import PeopleAlsoSearch from './components/people-also-search'
import Footer from './components/footer'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'homes' | 'plans' | 'map' | 'overview' | 'area' | 'resources'>('homes')
  const [showDrJanContent, setShowDrJanContent] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      <PurpleSaleBanner />
      <Header />
      <main>
        {showDrJanContent ? (
          <>
            <DrJanHero />
            <WhyChooseDrJan />
            <BuyerJourney />
            <DrJanTestimonials />
            <BestOpportunities />
            <DrJanFAQ />
            <div className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <button
                  onClick={() => setShowDrJanContent(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium underline"
                >
                  View Community Details →
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <HeroCarousel />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex flex-wrap space-x-8" aria-label="Tabs">
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
                onClick={() => setActiveTab('map')}
                className={`${
                  activeTab === 'map'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Homesite Map
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
              <button
                onClick={() => setActiveTab('resources')}
                className={`${
                  activeTab === 'resources'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Homebuyer Resources
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-6">
            {activeTab === 'homes' && (
              <div>
                <AvailableHomes />
                <div className="mt-12">
                  <AlreadyTaken />
                </div>
              </div>
            )}
            {activeTab === 'plans' && <FloorPlans />}
            {activeTab === 'map' && <HomesiteMap />}
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'area' && <AreaInformation />}
            {activeTab === 'resources' && <HomebuyerResources />}
          </div>
        </div>

        <SimilarCommunities />
        <PeopleAlsoSearch />
        <HomeownerReviews />
        <RequestInfo />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
