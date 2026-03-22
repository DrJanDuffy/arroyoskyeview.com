import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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
    <section className="bg-linear-to-r from-primary to-primary/88 py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Streamlined New Construction Homebuying Process
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-xl text-primary-foreground/90">
          Dr. Jan Duffy simplifies the new construction homebuying process for Arroyo at Skyeview Homes and other Skye Canyon communities, providing expert guidance from initial search through closing.
        </p>

        <div className="mt-12">
          <h3 className="mb-8 text-center text-2xl font-semibold">How Buyer Representation Works</h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div className="relative">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/20 text-3xl font-bold">
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-1/2 hidden h-0.5 w-full translate-x-1/2 bg-primary-foreground/30 md:block" />
                  )}
                </div>
                <h4 className="mb-2 text-2xl font-bold">{step.title}</h4>
                <p className="text-primary-foreground/90">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-primary-foreground/10 p-8">
            <div className="text-center">
              <h4 className="mb-4 text-2xl font-bold">Expert Buyer Representation at No Extra Cost</h4>
              <p className="mx-auto mb-6 max-w-2xl text-lg text-primary-foreground/90">
                Builders pay for buyer representation on all new construction homes, including Arroyo at Skyeview Homes. This means you&apos;re already funding an agent—choose Dr. Jan Duffy, who works exclusively for HOME BUYERS, not the builder. Get construction monitoring, building standards inspection, and insider knowledge of builder incentives at no additional cost to you.
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
          </div>
        </div>
      </div>
    </section>
  )
}
