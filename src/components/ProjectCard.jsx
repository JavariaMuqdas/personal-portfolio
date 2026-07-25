import { useState } from 'react'
import { ChevronDown, Github, ExternalLink, Clock, CheckCircle2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal.js'

export default function ProjectCard({ project, delay = 0 }) {
  const [open, setOpen] = useState(false)
  const ref = useReveal()
  const [cover, ...rest] = project.images || []
  const isShipped = project.status === 'shipped'

  return (
    <article
      ref={ref}
      className="reveal group overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-lineStrong"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Cover image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-raised">
        {cover && (
          <img
            src={cover}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />

        {/* status badge */}
        <div className="absolute left-3 top-3">
          {isShipped ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-pink-400 backdrop-blur">
              <CheckCircle2 size={11} /> Shipped
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-pink-400 backdrop-blur">
              <Clock size={11} /> In development
            </span>
          )}
        </div>

        {/* title overlaid on image */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-pink-600">{project.tag}</p>
          <h3 className="mt-0.5 font-display text-xl font-semibold text-ink">{project.title}</h3>
          <p className="mt-0.5 text-sm text-muted">{project.tagline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="text-sm leading-relaxed text-muted">{project.blurb}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-raised px-2.5 py-1 font-mono text-[10px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Read more toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-pink-800 hover:text-pink-500"
          aria-expanded={open}
        >
          {open ? 'Show less' : 'Read more'}
          <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>

        {/* Accordion panel */}
        <div className={`accordion-grid ${open ? 'is-open' : ''}`}>
          <div className="accordion-inner">
            <div className="pt-4">
              <div className="space-y-3 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                {project.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {rest.length > 0 && (
                <div className="mt-4">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-faint">More screens</p>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {rest.map((src) => (
                      <div
                        key={src}
                        className="aspect-video overflow-hidden rounded-lg border border-line bg-raised"
                      >
                        <img src={src} alt="" className="h-full w-full object-cover object-top" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-rose-700 px-4 py-2 text-xs font-semibold text-bg hover:bg-coralDark"
                  >
                    <ExternalLink size={13} /> View live
                  </a>
                )}
                {project.links.code ? (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink hover:border-lineStrong hover:bg-raised"
                  >
                    <Github size={13} /> Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-faint">
                    {isShipped ? 'Repo private' : 'Not public yet'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
