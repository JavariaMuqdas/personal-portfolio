import { useEffect, useState } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  // Scroll progress (0–1) drives the rose bar along the top of the page
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
    <div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-rose-700 shadow-[0_0_10px_rgba(190,18,60,0.7)]"
      style={{ transform: `scaleX(${progress})` }}
    />
    <header className="sticky top-4 z-50 animate-fadeUp px-4 sm:px-6">
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
              className="relative rounded-full px-4 py-2 text-sm font-medium text-muted transition after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-rose-700 after:transition-transform after:duration-300 hover:bg-surfaceHover hover:text-ink hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-shine inline-block rounded-full bg-rose-700 px-5 py-2 text-sm font-semibold text-white hover:bg-rose-800"
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
    </>
  )
}
