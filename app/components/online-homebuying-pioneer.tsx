export default function OnlineHomebuyingPioneer() {
  const steps = [
    {
      id: 1,
      title: 'Explore',
      description: 'Browse available homes at Arroyo at Skyeview Homes and other Skye Canyon communities online',
    },
    {
      id: 2,
      title: 'Connect',
      description: 'Work with Dr. Jan Duffy for expert buyer representation throughout your home search',
    },
    {
      id: 3,
      title: 'Purchase',
      description: 'Complete your purchase with construction monitoring and building standards inspection',
    },
  ]

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Streamlined New Construction Homebuying Process
        </h2>
        <p className="text-xl text-blue-100 mb-8 text-center max-w-3xl mx-auto">
          Dr. Jan Duffy simplifies the new construction homebuying process for Arroyo at Skyeview Homes 
          and other Skye Canyon communities, providing expert guidance from initial search through closing.
        </p>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            How Buyer Representation Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-white/30 transform translate-x-1/2"></div>
                  )}
                </div>
                <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                <p className="text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white/10 rounded-lg p-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">Expert Buyer Representation at No Extra Cost</h4>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Builders pay for buyer representation on all new construction homes, including Arroyo at Skyeview Homes. 
                This means you're already funding an agent—choose Dr. Jan Duffy, who works exclusively for HOME BUYERS, 
                not the builder. Get construction monitoring, building standards inspection, and insider knowledge of 
                builder incentives at no additional cost to you.
              </p>
              <a
                href="tel:7029034687"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Call Dr. Jan Duffy: (702) 903-4687
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

