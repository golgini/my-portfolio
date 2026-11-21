import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { isTodo } from '../data/utils'

export const Hero = () => (
  <section id="home" className="hero-section scroll-mt-[76px]">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> Available for entry-level opportunities</div>
        <h1>I SECURE SYSTEMS.<br /><em>I ENGINEER TRUST.</em><br />I BUILD WHAT&apos;S NEXT.</h1>
        <p className="hero-role">Computer Security &amp; Forensics <span>/</span> IT Infrastructure <span>/</span> Cybersecurity</p>
        <p className="hero-description">I explore the intersection of technology, infrastructure and security — building practical solutions, investigating digital systems and developing the skills needed to make technology more reliable, resilient and secure.</p>
        <div className="hero-actions"><a href="#portfolio" className="button button-primary">Explore my work <ArrowDown size={17} /></a><a href="#contact" className="button button-secondary">Let&apos;s connect <ArrowUpRight size={17} /></a></div>
        <div className="hero-meta"><span>Based in {profile.location}</span><span className="meta-rule" /><span>Learning in public</span></div>
        <div className="social-row"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={17} />LinkedIn</a><a href={`mailto:${profile.email}`} className="social-link"><Mail size={17} />Email</a>{!isTodo(profile.github) && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link"><Github size={17} />GitHub</a>}</div>
      </div>
      <div className="hero-system" aria-label="Illustration of connected technical systems">
        <div className="system-grid" /><div className="system-orbit orbit-a" /><div className="system-orbit orbit-b" />
        <div className="system-core"><span className="core-ring ring-a" /><span className="core-ring ring-b" /><span className="core-cross" /><strong>SECURE<br />THE<br />SYSTEM</strong></div>
        <span className="system-node node-a" /><span className="system-node node-b" /><span className="system-node node-c" /><span className="system-node node-d" />
        <div className="hero-console"><div className="console-bar"><span /> <span /> <span /> <b>local-lab / status</b></div><p className="text-accent">$ observe --system local-lab</p><p className="terminal-line terminal-line-one"><i>[ok]</i> network path: stable</p><p className="terminal-line terminal-line-two"><i>[ok]</i> evidence index: ready</p><p className="terminal-line terminal-line-three"><i>[ok]</i> threat model: learning</p><div className="console-divider" /><p className="terminal-line terminal-line-four text-accent">lab status: in progress <span className="terminal-cursor">▌</span></p></div>
      </div>
    </div>
    <div className="hero-footer"><span>Scroll to explore</span><span className="hero-line" /><span>01 / 09</span></div>
  </section>
)
