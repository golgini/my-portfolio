import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'

const navigationItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Engagements', id: 'engagements' },
]

export const Navbar = () => {
  const { theme, toggle } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-72px 0px -45% 0px', threshold: [0.1, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-20 min-h-[72px] border-b border-border bg-surface/95 shadow-sm backdrop-blur">
      <nav aria-label="Primary navigation" className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between gap-6 px-6">
        <a className="shrink-0 font-bold tracking-tight text-accent" href="#home" onClick={closeMenu}>
          {profile.shortName}
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              className={`text-sm transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent ${activeSection === item.id ? 'text-accent' : 'text-muted'}`}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-lg border border-border p-2 text-muted transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent" href="#contact">
            Contact me
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg border border-border p-2 text-muted focus:outline-none focus:ring-2 focus:ring-accent lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-border bg-surface px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                className={`rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent ${activeSection === item.id ? 'bg-accent/10 text-accent' : 'text-muted'}`}
                href={`#${item.id}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3 border-t border-border pt-4">
              <button
                type="button"
                onClick={toggle}
                aria-label="Toggle theme"
                className="rounded-lg border border-border p-2 text-muted focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-accent" href="#contact" onClick={closeMenu}>
                Contact me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
