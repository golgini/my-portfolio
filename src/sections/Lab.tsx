import { useMemo, useState } from 'react'
import { Activity, CircleDot, Command, LockKeyhole, Network, Server, ShieldCheck } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'

const events = [
  { type: 'AUTH', severity: 'low', text: 'Successful login · kali-lab', time: '09:14:22' },
  { type: 'NETWORK', severity: 'medium', text: 'New host observed · 192.168.1.24', time: '09:15:08' },
  { type: 'FIREWALL', severity: 'high', text: 'Inbound connection blocked · port 445', time: '09:16:41' },
]

export const Lab = () => {
  const [activeHost, setActiveHost] = useState<'router' | 'kali' | 'windows'>('kali')
  const [filter, setFilter] = useState('all')
  const [command, setCommand] = useState('')
  const [output, setOutput] = useState('Type help to see the available demonstrations.')
  const visibleEvents = useMemo(() => filter === 'all' ? events : events.filter((event) => event.severity === filter), [filter])
  const runCommand = () => {
    const responses: Record<string, string> = { help: 'about · skills · projects · network · contact · clear', about: 'A safe, simulated terminal for Sammy\'s learning lab.', skills: 'Python · Linux · Networking · Digital forensics', projects: 'Home lab · Anti-phishing system · Log analyser', network: 'router → kali-lab / windows-laptop', contact: profileEmail() }
    const normalized = command.trim().toLowerCase()
    setOutput(normalized === 'clear' ? '' : responses[normalized] ?? 'Command not available in this educational simulation.')
    setCommand('')
  }
  return <section id="lab" className="section-block scroll-mt-[76px]">
    <div className="section-kicker">04 / Inside the lab</div><SectionTitle first="Inside the" accent="Lab" /><p className="section-intro">Small, safe simulations that make the thinking behind my work visible. Every signal here is illustrative — no real scanning or shell execution takes place.</p>
    <div className="lab-layout">
      <div className="lab-network panel"><div className="panel-heading"><span>01 / network topology</span><Network size={18} /></div><div className="topology"><button className={`topology-node router ${activeHost === 'router' ? 'active' : ''}`} onClick={() => setActiveHost('router')}><Network size={22} /><b>ROUTER</b><small>192.168.1.1</small></button><div className="topology-line line-one" /><div className="topology-line line-two" /><button className={`topology-node host-kali ${activeHost === 'kali' ? 'active' : ''}`} onClick={() => setActiveHost('kali')}><Server size={22} /><b>KALI LAB</b><small>192.168.1.20</small></button><button className={`topology-node host-windows ${activeHost === 'windows' ? 'active' : ''}`} onClick={() => setActiveHost('windows')}><Server size={22} /><b>WINDOWS</b><small>192.168.1.24</small></button></div><div className="host-detail"><CircleDot size={15} /> <b>{activeHost === 'router' ? 'Gateway' : activeHost === 'kali' ? 'Linux investigation host' : 'Windows administration host'}</b><span>{activeHost === 'router' ? 'Routes local traffic' : activeHost === 'kali' ? 'SSH · evidence tooling · analysis' : 'Firewall · client · event logs'}</span></div></div>
      <div className="lab-events panel"><div className="panel-heading"><span>02 / security events</span><Activity size={18} /></div><div className="filter-row">{['all', 'low', 'medium', 'high'].map((item) => <button key={item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="event-list">{visibleEvents.map((event) => <div className="event-row" key={event.time}><span className={`severity ${event.severity}`} /><div><b>{event.text}</b><small>{event.type} · simulated event</small></div><time>{event.time}</time></div>)}</div></div>
      <div className="lab-terminal panel"><div className="panel-heading"><span>03 / safe terminal</span><Command size={18} /></div><p className="terminal-note">Educational interface · whitelist only</p><div className="terminal-output"><span className="text-accent">sammy@portfolio:~$</span> {output}</div><div className="terminal-input"><span>$</span><input aria-label="Simulation command" value={command} onChange={(event) => setCommand(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') runCommand() }} placeholder="try help" /><button onClick={runCommand}>run</button></div></div>
      <div className="ssh-card panel"><div className="panel-heading"><span>04 / SSH visualisation</span><LockKeyhole size={18} /></div><div className="ssh-flow"><span>CLIENT</span><i /><span>PORT 22</span><i /><span className="ssh-secure">ENCRYPTED SESSION</span></div><p>Educational simulation of a client initiating a secure remote session.</p><div className="lab-footnote"><ShieldCheck size={14} /> simulated data only</div></div>
    </div>
  </section>
}

const profileEmail = () => 'contact via #contact'
