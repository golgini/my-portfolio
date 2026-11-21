import { Code2, Network, Shield, Wrench, type LucideIcon } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'

const groups: Array<{ title: string; description: string; icon: LucideIcon; items: string[] }> = [
  { title: 'Cybersecurity', description: 'Defensive foundations and investigation thinking.', icon: Shield, items: ['Vulnerability assessment', 'Network security', 'Threat analysis', 'Digital forensics', 'Security monitoring'] },
  { title: 'Programming & development', description: 'Small tools, interfaces and automation experiments.', icon: Code2, items: ['Python', 'JavaScript', 'HTML', 'CSS', 'Git', 'Automation'] },
  { title: 'Systems & infrastructure', description: 'Practical administration across local environments.', icon: Network, items: ['Kali Linux', 'Linux administration', 'Windows environments', 'Networking', 'Virtual machines'] },
  { title: 'Security tools', description: 'Tools used in coursework, labs and demonstrations.', icon: Wrench, items: ['Wireshark', 'Nmap', 'Burp Suite', 'GitHub', 'Event Viewer'] },
]

export const Toolbox = () => <section id="skills" className="section-block scroll-mt-[76px]"><div className="section-kicker">03 / Expertise</div><SectionTitle first="Tools for" accent="better questions." /><p className="section-intro">A practical toolkit in development — grouped by the kinds of problems I want to understand and solve.</p><div className="expertise-grid">{groups.map(({ title, description, icon: Icon, items }) => <article className="expertise-item" key={title}><div className="expertise-icon"><Icon size={19} /></div><h3>{title}</h3><p>{description}</p><div className="expertise-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></section>
