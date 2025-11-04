'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const communities = [
    { name: 'Arroyo at Skyeview', href: '/' },
    { name: 'Sierra at Skyeview', href: '/sierra-at-skyeview' },
    { name: 'Terra at Skyeview', href: '/terra-at-skyeview' },
    { name: 'Ironwood', href: '/ironwood' },
    { name: 'Homestead West', href: '/homestead-west' },
    { name: 'Eaglepointe at Skye Canyon', href: '/eaglepointe-skye-canyon' },
  ]

  const neighborhoods = [
    { name: 'Skye Canyon', href: '/areas/zip-89166' },
    { name: 'Summerlin', href: '/neighborhoods/summerlin-las-vegas' },
    { name: 'Henderson', href: '/neighborhoods/henderson-las-vegas' },
    { name: 'Las Vegas Metro', href: '/find-your-new-home/nevada/las-vegas-metro' },
  ]

  const propertyTypes = [
    { name: 'Townhomes', href: '/homes/townhomes-las-vegas' },
    { name: 'Single Family Homes', href: '/homes/single-family-las-vegas' },
    { name: 'Homes Under $400k', href: '/homes/under-400k' },
  ]

  const buyerResources = [
    { name: 'First-Time Homebuyer Guide', href: '/buyers/first-time-homebuyer' },
    { name: 'Builder Incentives Guide', href: '/buyers/builder-incentives-guide' },
    { name: 'Homebuying Process', href: '/homebuying-process' },
    { name: 'Online Homebuying', href: '/online-homebuying' },
  ]

  const blogPosts = [
    { name: 'New Home Inventory 2x Normal', href: '/blog/new-home-inventory-2x' },
    { name: 'Housing Market Crash 2025?', href: '/blog/housing-market-crash-2025' },
    { name: 'Market Passed You By?', href: '/blog/market-passed-you-by' },
    { name: 'Buying Home with Student Loans', href: '/blog/buying-home-with-student-loans' },
    { name: 'Sale Crosses Finish Line', href: '/blog/sale-crosses-finish-line' },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {/* Home Link */}
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 relative group"
              title="Home - Arroyo at Skyeview New Construction Homes"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>

            {/* Communities Dropdown (with Neighborhoods) */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-blue-50"
                onMouseEnter={() => setActiveDropdown('communities')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Communities
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'communities' && (
                <div
                  className="absolute left-0 mt-2 w-80 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setActiveDropdown('communities')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    <div className="px-4 py-2.5 text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 border-b border-blue-100">
                      Communities
                    </div>
                    {communities.map((community) => (
                      <Link
                        key={community.href}
                        href={community.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                        title={`${community.name} - New Construction Homes by Century Communities`}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                          {community.name}
                        </span>
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 my-2"></div>
                    <div className="px-4 py-2.5 text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50">
                      Neighborhoods
                    </div>
                    {neighborhoods.map((neighborhood) => (
                      <Link
                        key={neighborhood.href}
                        href={neighborhood.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                        title={`New Homes in ${neighborhood.name} - Century Communities`}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                          {neighborhood.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>


            {/* Property Types Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-blue-50"
                onMouseEnter={() => setActiveDropdown('propertyTypes')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Property Types
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'propertyTypes' && (
                <div
                  className="absolute left-0 mt-2 w-64 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setActiveDropdown('propertyTypes')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {propertyTypes.map((type) => (
                      <Link
                        key={type.href}
                        href={type.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                        title={`${type.name} in Las Vegas - Century Communities`}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                          {type.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Buyers Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-blue-50"
                onMouseEnter={() => setActiveDropdown('buyers')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Buyers
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'buyers' && (
                <div
                  className="absolute left-0 mt-2 w-72 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setActiveDropdown('buyers')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {buyerResources.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                        title={`${resource.name} - Las Vegas Homebuyer Resources`}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                          {resource.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-blue-50"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Resources
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'resources' && (
                <div
                  className="absolute left-0 mt-2 w-72 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    <Link
                      href="/faq"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                      title="Frequently Asked Questions About New Construction Homes"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        FAQ
                      </span>
                    </Link>
                    <Link
                      href="/faq/las-vegas-hyperlocal"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                      title="Las Vegas Hyperlocal Questions & Answers - Neighborhoods, Schools, Lifestyle"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        Las Vegas Hyperlocal Q&A
                      </span>
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <div className="px-4 py-2.5 text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50">Blog</div>
                    {blogPosts.map((post) => (
                      <Link
                        key={post.href}
                        href={post.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                        title={`${post.name} - Real Estate Blog Article`}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                          {post.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-blue-50"
                onMouseEnter={() => setActiveDropdown('contact')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Contact
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'contact' && (
                <div
                  className="absolute right-0 mt-2 w-64 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setActiveDropdown('contact')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    <Link
                      href="/work-with-dr-jan"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                      title="Work with Dr. Jan Duffy - Expert Century Communities Buyer Agent"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        Work with Dr. Jan
                      </span>
                    </Link>
                    <Link
                      href="/contact-us"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                      title="Contact Century Communities - Get In Touch"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        Contact Us
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-blue-50"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                About
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'about' && (
                <div
                  className="absolute right-0 mt-2 w-64 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setActiveDropdown('about')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    <Link
                      href="/about-us"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                      title="About Century Communities - Las Vegas New Home Builder"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        About Century Communities
                      </span>
                    </Link>
                    <Link
                      href="/find-your-new-home/nevada/las-vegas-metro"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group"
                      title="Find Your New Home in Las Vegas Metro - Browse Communities"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        Find Your Home
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center ml-4">
            <a
              href="tel:7029034687"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Dr. Jan: (702) 903-4687</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href="tel:7029034687"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xs">Call</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-1 border-t border-gray-200 bg-white animate-in slide-in-from-top duration-200">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-communities')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-2 py-2 transition-colors duration-150"
              >
                Communities & Neighborhoods
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-communities' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-communities' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="pt-2 pb-2 text-xs font-bold text-blue-600 uppercase tracking-wider">Communities</div>
                  {communities.map((community) => (
                    <Link
                      key={community.href}
                      href={community.href}
                      className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {community.name}
                    </Link>
                  ))}
                  <div className="pt-4 pb-2 text-xs font-bold text-blue-600 uppercase tracking-wider">Neighborhoods</div>
                  {neighborhoods.map((neighborhood) => (
                    <Link
                      key={neighborhood.href}
                      href={neighborhood.href}
                      className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {neighborhood.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-propertyTypes')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-2 py-2 transition-colors duration-150"
              >
                Property Types
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-propertyTypes' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-propertyTypes' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {propertyTypes.map((type) => (
                    <Link
                      key={type.href}
                      href={type.href}
                      className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-buyers')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-2 py-2 transition-colors duration-150"
              >
                Buyers
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-buyers' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-buyers' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {buyerResources.map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-resources')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-2 py-2 transition-colors duration-150"
              >
                Resources
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-resources' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/faq"
                    className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/faq/las-vegas-hyperlocal"
                    className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Las Vegas Hyperlocal Q&A
                  </Link>
                  <div className="pt-3 pb-2 text-xs font-bold text-blue-600 uppercase tracking-wider">Blog</div>
                  {blogPosts.map((post) => (
                    <Link
                      key={post.href}
                      href={post.href}
                      className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {post.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-contact')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-2 py-2 transition-colors duration-150"
              >
                Contact
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-contact' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-contact' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/work-with-dr-jan"
                    className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Work with Dr. Jan
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-about')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-2 py-2 transition-colors duration-150"
              >
                About
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-about' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-about' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/about-us"
                    className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Century Communities
                  </Link>
                  <Link
                    href="/find-your-new-home/nevada/las-vegas-metro"
                    className="block py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Find Your Home
                  </Link>
                </div>
              )}
            </div>
            <a
              href="tel:7029034687"
              className="block w-full mx-4 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Dr. Jan: (702) 903-4687</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
