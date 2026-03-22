export default function HeroTestimonial() {
  return (
    <div className="surface-elevated mx-auto mb-8 max-w-2xl border-l-4 border-l-primary p-6 shadow-md">
      <div className="flex items-start space-x-4">
        <div className="shrink-0">
          <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <blockquote className="mb-2 italic text-muted-foreground">
            &quot;Dr. Jan Duffy caught structural issues during construction monitoring that would&apos;ve cost us $3K+ to fix after warranty expired. She represents buyers, not builders—and that made all the difference.&quot;
          </blockquote>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex text-amber-400" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">Recent Buyer</span>
            <span className="text-sm text-muted-foreground">• Arroyo at Skyeview Homes</span>
          </div>
        </div>
      </div>
    </div>
  )
}
