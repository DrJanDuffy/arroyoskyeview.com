import { Button } from '@/components/ui/button'

export default function GetInTouch() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          GET IN TOUCH
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Dr. Jan Duffy, New Construction Home Expert, is available to help you with everything from prequalification 
          to finding the right new construction home at Arroyo at Skyeview Homes or other Skye Canyon communities in northwest Las Vegas (zip code 89166).
        </p>
        <Button
          asChild
          className="bg-white text-blue-600 hover:bg-gray-100"
          size="lg"
        >
          <a href="tel:7029034687">Call Dr. Jan Duffy: (702) 903-4687</a>
        </Button>
      </div>
    </section>
  )
}

