import Link from 'next/link'

const affiliates = [
  {
    name: 'Inspire Home Loans',
    tagline: 'best-in-class homebuying services',
    description: 'Offering a wide range of financing options, Inspire Home Loans® will help you secure the best mortgage for your dream home.',
    logo: '/images/affiliates/inspire.svg',
  },
  {
    name: 'Parkway Title',
    tagline: 'best-in-class homebuying services',
    description: 'A full-service agency, Parkway Title delivers cost-effective and streamlined title insurance and settlement service solutions.',
    logo: '/images/affiliates/parkway.svg',
  },
  {
    name: 'IHL',
    tagline: 'best-in-class homebuying services',
    description: 'Quick, precise and easy to work with, the full-service team at IHL Home Insurance® will find the best coverage to protect your dream home, at the best price.',
    logo: '/images/affiliates/ihl.svg',
  },
]

export default function OurAffiliates() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Our Affiliates
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center italic">
          best-in-class homebuying services
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {affiliates.map((affiliate, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="h-24 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-gray-600 font-semibold text-lg">
                  {affiliate.name}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {affiliate.name}
              </h3>
              <p className="text-gray-700 mb-6">
                {affiliate.description}
              </p>
              <Link 
                href="#" 
                className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

