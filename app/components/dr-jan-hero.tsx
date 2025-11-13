'use client'

import { trackPhoneClick, trackCTAClick } from './analytics-tracker'

export default function DrJanHero() {
  const handleCallClick = () => {
    trackPhoneClick('702-903-4687', 'hero_call_cta')
  }

  const handleTextClick = () => {
    trackCTAClick('Text Dr. Jan', 'hero_text_cta')
  }

  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Buying Arroyo at Skyeview Homes? Get Expert Buyer Representation in Skye Canyon, Northwest Las Vegas
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            <strong>Dr. Jan Duffy represents HOME BUYERS</strong>—not builders or HOAs. Expert buyer representation for Arroyo at Skyeview Homes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada. No extra cost to you.
          </p>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Builders pay for buyer representation on all new construction homes including Arroyo at Skyeview Homes—which means you're already funding an agent, so you might as well choose the best one. <strong>Dr. Jan Duffy is a New Construction Home Expert</strong> who specializes in Arroyo at Skyeview Homes and brings insider knowledge of Skye Canyon (zip code 89166), northwest Las Vegas communities, real-time construction monitoring every 7-10 days, and a building standards inspection at closing—protecting YOUR interests as a home buyer every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:7029034687"
              onClick={handleCallClick}
              className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now: (702) 903-4687</span>
            </a>
            <a
              href="sms:7029034687"
              onClick={handleTextClick}
              className="inline-flex items-center justify-center space-x-2 bg-blue-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-400 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Text Dr. Jan</span>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-blue-100 text-center">
              <strong className="text-white">100% Free Buyer Representation</strong> • Builders Pay Commission • No Extra Cost to You
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

