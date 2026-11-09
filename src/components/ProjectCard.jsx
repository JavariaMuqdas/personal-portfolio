import { useState } from 'react'
import { ChevronDown, Github, ExternalLink, Clock, CheckCircle2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal.js'

export default function ProjectCard({ project, delay = 0 }) {
  const [open, setOpen] = useState(false)
  const ref = useReveal()
  const [cover, ...rest] = project.images || []
  const isShipped = project.status === 'shipped'
  const visibleStack = open ? project.stack : project.stack.slice(0, 4)
  const hiddenStack = open ? [] : project.stack.slice(4)

  return (
    <article
      ref={ref}
      className="reveal card-hover group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Cover image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-raised">
        {cover && (
          <img
            src={cover}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
        <div className="absolute inset-0 bg-rose-700/0 transition-colors duration-500 group-hover:bg-rose-700/10" />

        {/* status badge */}
        {/* <div className="absolute left-3 top-3">
          {isShipped ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-rose-700 backdrop-blur">
              <CheckCircle2 size={11} /> Shipped
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-rose-700 backdrop-blur">
              <Clock size={11} /> In development
            </span>
          )}
        </div> */}

        {/* title overlaid on image */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-rose-700">{project.tag}</p>
          <h3 className="mt-0.5 truncate font-display text-xl font-semibold text-ink">{project.title}</h3>
          <p className="mt-0.5 truncate text-sm text-muted">{project.tagline}</p>
        </div>
      </div>

      {/* Body — fixed-height blurb and stack rows keep every collapsed card the same size */}
      <div className="flex flex-1 flex-col p-5">
        <p className={`text-sm leading-relaxed text-muted ${open ? '' : 'line-clamp-3 min-h-[4.27rem]'}`}>
          {project.blurb}
        </p>

        <div className={`mt-3 flex flex-wrap content-start gap-1.5 ${open ? '' : 'h-[3.5rem] overflow-hidden'}`}>
          {visibleStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-raised px-2.5 py-1 font-mono text-[10px] text-muted transition-colors duration-300 hover:border-rose-700/60 hover:text-ink"
            >
              {tech}
            </span>
          ))}
          {hiddenStack.length > 0 && (
            <span
              title={hiddenStack.join(', ')}
              className="rounded-full border border-rose-700/40 bg-rose-700/10 px-2.5 py-1 font-mono text-[10px] text-ink"
            >
              +{hiddenStack.length}
            </span>
          )}
        </div>

        {/* Read more toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-4 flex items-center gap-1.5 self-start text-sm font-semibold text-rose-700 transition-colors hover:text-rose-500"
          aria-expanded={open}
        >
          {open ? 'Show less' : 'Read more'}
          <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>

        {/* Accordion panel */}
        <div className={`accordion-grid ${open ? 'is-open' : ''}`}>
          <div className="accordion-inner">
            <div className="pt-4">
              <div className="space-y-3 border-t border-line pt-4 text-sm leading-relaxed text-muted">                {project.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-700" />
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
                    className="btn-shine inline-flex items-center gap-1.5 rounded-full bg-rose-700 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-800"
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
