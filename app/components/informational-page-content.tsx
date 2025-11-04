import PageQASection from './page-qa-section'
import Link from 'next/link'

interface InformationalPageContentProps {
  title: string
  h1: string
  sections: Array<{
    h2: string
    content: string
    h3s?: Array<{ h3: string; content: string }>
  }>
  questions: Array<{ question: string; answer: string }>
}

export default function InformationalPageContent({
  title,
  h1,
  sections,
  questions,
}: InformationalPageContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{h1}</h1>

      {sections.map((section, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.h2}</h2>
          <p className="text-lg text-gray-700 mb-4">{section.content}</p>

          {section.h3s?.map((h3Item, h3Index) => (
            <div key={h3Index} className="mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{h3Item.h3}</h3>
              <p className="text-lg text-gray-700 mb-4">{h3Item.content}</p>
            </div>
          ))}
        </section>
      ))}

      <PageQASection questions={questions} title={`${title}: Frequently Asked Questions`} />
    </div>
  )
}

