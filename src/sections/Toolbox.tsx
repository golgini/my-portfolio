import { SectionTitle } from '../components/SectionTitle'
import { Brain, Code2, Shield, Wrench, type LucideIcon } from 'lucide-react'
import { skillGroups, softSkills } from '../data/skills'

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  code: Code2,
  brain: Brain,
  wrench: Wrench,
}

export const Toolbox = () => (
  <section id="skills" className="scroll-mt-[72px] border-b border-border py-20">
    <SectionTitle first="My" accent="Toolbox" />
    <p className="mt-5 max-w-2xl leading-8 text-muted">Tools I use for security work, machine learning and automation.</p>

    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {skillGroups.map((group) => {
        const Icon = iconMap[group.icon]
        return (
          <article key={group.title} className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-accent/15 p-2 text-accent" aria-hidden="true">
                <Icon size={20} />
              </span>
              <h3 className="font-semibold text-text">{group.title}</h3>
            </div>
            <div className="mt-5 flex flex-1 flex-wrap content-start gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">{item}</span>
              ))}
            </div>
          </article>
        )
      })}
    </div>

    <div className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-text">Soft Skills</h3>
      <p className="mt-2 text-sm text-muted">Suggested strengths to confirm before publishing.</p>
      <div className="skills-marquee mt-5" tabIndex={0} aria-label="Soft skills">
        <div className="skills-marquee-track">
          <div className="skills-marquee-group">
            {softSkills.map((skill) => <span key={skill} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted">{skill}</span>)}
          </div>
          <div className="skills-marquee-group" aria-hidden="true">
            {softSkills.map((skill) => <span key={`duplicate-${skill}`} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted">{skill}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>
)
