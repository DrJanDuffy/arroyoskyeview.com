const locations = [
  {
    name: 'Arroyo at Skyeview Sales Office',
    address: '8912 Vanhoy Crk St',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89166',
    phone: '(702) 903-4687',
    hours: 'Mon-Sun: 10:00 AM - 5:00 PM',
  },
  {
    name: 'Skye Canyon Sales Office',
    address: 'Skye Canyon',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89166',
    phone: '(702) 903-4687',
    hours: 'Mon-Sun: 10:00 AM - 5:00 PM',
  },
  {
    name: 'The Townes at Union Village',
    address: 'Union Village',
    city: 'Henderson',
    state: 'NV',
    zip: '89011',
    phone: '(702) 903-4687',
    hours: 'Mon-Sun: 10:00 AM - 5:00 PM',
  },
]

export default function ContactLocations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Sales Office Locations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {location.name}
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>{location.address}</p>
                <p>{location.city}, {location.state} {location.zip}</p>
                <p className="font-semibold text-blue-600 mt-4">
                  <a href="tel:7029034687" className="hover:text-blue-700 transition-colors">
                    {location.phone}
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {location.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

