import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BuildCareer() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Build your dream Career
        </h2>
        <Button
          asChild
          className="bg-white text-blue-600 hover:bg-gray-100 mt-8"
          size="lg"
        >
          <Link href="#careers">View Current Openings →</Link>
        </Button>
      </div>
    </section>
  )
}

