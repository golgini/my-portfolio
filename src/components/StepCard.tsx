import type { ProcessLayer } from '../data/types'

type StepCardProps = {
  layer: ProcessLayer
  total: number
  onBack: () => void
  onNext: () => void
}

export const StepCard = ({ layer, total, onBack, onNext }: StepCardProps) => (
  <article aria-live="polite" className="rounded-2xl border border-border bg-surface p-6 shadow-lg sm:p-8">
    <div className="flex items-start justify-between gap-4">
      <div>
        <span className="inline-flex rounded-md bg-accent/15 px-2.5 py-1 text-xs font-bold text-accent">0{layer.id}</span>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Layer {layer.id} of {total}</p>
      </div>
      <div className="flex gap-1.5 pt-1" aria-label={`Progress: layer ${layer.id} of ${total}`}>
        {Array.from({ length: total }, (_, index) => (
          <span key={index} className={`h-1.5 w-5 rounded-full ${index + 1 === layer.id ? 'bg-accent' : 'bg-border'}`} />
        ))}
      </div>
    </div>
    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-text">{layer.name}</h3>
    <p className="mt-3 text-base font-medium text-text">{layer.summary}</p>
    <div className="mt-6 border-l-2 border-accent pl-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">What I do</p>
      <p className="mt-2 leading-7 text-muted">{layer.whatIDo}</p>
    </div>
    <div className="mt-8 flex justify-between gap-3">
      <button type="button" onClick={onBack} disabled={layer.id === 1} className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-accent">
        Back
      </button>
      <button type="button" onClick={onNext} disabled={layer.id === total} className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-accent">
        Next
      </button>
    </div>
  </article>
)
