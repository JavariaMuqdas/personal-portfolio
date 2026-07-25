export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-faint sm:flex-row">
        <p>© {new Date().getFullYear()} Javaria Muqadas</p>
        <p className="font-mono">Built with React · Vite · Tailwind CSS</p>
      </div>
    </footer>
  )
}
