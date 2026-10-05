import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { isTodo } from '../data/utils'

export const Footer = () => (
  <footer className="border-t border-border px-6 py-8">
    <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-text">{profile.name}</p>
        <p className="mt-1">{profile.location}</p>
      </div>
      <div className="flex items-center gap-3">
        <a aria-label="LinkedIn profile" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-md p-1.5 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"><Linkedin size={17} /></a>
        <a aria-label="Send email" href={`mailto:${profile.email}`} className="rounded-md p-1.5 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"><Mail size={17} /></a>
        {!isTodo(profile.github) && <a aria-label="GitHub profile" href={profile.github} target="_blank" rel="noopener noreferrer" className="rounded-md p-1.5 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"><Github size={17} /></a>}
        <a href="#home" className="ml-2 inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-semibold hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"><ArrowUp size={15} />Back to top</a>
      </div>
    </div>
  </footer>
)
