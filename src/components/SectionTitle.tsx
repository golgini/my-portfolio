type SectionTitleProps = {
  first: string
  accent: string
}

export const SectionTitle = ({ first, accent }: SectionTitleProps) => (
  <div className="space-y-2">
    <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
      {first} <span className="text-accent">{accent}</span>
    </h2>
    <div aria-hidden="true" className="h-1 w-10 rounded-full bg-accent" />
  </div>
)
