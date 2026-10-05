import { SectionTitle } from '../components/SectionTitle'
import { Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export const Contact = () => (
  <section id="contact" className="scroll-mt-[72px] py-20">
    <SectionTitle first="Get in" accent="touch" />
    <p className="mt-5 max-w-2xl leading-8 text-muted">I&apos;m seeking entry-level opportunities as a SOC Analyst, Digital Forensic Investigator or Security Analyst.</p>
    <div className="mt-7 flex flex-wrap gap-3">
      <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent"><Mail size={17} />Email me</a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"><Linkedin size={17} />LinkedIn</a>
    </div>
  </section>
)
