import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function GetInTouch() {
  return (
    <section className="bg-linear-to-r from-primary to-primary/88 py-16 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
          GET IN TOUCH
        </h2>
        <p className="mb-8 text-xl text-primary-foreground/90">
          Dr. Jan Duffy, New Construction Home Expert, is available to help you with everything from prequalification 
          to finding the right new construction home at Arroyo at Skyeview Homes or other Skye Canyon communities in northwest Las Vegas (zip code 89166).
        </p>
        <Button
          asChild
          size="lg"
          className={cn(
            'min-h-11 font-semibold shadow-sm',
            'bg-background text-primary hover:bg-background/90',
          )}
        >
          <a href="tel:7029034687">Call Dr. Jan Duffy: (702) 903-4687</a>
        </Button>
      </div>
    </section>
  )
}

