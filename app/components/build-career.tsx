import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function BuildCareer() {
  return (
    <section className="bg-linear-to-r from-primary to-primary/88 py-16 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Build Your New Construction Home with Expert Buyer Representation
        </h2>
        <p className="mb-8 text-xl text-primary-foreground/90">
          Dr. Jan Duffy provides expert buyer representation for new construction homes in Las Vegas, 
          including Arroyo at Skyeview Homes in Skye Canyon. With construction monitoring every 7-10 days, 
          building standards inspections, and insider knowledge of builder incentives, she ensures you 
          get the best deal and quality construction on your new home.
        </p>
        <Button
          asChild
          size="lg"
          className={cn(
            'mt-8 min-h-11 font-semibold shadow-sm',
            'bg-background text-primary hover:bg-background/90',
          )}
        >
          <Link href="/work-with-dr-jan">Learn More About Buyer Representation →</Link>
        </Button>
      </div>
    </section>
  )
}

