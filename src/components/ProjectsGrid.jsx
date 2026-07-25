import { projects } from '../components/data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function ProjectsGrid() {
  const headRef = useReveal()

  return (
    <section id="work" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div ref={headRef} className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-pink-700">Featured Work</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Products built end to end, not demos that stop at the UI.
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-pink-400 hover:underline">
            Let's build yours →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
