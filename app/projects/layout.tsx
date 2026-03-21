import RealScoutOfficeWidget from '../components/realscout-office-widget'

/**
 * Project routes do not use the site Footer; include the same RealScout office
 * listings section so MLS search appears on every page.
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
