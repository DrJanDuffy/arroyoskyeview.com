import RealScoutOfficeWidget from '../components/realscout-office-widget'

/**
 * Project UI routes do not render the marketing Footer; include the same MLS
 * strip so RealScout appears here too (script still loads once from root layout).
 */
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
      <RealScoutOfficeWidget />
    </div>
  )
}
