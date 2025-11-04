import { Button } from '@/components/ui/button'

export default function GetInTouch() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          GET IN TOUCH
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Our New Home Specialists are standing by to help you with everything from prequalification 
          to finding the right home in your area of interest.
        </p>
        <Button
          asChild
          className="bg-white text-blue-600 hover:bg-gray-100"
          size="lg"
        >
          <a href="#contact">Contact us</a>
        </Button>
      </div>
    </section>
  )
}

