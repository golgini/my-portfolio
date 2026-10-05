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

export const App = () => {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <Process />
        <Toolbox />
        <Projects />
        <Journey />
        <Education />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
