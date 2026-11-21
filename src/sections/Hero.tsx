import { Award, ArrowDown, ArrowUpRight, Download, FileText, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { DeveloperIdCard } from '../components/DeveloperIdCard'
import { credentials, resumeUrl } from '../data/credentials'
import { isTodo } from '../data/utils'
import { profile } from '../data/profile'

export const Hero = () => (
  <section id="home" className="hero-section scroll-mt-[76px]">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> Computer Security &amp; Forensics specialist</div>
        <h1>Securing systems.<br /><em>Engineering digital trust.</em></h1>
        <p className="hero-description">Computer Security and Forensics specialist focused on cybersecurity, secure infrastructure, vulnerability assessment and practical security engineering.</p>
        <div className="identity-lines"><b>COMPUTER SECURITY &amp; FORENSICS</b><span>CYBERSECURITY <i>/</i> NETWORK SECURITY <i>/</i> SECURITY ENGINEERING</span><span>LOCATION: KENYA</span></div>
        <div className="hero-actions">
          <a href="#portfolio" className="button button-primary">Explore my projects <ArrowDown size={17} /></a>
          {resumeUrl ? <a href={resumeUrl} download="sammy-moseti-gesabo-resume.docx" className="button button-secondary"><Download size={16} /> Download my resume</a> : <span className="button button-disabled" title="Resume file not supplied yet"><FileText size={16} /> Resume not supplied</span>}
          <a href="#credentials" className="credentials-link"><Award size={15} /> View credentials <ArrowUpRight size={15} /></a>
        </div>
        <div className="credential-preview" aria-label="Credential availability"><div><FileText size={15} /><span><b>RESUME</b><small>{resumeUrl ? 'Available to download' : 'Not supplied'}</small></span></div><div><Award size={15} /><span><b>CERTIFICATIONS</b><small>{credentials.some((credential) => credential.available && credential.title !== 'BSc Computer Security and Forensics') ? 'View credentials' : 'None verified yet'}</small></span></div><div><span className="credential-check">✓</span><span><b>EDUCATION</b><small>Computer Security &amp; Forensics</small></span></div></div>
        <div className="social-row"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={17} />LinkedIn</a><a href={`mailto:${profile.email}`} className="social-link"><Mail size={17} />Email</a>{!isTodo(profile.github) && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link"><Github size={17} />GitHub</a>}<a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="social-link"><MessageCircle size={17} />WhatsApp</a></div>
        <DeveloperIdCard />
      </div>
    </div>
    <div className="hero-footer"><span>Scroll to explore</span><span className="hero-line" /><span>01 / 09</span></div>
  </section>
)
