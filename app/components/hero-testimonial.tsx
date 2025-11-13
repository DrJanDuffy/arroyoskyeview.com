export default function HeroTestimonial() {
  return (
    <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md max-w-2xl mx-auto mb-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <blockquote className="text-gray-700 italic mb-2">
            "Dr. Duffy caught structural issues during construction monitoring that would've cost us $3K+ to fix after warranty expired. She represents buyers, not builders—and that made all the difference."
          </blockquote>
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">Recent Buyer</span>
            <span className="text-sm text-gray-600">• Arroyo at Skyeview Homes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

