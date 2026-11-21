import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { profile } from '../data/profile'
import { isTodo } from '../data/utils'

export const Contact = () => {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(String(data.get('subject') || 'Portfolio enquiry')); const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`); window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`; setSent(true) }
  return <section id="contact" className="contact-section scroll-mt-[76px]"><div className="section-kicker">09 / Contact</div><div className="contact-grid"><div><SectionTitle first="Have a security challenge?" accent="Let’s build something secure." /><p className="contact-copy">I&apos;m open to entry-level IT and cybersecurity opportunities, technical collaborations and conversations about technology.</p><div className="contact-links"><a href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} />LinkedIn</a>{!isTodo(profile.github) && <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} />GitHub</a>}</div></div><form className="contact-form" onSubmit={submit}><label>Name<input required name="name" /></label><label>Email<input required type="email" name="email" /></label><label>Subject<input required name="subject" /></label><label>Message<textarea required name="message" rows={4} /></label><button className="button button-primary" type="submit"><Send size={16} /> Open email draft</button><small>{sent ? 'Your email client should open with a prepared draft.' : 'No backend is connected. This form uses a transparent mailto fallback.'}</small></form></div></section>
}
