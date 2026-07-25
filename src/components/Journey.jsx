import { journey } from '../components/data/projects.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Journey() {
  const headRef = useReveal()

  return (
    <section id="journey" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div ref={headRef} className="reveal">
          <p className="font-mono text-xs uppercase tracking-wider text-Rose-700">Journey</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From first line of code to shipped products.
          </h2>
        </div>

        <ol className="mt-12 space-y-10 border-l border-line pl-8">
          {journey.map((step, i) => (
            <JourneyStep key={step.title} step={step} delay={i * 70} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function JourneyStep({ step, delay }) {
  const ref = useReveal()
  return (
    <li ref={ref} className="reveal relative" style={{ transitionDelay: `${delay}ms` }}>
      <span className="absolute -left-[2.28rem] top-1 h-3 w-3 rounded-full border-2 border-Rose-700 bg-bg"></span>
      <p className="font-mono text-[10px] uppercase tracking-wider text-Rose-700">{step.stage}</p>
      <h3 className="mt-1 font-display text-lg font-semibold text-ink">{step.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
    </li>
  )
}
