import type { ProcessLayer } from '../data/types'
import type { KeyboardEvent } from 'react'

type LayerStackProps = {
  layers: ProcessLayer[]
  activeId: number
  onSelect: (id: number) => void
}

const platePoints = '34,22 154,22 194,52 74,52'

export const LayerStack = ({ layers, activeId, onSelect }: LayerStackProps) => {
  const displayLayers = [...layers].reverse()

  const handleKeyDown = (event: KeyboardEvent<SVGPolygonElement>, id: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect(id)
      return
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      const currentIndex = layers.findIndex((layer) => layer.id === id)
      const direction = event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? -1 : 1
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), layers.length - 1)
      onSelect(layers[nextIndex].id)
    }
  }

  return (
    <svg className="h-auto w-full max-w-[360px] overflow-visible" viewBox="0 0 230 390" role="group" aria-label="Process layers">
      {displayLayers.map((layer, index) => {
        const isActive = layer.id === activeId
        const yOffset = index * 54
        return (
          <g key={layer.id} className="process-plate" style={{ transform: `translate(${isActive ? 6 : 0}px, ${yOffset}px)` }}>
            <polygon
              className="cursor-pointer transition-colors focus:outline-none"
              points={platePoints}
              fill={isActive ? 'var(--accent)' : 'var(--surface)'}
              fillOpacity={isActive ? 0.35 : 0.7}
              stroke={isActive ? 'var(--accent)' : 'var(--border)'}
              strokeWidth={isActive ? 2 : 1.5}
              role="button"
              tabIndex={0}
              aria-label={`Layer ${layer.id}: ${layer.name}`}
              onClick={() => onSelect(layer.id)}
              onKeyDown={(event) => handleKeyDown(event, layer.id)}
            />
            <text x="70" y="43" fill="var(--text)" fontSize="12" fontWeight={isActive ? 700 : 500} pointerEvents="none">
              {layer.name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
