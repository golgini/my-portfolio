import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Engagements } from './sections/Engagements'
import { Hero } from './sections/Hero'
import { Journey } from './sections/Journey'
import { Process } from './sections/Process'
import { Projects } from './sections/Projects'
import { Toolbox } from './sections/Toolbox'
import { TechnologyStrip } from './sections/TechnologyStrip'
import { Lab } from './sections/Lab'
import { KnowledgeBase } from './sections/KnowledgeBase'
import { Credentials } from './sections/Credentials'

export const App = () => {
  return (
    <div className="min-h-screen bg-bg text-text">
      <a href="#main-content" className="sr-only z-50 rounded-lg bg-accent px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-accent">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="mx-auto max-w-7xl px-5 sm:px-8">
      <Hero />
      <TechnologyStrip />
        <Process />
        <Toolbox />
        <Projects />
        <Lab />
        <Journey />
        <Education />
        <Credentials />
        <Engagements />
        <KnowledgeBase />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
