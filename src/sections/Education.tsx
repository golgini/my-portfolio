import { SectionTitle } from '../components/SectionTitle'
import { EducationCard } from '../components/EducationCard'
import { education } from '../data/education'
import { training } from '../data/engagements'

export const Education = () => (
  <section id="education" className="scroll-mt-[72px] border-b border-border py-20">
    <SectionTitle first="Education &" accent="Training" />
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {[...education, ...training].map((item) => <EducationCard key={item.id} item={item} />)}
    </div>
  </section>
)
