import type { EducationItem } from '../data/types'
import { isTodo } from '../data/utils'

type EducationCardProps = { item: EducationItem }

export const EducationCard = ({ item }: EducationCardProps) => {
  const notes = item.notes.filter((note) => !isTodo(note))

  return (
    <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{item.period}</p>
      <h3 className="mt-3 text-lg font-semibold text-text">{item.title}</h3>
      <p className="mt-1 text-sm text-muted">{item.institution}</p>
      {notes.length > 0 && <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">{notes.map((note) => <li key={note} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{note}</li>)}</ul>}
    </article>
  )
}
