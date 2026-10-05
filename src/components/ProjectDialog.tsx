import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Project } from '../data/types'
import { isTodo } from '../data/utils'

type ProjectDialogProps = {
  project: Project | null
  onClose: () => void
}

const getFocusableElements = (dialog: HTMLDialogElement) => Array.from(dialog.querySelectorAll<HTMLElement>('button, a, [tabindex]:not([tabindex="-1"])'))

export const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !project) return

    dialog.showModal()
    const focusable = getFocusableElements(dialog)
    focusable[0]?.focus()

    const handleCancel = (event: Event) => {
      event.preventDefault()
      onClose()
    }
    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === dialog) onClose()
    }
    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const elements = getFocusableElements(dialog)
      if (elements.length === 0) return
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    dialog.addEventListener('cancel', handleCancel)
    dialog.addEventListener('click', handleBackdropClick)
    dialog.addEventListener('keydown', handleTab)
    return () => {
      dialog.removeEventListener('cancel', handleCancel)
      dialog.removeEventListener('click', handleBackdropClick)
      dialog.removeEventListener('keydown', handleTab)
      if (dialog.open) dialog.close()
    }
  }, [onClose, project])

  if (!project) return null

  const visibleHighlights = project.highlights.filter((highlight) => !isTodo(highlight))
  const visibleTech = project.tech.filter((technology) => !isTodo(technology))

  return (
    <dialog ref={dialogRef} aria-labelledby="project-dialog-title" className="w-[min(90vw,720px)] rounded-2xl border border-border bg-surface p-0 text-text shadow-2xl backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm">
      <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">{project.category}</span>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${project.status === 'In progress' ? 'bg-amber-500/15 text-amber-500' : 'bg-green-500/15 text-green-500'}`}>{project.status}</span>
            </div>
            <h2 id="project-dialog-title" className="mt-5 text-2xl font-semibold leading-snug">{project.title}</h2>
            <p className="mt-2 text-sm text-muted">{project.role} · {project.context}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close project details" className="shrink-0 rounded-lg p-2 text-muted hover:text-text focus:outline-none focus:ring-2 focus:ring-accent"><X size={20} /></button>
        </div>
        <p className="mt-6 leading-8 text-muted">{project.description}</p>
        {visibleHighlights.length > 0 && <ul className="mt-6 space-y-3 leading-7 text-muted">{visibleHighlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{highlight}</li>)}</ul>}
        <div className="mt-7 flex flex-wrap gap-2">{visibleTech.map((technology) => <span key={technology} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted">{technology}</span>)}</div>
      </div>
    </dialog>
  )
}
