import { SectionTitle } from '../components/SectionTitle'
import { engagements } from '../data/engagements'
import { isTodo } from '../data/utils'

export const Engagements = () => (
  <section id="engagements" className="scroll-mt-[72px] border-b border-border py-20">
    <SectionTitle first="Community" accent="Engagements" />
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {engagements.map((item) => {
        const period = isTodo(item.period) ? '' : item.period
        const notes = item.notes.filter((note) => !isTodo(note))
        return <article key={item.id} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
          {period && <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{period}</p>}
          <h3 className="mt-3 text-lg font-semibold text-text">{item.title}</h3>
          <p className="mt-1 text-sm text-muted">{item.org}</p>
          {notes.length > 0 && <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">{notes.map((note) => <li key={note} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{note}</li>)}</ul>}
        </article>
      })}
    </div>
    {engagements.length === 1 && <p className="mt-6 text-sm text-muted">More coming as I join CTFs and local security communities.</p>}
  </section>
)
