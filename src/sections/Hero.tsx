import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { isTodo } from '../data/utils'

export const Hero = () => (
  <section id="home" className="scroll-mt-[72px] border-b border-border py-12 sm:py-16 lg:min-h-[calc(100vh-72px)] lg:py-20">
    <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex items-start gap-4 sm:gap-6">
        <div className="hero-rail" aria-hidden="true">
          <span className="hero-rail-dot" />
          <span className="hero-rail-line" />
        </div>
        <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">Hi, I&apos;m</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
          <span className="reference-gradient-text">{profile.name}</span>
        </h1>
        <p className="mt-5 text-lg font-semibold text-text sm:text-xl">{profile.title}</p>
        <p className="mt-4 max-w-[60ch] leading-8 text-muted">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent" href="#portfolio">
            View projects <ArrowUpRight size={16} />
          </a>
          <a className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent" href="#contact">
            Contact me
          </a>
        </div>

        <div className="mt-7 flex items-center gap-4 text-muted">
          <a aria-label="LinkedIn profile" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-md p-1 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent">
            <Linkedin size={19} />
          </a>
          <a aria-label="Send email" href={`mailto:${profile.email}`} className="rounded-md p-1 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent">
            <Mail size={19} />
          </a>
          {!isTodo(profile.github) && (
            <a aria-label="GitHub profile" href={profile.github} target="_blank" rel="noopener noreferrer" className="rounded-md p-1 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent">
              <Github size={19} />
            </a>
          )}
        </div>

        <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold text-text sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div aria-hidden="true" className="hero-visual rounded-2xl border border-border bg-surface p-4 shadow-lg sm:p-6">
        <div className="hero-signal-grid" />
        <div className="cyber-scene">
          <div className="cyber-orbit cyber-orbit-one" />
          <div className="cyber-orbit cyber-orbit-two" />
          <div className="cyber-globe">
            <div className="cyber-globe-meridian cyber-globe-meridian-one" />
            <div className="cyber-globe-meridian cyber-globe-meridian-two" />
            {Array.from({ length: 8 }, (_, index) => <span key={index} className={`cyber-node cyber-node-${index + 1}`} />)}
          </div>
          <span className="cyber-scan-beam" />
        </div>
        <div className="hero-console rounded-xl border border-border bg-bg p-5 font-mono text-xs leading-7 text-muted sm:text-sm">
          <div className="mb-4 flex items-center gap-2 border-b border-border pb-3 text-[10px] uppercase tracking-[0.2em] text-muted">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_theme(colors.green.400)]" />
            live analysis node
          </div>
          <p className="text-accent">$ analyze --email sample.eml</p>
          <p className="terminal-line terminal-line-one mt-4"><span className="text-green-400">[ok]</span> header check: passed</p>
          <p className="terminal-line terminal-line-two"><span className="text-green-400">[ok]</span> link check: no suspicious links</p>
          <p className="terminal-line terminal-line-three"><span className="text-green-400">[ok]</span> attachment scan: no hidden data found</p>
          <div className="mt-5 h-px bg-border" />
          <p className="terminal-line terminal-line-four mt-4 text-accent">analysis complete <span className="terminal-cursor">▌</span></p>
        </div>
      </div>
    </div>

    <div className="mt-10 flex justify-center text-muted motion-safe:animate-bounce lg:mt-4" aria-hidden="true">
      <ArrowDown size={18} />
    </div>
  </section>
)
