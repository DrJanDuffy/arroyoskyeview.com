export default function MoreWaysToStreamline() {
  const affiliates = [
    {
      name: 'Inspire Homeloans',
      description: 'In-house mortgage financing',
      logo: '/images/affiliates/inspire.svg',
    },
    {
      name: 'Parkway Title',
      description: 'Title services',
      logo: '/images/affiliates/parkway.svg',
    },
    {
      name: 'IHL Home Insurance',
      description: 'Insurance services',
      logo: '/images/affiliates/ihl.svg',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          More ways to streamline
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Our affiliate companies allow you to make the process even easier, offering everything from 
          in-house mortgage financing to title and insurance services. With everything under the same 
          roof, you\'ll enjoy a more seamless experience that allows you to focus more on the excitement 
          of buying your dream home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {affiliates.map((affiliate, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-md transition">
              <div className="h-24 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm font-medium">
                  {affiliate.name}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {affiliate.name}
              </h3>
              <p className="text-gray-600">
                {affiliate.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/contact-us" className="text-blue-600 hover:text-blue-700 font-medium">
            Learn more →
          </a>
        </div>
      </div>
    </section>
  )
}

