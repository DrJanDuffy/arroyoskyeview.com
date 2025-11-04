export default function OnlineHomebuyingPioneer() {
  const steps = [
    {
      id: 1,
      title: 'Shop',
      description: 'Browse available homes online',
    },
    {
      id: 2,
      title: 'Purchase',
      description: 'Complete your purchase entirely online',
    },
    {
      id: 3,
      title: 'Celebrate',
      description: 'Move into your new dream home',
    },
  ]

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Online Homebuying Pioneer
        </h2>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            How It Works
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
          
          <div className="mt-12 bg-white/10 rounded-lg p-6">
            <div className="h-48 bg-white/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                <p className="text-lg">Graphical user interface, text, application, chat or text message.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

