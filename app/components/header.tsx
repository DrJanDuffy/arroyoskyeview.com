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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {/* Communities Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium flex items-center"
                onMouseEnter={() => setActiveDropdown('communities')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Communities
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'communities' && (
                <div
                  className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  onMouseEnter={() => setActiveDropdown('communities')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                    {communities.map((community) => (
                      <Link
                        key={community.href}
                        href={community.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        {community.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Neighborhoods Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium flex items-center"
                onMouseEnter={() => setActiveDropdown('neighborhoods')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Neighborhoods
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'neighborhoods' && (
                <div
                  className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  onMouseEnter={() => setActiveDropdown('neighborhoods')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                    {neighborhoods.map((neighborhood) => (
                      <Link
                        key={neighborhood.href}
                        href={neighborhood.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        {neighborhood.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Property Types Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium flex items-center"
                onMouseEnter={() => setActiveDropdown('propertyTypes')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Property Types
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'propertyTypes' && (
                <div
                  className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  onMouseEnter={() => setActiveDropdown('propertyTypes')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                    {propertyTypes.map((type) => (
                      <Link
                        key={type.href}
                        href={type.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        {type.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Buyers Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium flex items-center"
                onMouseEnter={() => setActiveDropdown('buyers')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Buyers
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'buyers' && (
                <div
                  className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  onMouseEnter={() => setActiveDropdown('buyers')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                    {buyerResources.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium flex items-center"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'resources' && (
                <div
                  className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                    <Link
                      href="/faq"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/faq/las-vegas-hyperlocal"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      Las Vegas Hyperlocal Q&A
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Blog</div>
                    {blogPosts.map((post) => (
                      <Link
                        key={post.href}
                        href={post.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        {post.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link href="/work-with-dr-jan" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium">
              Work with Dr. Jan
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium">
              About Century
            </Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center">
            <a
              href="tel:7029034687"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Call Dr. Jan: (702) 903-4687
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
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
          <div className="lg:hidden py-4 space-y-1 border-t border-gray-200">
            <div className="px-3 py-2">
              <button
                onClick={() => toggleDropdown('mobile-communities')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium"
              >
                Communities
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-communities' && (
                <div className="pl-4 mt-2 space-y-1">
                  {communities.map((community) => (
                    <Link
                      key={community.href}
                      href={community.href}
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {community.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-3 py-2">
              <button
                onClick={() => toggleDropdown('mobile-neighborhoods')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium"
              >
                Neighborhoods
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-neighborhoods' && (
                <div className="pl-4 mt-2 space-y-1">
                  {neighborhoods.map((neighborhood) => (
                    <Link
                      key={neighborhood.href}
                      href={neighborhood.href}
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {neighborhood.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-3 py-2">
              <button
                onClick={() => toggleDropdown('mobile-propertyTypes')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium"
              >
                Property Types
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-propertyTypes' && (
                <div className="pl-4 mt-2 space-y-1">
                  {propertyTypes.map((type) => (
                    <Link
                      key={type.href}
                      href={type.href}
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-3 py-2">
              <button
                onClick={() => toggleDropdown('mobile-buyers')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium"
              >
                Buyers
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-buyers' && (
                <div className="pl-4 mt-2 space-y-1">
                  {buyerResources.map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-3 py-2">
              <button
                onClick={() => toggleDropdown('mobile-resources')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium"
              >
                Resources
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-resources' && (
                <div className="pl-4 mt-2 space-y-1">
                  <Link
                    href="/faq"
                    className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/faq/las-vegas-hyperlocal"
                    className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Las Vegas Hyperlocal Q&A
                  </Link>
                  <div className="pt-2 pb-1 text-xs font-semibold text-gray-500 uppercase">Blog</div>
                  {blogPosts.map((post) => (
                    <Link
                      key={post.href}
                      href={post.href}
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {post.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/work-with-dr-jan"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Work with Dr. Jan
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Century
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:7029034687"
              className="block w-full mx-3 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Call Dr. Jan: (702) 903-4687
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
