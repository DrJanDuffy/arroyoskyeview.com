import Link from 'next/link'
import { cn } from '@/lib/utils'

const check = (
  <svg className="mx-auto h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
)

export default function HowWeMakeItEasy() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Expert Buyer Representation Makes New Construction Homebuying Easy
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground">
          Dr. Jan Duffy provides expert buyer representation for new construction homes in northwest Las Vegas, Nevada (zip code 89166), including Arroyo at Skyeview Homes and other Skye Canyon communities. Her construction monitoring every 7-10 days, building standards inspection at closing, and insider knowledge of Skye Canyon communities help you navigate all options and secure competitive pricing.
        </p>

        <div className="surface-elevated overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Custom Build Options</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Quick Move-In Homes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Purchase a to-be-built home</td>
                  <td className="px-6 py-4 text-center">{check}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-muted-foreground">—</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Purchase a quick move-in home</td>
                  <td className="px-6 py-4 text-center">{check}</td>
                  <td className="px-6 py-4 text-center">{check}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Buy online</td>
                  <td className="px-6 py-4 text-center">{check}</td>
                  <td className="px-6 py-4 text-center">{check}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-border bg-muted/50 px-6 py-4">
            <p className="mb-2 text-sm text-muted-foreground">
              <strong className="text-foreground">Custom Build Options:</strong> At Arroyo at Skyeview Homes and other Skye Canyon communities, you can pick your homesite and build from the ground up—personalizing your floor plan with structural and design options along the way. Dr. Jan Duffy, your buyer&apos;s agent, guides you through the process and ensures you get the best deal and quality construction.
            </p>
            <p className="mb-2 text-sm text-muted-foreground">
              <strong className="text-foreground">Quick Move-In Homes:</strong> If you need a faster timeline, builders in Skye Canyon (zip code 89166) including Arroyo at Skyeview Homes, Sierra at Skyeview, and Terra at Skyeview offer quick move-in townhomes. Dr. Jan Duffy helps you find the best quick move-in options for your timeline and budget in northwest Las Vegas.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Buy online:</strong> New construction homes at Arroyo at Skyeview Homes and other Skye Canyon communities offer online purchase options—allowing you to purchase your new home completely online with expert buyer representation from Dr. Jan Duffy.{' '}
              <Link
                href="/homebuying-process"
                className={cn(
                  'font-medium text-primary underline underline-offset-2',
                  'hover:text-primary/90 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                )}
              >
                Learn more →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
