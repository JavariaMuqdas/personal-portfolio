import { useState } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-pin border border-line bg-bg/80 px-5 py-3 shadow-pin backdrop-blur-md">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-700 to-rose-700 text-sm font-bold text-white">
            JM
          </span>
          Javaria
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-surfaceHover hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-rose-700 px-5 py-2 text-sm font-semibold text-white  hover:bg-rose-800"
          >
            Let's talk
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-4 bg-ink"></span>
            <span className="block h-0.5 w-4 bg-ink"></span>
          </div>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-pin border border-line bg-surface p-4 shadow-pin md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-surfaceHover hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-rose-700 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
