import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../data/types'
import { isTodo } from '../data/utils'

type ProjectCardProps = {
  project: Project
  onOpen: (trigger: HTMLButtonElement) => void
}

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const visibleHighlights = project.highlights.filter((highlight) => !isTodo(highlight)).slice(0, 4)
  const visibleTech = project.tech.filter((technology) => !isTodo(technology))

  return (
    <article className="interactive-card flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-lg">
      <button type="button" onClick={(event) => onOpen(event.currentTarget)} className="text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">{project.category}</span>
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${project.status === 'Completed' ? 'bg-green-500/15 text-green-500' : 'bg-amber-500/15 text-amber-500'}`}>
            {project.status}
          </span>
        </div>
        <h3 className="mt-5 text-xl font-semibold leading-snug text-text">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.role} · {project.context}</p>
        <p className="mt-5 leading-7 text-muted">{project.description}</p>
        {visibleHighlights.length > 0 && (
          <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
            {visibleHighlights.map((highlight) => <li key={highlight} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{highlight}</li>)}
          </ul>
        )}
      </button>
      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
        <div className="flex flex-wrap gap-2">
          {visibleTech.map((technology) => <span key={technology} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">{technology}</span>)}
        </div>
        {(project.links?.repo || project.links?.demo) && (
          <div className="flex gap-2">
            {project.links.repo && !isTodo(project.links.repo) && <a aria-label={`${project.title} repository`} href={project.links.repo} target="_blank" rel="noopener noreferrer" className="rounded-md p-1.5 text-muted hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"><Github size={17} /></a>}
            {project.links.demo && !isTodo(project.links.demo) && <a aria-label={`${project.title} demo`} href={project.links.demo} target="_blank" rel="noopener noreferrer" className="rounded-md p-1.5 text-muted hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"><ExternalLink size={17} /></a>}
          </div>
        )}
      </div>
    </article>
  )
}
