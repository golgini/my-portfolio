import type { TimelineItem } from '../data/types'

type GrowthCurveProps = { items: TimelineItem[] }

export const GrowthCurve = ({ items }: GrowthCurveProps) => {
  const left = 42
  const right = 598
  const step = items.length > 1 ? (right - left) / (items.length - 1) : 0
  const points = items.map((_, index) => ({ x: left + index * step, y: 160 - index * 30 }))
  const path = points.reduce((value, point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`
    return `${value} H ${point.x} V ${point.y}`
  }, '')

  return (
    <svg className="h-auto w-full" viewBox="0 0 640 210" aria-hidden="true">
      <path d={path} fill="none" stroke="var(--accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      {points.map((point, index) => {
        const label = items[index].title.split(' ').slice(0, 3).join(' ')
        return (
          <g key={items[index].id}>
            <circle cx={point.x} cy={point.y} r="7" fill="var(--surface)" stroke="var(--accent)" strokeWidth="3" />
            <text x={point.x} y={point.y - 17} fill="var(--muted)" fontSize="11" textAnchor="middle">{label}</text>
          </g>
        )
      })}
    </svg>
  )
}
