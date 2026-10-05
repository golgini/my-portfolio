# Stage 01: Scaffold and layout shell

## Goal
A running empty site with the folder structure, theme system and section placeholders in place.

## Steps
1. Create the project in the current folder: Vite + React + TypeScript. Install Tailwind, lucide-react and `@fontsource/plus-jakarta-sans`.
2. Create this structure:
```
src/
  components/    (one file per component)
  sections/      Hero.tsx, Process.tsx, Toolbox.tsx, Projects.tsx, Journey.tsx, Education.tsx, Engagements.tsx, Contact.tsx
  data/          (filled in stage 02)
  hooks/         useTheme.ts
  styles/        index.css
  App.tsx, main.tsx
public/
stages/
```
3. Theme tokens in `index.css` as CSS variables for light and dark: `--bg, --surface, --border, --text, --muted, --accent`. Dark values: bg near `#0b1220`, surface `#111a2e`, border `#22304a`, text `#e6edf7`, muted `#8fa0b8`, accent `#3b82f6`. Light values: bg `#f7f9fc`, surface `#ffffff`, border `#dbe3ee`, text `#0f172a`, muted `#5b6b82`, accent `#1d6fe0`. Map them in the Tailwind config so classes like `bg-surface` and `text-accent` work.
4. `useTheme` hook: returns `theme` and `toggle`. Reads `localStorage` then `prefers-color-scheme`, sets `data-theme` on `<html>`, saves choice in try/catch.
5. `App.tsx` renders a sticky header placeholder, each section as `<section id="...">` with an `<h2>` placeholder, and a footer placeholder. Section ids: `home, about, skills, portfolio, experience, education, engagements, contact`.
6. A reusable `SectionTitle` component: props `first` and `accent`, renders "My **Toolbox**" with the accent word and a short underline bar.
7. Set `<html lang="en">`, a page title and meta description in `index.html`. Add scripts: `dev`, `build`, `lint`, `preview`.

## Done when
- `npm run dev` shows all section placeholders with titles, in dark theme, no console errors.
- Changing `data-theme` in dev tools switches colors.
- `npm run build` and `npm run lint` pass.

## Message to paste
"Read stages/00-rules.md and stages/01-scaffold.md. Do stage 01 only. Run build and lint at the end and commit."
