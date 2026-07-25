import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:py-32">
      <div
        ref={ref}
        className="reveal mx-auto max-w-3xl rounded-pin border border-line bg-surface px-6 py-16 text-center shadow-pin sm:px-12"
      >
        <p className="font-mono text-xs uppercase tracking-wider text-rose-700">Open to opportunities</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Let's build something that actually ships.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          I'm looking for my first full-stack role — or freelance work — building
          products with React, Laravel, and MySQL. If that's what you're building,
          I'd love to talk.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:javaria.muqadas1@gmail.com"

            className="rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-800"
          >
            Email me
          </a>
          <a
            href="https://github.com/JavariaMuqdas"
            target="_blank" rel="noopener noreferrer"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surfaceHover"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/javaria-muqadas"
            target="_blank" rel="noopener noreferrer"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surfaceHover"
          >
            LinkedIn
          </a>
        </div>

        <a
          href="./Javaria Resume.pdf"
          target="_blank" rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink hover:underline"
        >
          Download resume ↓
        </a>
      </div>
    </section>
  )
}
