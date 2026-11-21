import { Award, ArrowDown, ArrowUpRight, Download, FileText, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { profile } from '../data/profile'
import { isTodo } from '../data/utils'
import { credentials, resumeUrl } from '../data/credentials'

export const Hero = () => (
  <section id="home" className="hero-section scroll-mt-[76px]">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> Computer Security &amp; Forensics specialist</div>
        <h1>Securing systems.<br /><em>Engineering digital trust.</em></h1>
        <p className="hero-description">Computer Security and Forensics specialist focused on cybersecurity, secure infrastructure, vulnerability assessment and practical security engineering.</p>
        <div className="identity-lines"><b>COMPUTER SECURITY &amp; FORENSICS</b><span>CYBERSECURITY <i>/</i> NETWORK SECURITY <i>/</i> SECURITY ENGINEERING</span><span>LOCATION: KENYA</span></div>
        <div className="hero-actions"><a href="#portfolio" className="button button-primary">Explore my projects <ArrowDown size={17} /></a>{resumeUrl ? <a href={resumeUrl} download="sammy-moseti-gesabo-resume.docx" className="button button-secondary"><Download size={16} /> Download my resume</a> : <span className="button button-disabled" title="Resume file not supplied yet"><FileText size={16} /> Resume not supplied</span>}<a href="#credentials" className="credentials-link"><Award size={15} /> View credentials <ArrowUpRight size={15} /></a></div>
        <div className="credential-preview" aria-label="Credential availability"><div><FileText size={15} /><span><b>RESUME</b><small>{resumeUrl ? 'Available to download' : 'Not supplied'}</small></span></div><div><Award size={15} /><span><b>CERTIFICATIONS</b><small>{credentials.some((credential) => credential.available && credential.title !== 'BSc Computer Security and Forensics') ? 'View credentials' : 'None verified yet'}</small></span></div><div><span className="credential-check">✓</span><span><b>EDUCATION</b><small>Computer Security &amp; Forensics</small></span></div></div>
        <div className="social-row"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={17} />LinkedIn</a><a href={`mailto:${profile.email}`} className="social-link"><Mail size={17} />Email</a>{!isTodo(profile.github) && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link"><Github size={17} />GitHub</a>}<a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="social-link"><MessageCircle size={17} />WhatsApp</a></div>
      </div>
      <div className="hero-visual-stack" aria-label="Simulated cybersecurity operations interface">
        <div className="hero-system"><div className="system-grid" /><div className="system-orbit orbit-a" /><div className="system-orbit orbit-b" /><div className="system-core"><span className="core-ring ring-a" /><span className="core-ring ring-b" /><span className="core-cross" /><strong>SECURE<br />THE<br />SYSTEM</strong></div><span className="system-node node-a" /><span className="system-node node-b" /><span className="system-node node-c" /><span className="system-node node-d" /><div className="system-status-card"><span className="status-dot" /><b>SYSTEM STATUS</b><strong>OPERATIONAL</strong><small>network monitoring active</small></div><div className="hero-console"><div className="console-bar"><span /> <span /> <span /> <b>security-observer / simulated</b></div><p className="text-accent">$ observe --system local-lab</p><p className="terminal-line terminal-line-one"><i>[ok]</i> network path: stable</p><p className="terminal-line terminal-line-two"><i>[ok]</i> threat detection: enabled</p><p className="terminal-line terminal-line-three"><i>[ok]</i> vulnerability preview: ready</p><div className="console-divider" /><p className="terminal-line terminal-line-four text-accent">security events: 03 · last scan: complete <span className="terminal-cursor">▌</span></p></div></div>
        <div className="identity-card"><span>PROFESSIONAL IDENTITY</span><strong>{profile.name}</strong><b>Cybersecurity specialist</b><small>Computer Security &amp; Forensics</small><a href="#credentials">View credentials <ArrowUpRight size={14} /></a></div>
        <div className="technical-card"><span>TECHNICAL FOCUS</span><p><b>PYTHON</b><small>development</small></p><p><b>LINUX</b><small>systems</small></p><p><b>NETWORKING</b><small>infrastructure</small></p><p><b>SECURITY</b><small>analysis</small></p></div>
      </div>
    </div>
    <div className="hero-footer"><span>Scroll to explore</span><span className="hero-line" /><span>01 / 09</span></div>
  </section>
)
