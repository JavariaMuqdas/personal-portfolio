import { useReveal } from '../hooks/useReveal.js'

const points = [
  {
    title: 'I build the whole stack',
    body: 'From a MySQL schema to a React interface, I own the path a request takes end to end.',
  },
  {
    title: 'I think in real users',
    body: 'Every screen is built for the person clicking it — students, vendors, admins — not just for the demo.',
  },
  {
    title: 'I ship working products',
    body: 'Deployed, database-backed, and usable — not a prototype that only runs on localhost.',
  },
  {
    title: 'I sweat the details',
    body: 'Form validation, edge cases, and pixel-accurate layouts are part of the job, not an afterthought.',
  },
]

export default function About() {
  const headRef = useReveal()

  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div ref={headRef} className="reveal">
          <p className="font-mono text-xs uppercase tracking-wider text-rose-700">About</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            I enjoy taking an idea from a blank schema to a working, deployed product.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-muted">
            <p>
              I'm a Computer Science student finishing my degree, but I already build
              like someone shipping real products. I'm less interested in collecting
              tutorials and more interested in understanding how a request actually
              moves through a system — from a form, through validation, into a
              database, and back out to a screen someone else is looking at.
            </p>
            <p>
              Most of my projects start the same way: a real workflow that needs a
              proper interface and a database behind it — a hiring platform matching
              students to jobs, a marketplace that needs to move money safely, a store
              that needs to take real orders. Then I build the React frontend and
              Laravel backend to make it work end to end.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {points.map((point, i) => {
            return <AboutCard key={point.title} point={point} delay={i * 80} />
          })}
        </div>
      </div>
    </section>
  )
}

function AboutCard({ point, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-lineStrong hover:bg-surfaceHover"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-display text-lg font-semibold text-ink">{point.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{point.body}</p>
    </div>
  )
}
