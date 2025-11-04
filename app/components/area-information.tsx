export default function AreaInformation() {
  const schools = [
    'Divich Elementary School',
    'Escobedo Middle School',
    'Arbor View High School',
  ]

  const shopping = [
    { name: 'Sprouts Farmers Market', address: 'Las Vegas, NV 89128' },
    { name: "Smith's Food and Drug", address: 'Las Vegas, NV 89106' },
    { name: 'Montecito Marketplace', address: 'Las Vegas, NV 89149' },
    { name: 'The Shoppes', address: 'Las Vegas, NV 89166' },
    { name: "Lowe's Home Improvement", address: 'Las Vegas, NV 89119' },
  ]

  const dining = [
    { name: 'Buffalo Wild Wings', address: 'Las Vegas, NV 89166' },
    { name: 'Baby Stacks Cafe', address: 'Las Vegas, NV 89166' },
    { name: 'Michocan Mexican', address: 'Las Vegas, NV 89166' },
    { name: 'Starbucks', address: 'Las Vegas, NV 89166' },
    { name: 'Cafe Rio', address: 'Las Vegas, NV 89166' },
    { name: 'Thai Spoon', address: 'Las Vegas, NV 89166' },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Area Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Schools */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Schools
          </h3>
          <ul className="space-y-3">
            {schools.map((school, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{school}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Shopping */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Shopping
          </h3>
          <ul className="space-y-3">
            {shopping.map((place, index) => (
              <li key={index} className="text-gray-700">
                <div className="font-medium">{place.name}</div>
                <div className="text-sm text-gray-600">{place.address}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Dining */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            Dining
          </h3>
          <ul className="space-y-3">
            {dining.map((restaurant, index) => (
              <li key={index} className="text-gray-700">
                <div className="font-medium">{restaurant.name}</div>
                <div className="text-sm text-gray-600">{restaurant.address}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

