import Link from 'next/link'

export default function Footer() {
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

  const resources = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Las Vegas Hyperlocal Q&A', href: '/faq/las-vegas-hyperlocal' },
  ]

  const blogPosts = [
    { name: 'New Home Inventory 2x Normal', href: '/blog/new-home-inventory-2x' },
    { name: 'Housing Market Crash 2025?', href: '/blog/housing-market-crash-2025' },
    { name: 'Market Passed You By?', href: '/blog/market-passed-you-by' },
    { name: 'Buying Home with Student Loans', href: '/blog/buying-home-with-student-loans' },
    { name: 'Sale Crosses Finish Line', href: '/blog/sale-crosses-finish-line' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Work with Dr. Jan */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Work with Dr. Jan Duffy</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">
                Century Communities Preferred Buyer's Agent
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Expert representation on new construction with construction monitoring, building standards inspection & insider knowledge.
              </p>
              <a
                href="tel:7029034687"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition mb-2"
              >
                Call: (702) 903-4687
              </a>
            </div>
            <Link
              href="/work-with-dr-jan"
              className="text-sm text-blue-400 hover:text-blue-300 underline"
            >
              Learn More About Dr. Jan →
            </Link>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Communities */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Communities</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {communities.map((community) => (
                <li key={community.href}>
                  <Link href={community.href} className="hover:text-white transition">
                    {community.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods & Property Types */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Neighborhoods</h4>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              {neighborhoods.map((neighborhood) => (
                <li key={neighborhood.href}>
                  <Link href={neighborhood.href} className="hover:text-white transition">
                    {neighborhood.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mb-4 text-white">Property Types</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {propertyTypes.map((type) => (
                <li key={type.href}>
                  <Link href={type.href} className="hover:text-white transition">
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyers */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Buyers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {buyerResources.map((resource) => (
                <li key={resource.href}>
                  <Link href={resource.href} className="hover:text-white transition">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link href={resource.href} className="hover:text-white transition">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mb-4 text-white">Blog</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {blogPosts.map((post) => (
                <li key={post.href}>
                  <Link href={post.href} className="hover:text-white transition">
                    {post.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">About</h4>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>
                <Link href="/about-us" className="hover:text-white transition">
                  About Century
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Las Vegas Century Communities Realtor, Dr. Jan Duffy Nevada License #S.0197614, All Rights Reserved.</p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Terms Of Use
              </Link>
              <Link href="#" className="hover:text-white transition">
                Accessibility Statement
              </Link>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center md:text-left">
            Century Communities is an equal housing opportunity provider.
          </p>
        </div>
      </div>
    </footer>
  )
}
