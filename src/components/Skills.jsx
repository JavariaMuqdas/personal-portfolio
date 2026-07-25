import { projects,skillGroups } from '../components/data/projects.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Skills() {
  const headRef = useReveal()

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div ref={headRef} className="reveal">
          <p className="font-mono text-xs uppercase tracking-wider text-rose-700">Skills</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The toolkit behind the products I build.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ group, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-lineStrong"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-display text-base font-semibold text-ink">{group.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-raised px-3 py-1.5 text-xs font-medium text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
