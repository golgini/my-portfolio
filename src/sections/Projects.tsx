import { ArrowUpRight, LockKeyhole, Network, ScanSearch } from 'lucide-react'
import { useRef, useState } from 'react'
import { ProjectDialog } from '../components/ProjectDialog'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/projects'
import type { Project } from '../data/types'

const featured = projects.filter((project) => ['anti-phishing', 'two-machine-home-lab', 'python-log-analyser', 'network-traffic-analysis'].includes(project.id))
const icons = [ScanSearch, Network, LockKeyhole, ScanSearch]

export const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const close = () => { setSelected(null); triggerRef.current?.focus() }
  return <section id="portfolio" className="section-block scroll-mt-[76px]"><div className="section-kicker">05 / Featured projects</div><SectionTitle first="Ideas engineered into" accent="solutions." /><p className="section-intro">A growing record of practical experiments. Completed work is distinguished from prototypes and learning projects.</p><div className="project-showcase">{featured.map((project, index) => { const Icon = icons[index % icons.length]; return <article className={`project-feature ${index % 2 ? 'reverse' : ''}`} key={project.id}><button type="button" className="project-preview" onClick={(event) => { triggerRef.current = event.currentTarget; setSelected(project) }} aria-label={`Open ${project.title}`}><div className="preview-header"><span>PROJECT {String(index + 1).padStart(2, '0')}</span><span>{project.status}</span></div><div className="preview-visual"><Icon size={54} strokeWidth={1.1} /><div className="preview-lines"><span /><span /><span /></div><b>{project.category.toUpperCase()}</b></div><div className="preview-footer"><span>VIEW SYSTEM MAP</span><ArrowUpRight size={16} /></div></button><div className="project-copy"><div className="section-kicker">{project.role} / {project.context}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tech.filter((tech) => !tech.startsWith('TODO')).slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div><button type="button" className="text-action" onClick={() => setSelected(project)}>View project <ArrowUpRight size={16} /></button></div></article> })}</div><ProjectDialog project={selected} onClose={close} /></section>
}
