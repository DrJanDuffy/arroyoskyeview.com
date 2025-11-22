import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BuildCareer() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Build Your New Construction Home with Expert Buyer Representation
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Dr. Jan Duffy provides expert buyer representation for new construction homes in Las Vegas, 
          including Arroyo at Skyeview Homes in Skye Canyon. With construction monitoring every 7-10 days, 
          building standards inspections, and insider knowledge of builder incentives, she ensures you 
          get the best deal and quality construction on your new home.
        </p>
        <Button
          asChild
          className="bg-white text-blue-600 hover:bg-gray-100 mt-8"
          size="lg"
        >
          <Link href="/work-with-dr-jan">Learn More About Buyer Representation →</Link>
        </Button>
      </div>
    </section>
  )
}

