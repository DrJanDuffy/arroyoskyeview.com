export default function ContactHero() {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          Our New Home Specialists are standing by to help you with everything from prequalification 
          to finding the right home in your area of interest.
        </p>
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-lg font-semibold mb-2">Dr. Jan Duffy</p>
          <p className="text-blue-100 mb-2">Nevada Real Estate License #S.0197614</p>
          <p className="text-blue-100 mb-2">
            8912 Vanhoy Crk St<br />
            Las Vegas, NV 89166
          </p>
          <p className="text-xl font-bold mt-4">
            <a href="tel:7029034687" className="hover:text-blue-200 transition-colors">
              (702) 903-4687
            </a>
          </p>
          <p className="text-blue-100 mt-2">
            <a href="mailto:info@arroyoskyeview.com" className="hover:text-blue-200 transition-colors">
              info@arroyoskyeview.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

