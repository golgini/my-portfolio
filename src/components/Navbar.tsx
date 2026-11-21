import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const navigationItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Expertise', id: 'skills' },
  { label: 'Projects', id: 'portfolio' },
  { label: 'Lab', id: 'lab' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export const Navbar = () => {
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
    <header className="site-header">
      <nav aria-label="Primary navigation" className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a className="brand-mark" href="#home" onClick={closeMenu}><span className={`brand-mark-symbol ${profile.photoUrl ? 'has-photo' : ''}`}>{profile.photoUrl ? <img src={profile.photoUrl} alt={`${profile.name} portrait`} /> : <span>SM</span>}</span><span>{profile.shortName}<small> / SECURITY &amp; IT</small></span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a className="nav-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg border border-border p-2 text-muted focus:outline-none focus:ring-2 focus:ring-accent md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-navigation border-t border-border px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                className={`mobile-nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                href={`#${item.id}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 border-t border-border pt-4">
              <a className="nav-cta inline-flex" href="#contact" onClick={closeMenu}>
                Let&apos;s talk <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
