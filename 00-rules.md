# Stage 00: Rules for every stage

Copy this file to `.cursor/rules/portfolio.mdc` (or keep it in `/stages` and tell the agent to read it first in every chat).

## Project
Single-page portfolio for Sammy Moseti Gesabo, a Computer Security & Forensics graduate (Kabarak University, expected Dec 2026). Audience: recruiters and hiring managers for SOC Analyst, Digital Forensic Investigator and Security Analyst roles in Kenya. Primary job of the page: show real security and engineering work in under a minute.

## Stack (do not change without asking)
- Vite + React 18 + TypeScript (strict). Tailwind CSS. lucide-react icons.
- No backend, no database, no analytics scripts.
- Map (stage 07 only): Leaflet or d3-geo with a local GeoJSON in `/public/data`.
- One font family loaded with `@fontsource` (suggest Plus Jakarta Sans). No external CDN calls at runtime.

## Content rules
- All text comes from `/src/data/*.ts`. Components never hard-code my content.
- Never invent employers, dates, certificates, metrics, test results or links. Missing information is written as `TODO: ...` in the data file and shown in the UI as nothing (hide the field), never as made-up text.
- Do not include my phone number anywhere.

## Design rules
- Dark theme by default, light theme available. Choice saved in `localStorage` (wrapped in try/catch). First visit follows `prefers-color-scheme`.
- Palette via CSS variables: background, surface, border, text, muted text, one blue accent. Section titles use two words with the second in the accent color.
- Thin borders, rounded corners, calm shadows. A security-tool feel: precise, uncluttered.
- Motion only where it answers a click or hover. Respect `prefers-reduced-motion`.

## Code rules
- Small components, one per file, named exports. No `any`. No unused code.
- Keyboard accessible: real buttons and links, visible focus ring, ARIA labels on icon-only buttons.
- Use semantic landmarks: header, nav, main, section with headings, footer.

## Working rules
- Do only the current stage. Do not start the next one.
- After the stage: run `npm run build` and `npm run lint`, fix errors, then list what you changed and anything left as TODO.
- Make one git commit per stage with the message "stage NN: <name>".

## Message to paste
"Read stages/00-rules.md and follow it for this whole project. Confirm you understand, and list any questions. Do not write code yet."
