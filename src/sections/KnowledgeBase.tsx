import { ArrowUpRight, BookOpen, Clock3 } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'

const notes = [
  ['Lab note 01', 'How SSH remote administration works', 'Infrastructure', '6 min read'],
  ['Lab note 02', 'Windows Firewall, ICMP and troubleshooting', 'Networking', '8 min read'],
  ['Lab note 03', 'Preserving integrity in digital evidence', 'Forensics', '7 min read'],
]

export const KnowledgeBase = () => <section id="knowledge" className="section-block scroll-mt-[76px]"><div className="section-kicker">08 / Knowledge base</div><SectionTitle first="Notes from" accent="the lab" /><div className="notes-grid">{notes.map(([number, title, category, duration]) => <article className="note-card" key={title}><div className="note-top"><span>{number}</span><BookOpen size={18} /></div><h3>{title}</h3><div className="note-meta"><span>{category}</span><span><Clock3 size={14} />{duration}</span></div><button type="button" className="note-link">Read when published <ArrowUpRight size={16} /></button></article>)}</div></section>
