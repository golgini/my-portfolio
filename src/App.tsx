import { Moon, Sun } from 'lucide-react'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Engagements } from './sections/Engagements'
import { Hero } from './sections/Hero'
import { Journey } from './sections/Journey'
import { Process } from './sections/Process'
import { Projects } from './sections/Projects'
import { Toolbox } from './sections/Toolbox'
import { useTheme } from './hooks/useTheme'

export const App = () => {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="sticky top-0 z-10 border-b border-border bg-bg/95 backdrop-blur">
        <nav aria-label="Primary navigation" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a className="font-semibold tracking-tight" href="#home">Portfolio</a>
          <button type="button" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} className="rounded-lg border border-border p-2 text-muted transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-accent">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Process />
        <Toolbox />
        <Projects />
        <Journey />
        <Education />
        <Engagements />
        <Contact />
      </main>
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted">Footer placeholder</footer>
    </div>
  )
}
