import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { TimelineItem } from '../data/types'
import { isTodo } from '../data/utils'

type TimelineCardProps = { item: TimelineItem; defaultExpanded?: boolean }

export const TimelineCard = ({ item, defaultExpanded = false }: TimelineCardProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const start = isTodo(item.start) ? '' : item.start
  const end = isTodo(item.end) ? '' : item.end
  const dateRange = [start, end].filter(Boolean).join(' – ')
  const bullets = item.bullets.filter((bullet) => !isTodo(bullet))

  return (
    <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          {dateRange && <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{dateRange}</p>}
          <h3 className="mt-2 text-lg font-semibold text-text">{item.title}</h3>
          <p className="mt-1 text-sm text-muted">{item.org}</p>
        </div>
        {bullets.length > 0 && <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.title}`} className="rounded-lg border border-border p-2 text-muted transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"><ChevronDown size={18} className={expanded ? 'rotate-180 transition-transform' : 'transition-transform'} /></button>}
      </div>
      {expanded && bullets.length > 0 && <ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm leading-6 text-muted">{bullets.map((bullet) => <li key={bullet} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{bullet}</li>)}</ul>}
    </article>
  )
}
