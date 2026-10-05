import { SectionTitle } from '../components/SectionTitle'
import { LayerStack } from '../components/LayerStack'
import { StepCard } from '../components/StepCard'
import { profile } from '../data/profile'
import { processLayers } from '../data/process'
import { useState } from 'react'

export const Process = () => {
  const [activeId, setActiveId] = useState(1)
  const activeLayer = processLayers.find((layer) => layer.id === activeId) ?? processLayers[0]

  const setRelativeLayer = (offset: number) => {
    const currentIndex = processLayers.findIndex((layer) => layer.id === activeId)
    const nextIndex = Math.min(Math.max(currentIndex + offset, 0), processLayers.length - 1)
    setActiveId(processLayers[nextIndex].id)
  }

  return (
    <section id="about" className="scroll-mt-[72px] border-b border-border py-20">
      <SectionTitle first="My" accent="Process" />
      <p className="mt-5 max-w-3xl leading-8 text-muted">{profile.about}</p>
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(150px,0.65fr)] sm:items-center">
          <LayerStack layers={processLayers} activeId={activeId} onSelect={setActiveId} />
          <ol className="space-y-2" aria-label="Process layer names">
            {[...processLayers].reverse().map((layer) => (
              <li key={layer.id}>
                <button type="button" onClick={() => setActiveId(layer.id)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${activeId === layer.id ? 'font-bold text-accent' : 'text-muted hover:text-text'}`}>
                  <span className={`h-2 w-2 rounded-full ${activeId === layer.id ? 'bg-accent' : 'bg-border'}`} aria-hidden="true" />
                  {layer.name}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <StepCard layer={activeLayer} total={processLayers.length} onBack={() => setRelativeLayer(-1)} onNext={() => setRelativeLayer(1)} />
      </div>
    </section>
  )
}
