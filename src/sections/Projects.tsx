import { SectionTitle } from '../components/SectionTitle'
import { useMemo, useRef, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { ProjectDialog } from '../components/ProjectDialog'
import { SHOW_MAP } from '../config'
import { projects } from '../data/projects'
import type { Project } from '../data/types'

const orderedProjects = [...projects].sort((first, second) => {
  if (first.id === 'anti-phishing') return -1
  if (second.id === 'anti-phishing') return 1
  return 0
})

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | Project['category']>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const categories: Array<'All' | Project['category']> = ['All', ...Array.from(new Set(projects.map((project) => project.category)))]
  const visibleProjects = useMemo(() => activeCategory === 'All' ? orderedProjects : orderedProjects.filter((project) => project.category === activeCategory), [activeCategory])

  const closeDialog = () => {
    setSelectedProject(null)
    triggerRef.current?.focus()
  }

  return (
    <section id="portfolio" className="scroll-mt-[72px] border-b border-border py-20">
      <SectionTitle first="Featured" accent="Projects" />
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" aria-label="Project filters">
          {categories.map((category) => (
            <button key={category} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${activeCategory === category ? 'border-accent bg-accent text-white' : 'border-border text-muted hover:border-accent hover:text-accent'}`}>
              {category}
            </button>
          ))}
        </div>
        {SHOW_MAP && <button type="button" className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-muted">View map</button>}
      </div>
      {visibleProjects.length > 0 ? (
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 90} className="h-full">
              <ProjectCard project={project} onOpen={(trigger) => { triggerRef.current = trigger; setSelectedProject(project) }} />
            </Reveal>
          ))}
        </div>
      ) : <p className="mt-8 rounded-2xl border border-dashed border-border p-8 text-center text-muted">No projects in this category yet.</p>}
      <ProjectDialog project={selectedProject} onClose={closeDialog} />
    </section>
  )
}
