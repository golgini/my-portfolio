import { SectionTitle } from '../components/SectionTitle'
import { GrowthCurve } from '../components/GrowthCurve'
import { TimelineCard } from '../components/TimelineCard'
import { journey } from '../data/journey'

export const Journey = () => (
  <section id="experience" className="scroll-mt-[72px] border-b border-border py-20">
    <SectionTitle first="My" accent="Journey" />
    <div className="mt-10 rounded-2xl border border-border bg-surface p-4 sm:p-6"><GrowthCurve items={journey} /></div>
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {journey.map((item, index) => <TimelineCard key={item.id} item={item} defaultExpanded={index === 0} />)}
    </div>
  </section>
)
