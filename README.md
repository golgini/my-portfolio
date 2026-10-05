# Portfolio build: stage prompts for Cursor

Owner: Sammy Moseti Gesabo (Computer Security & Forensics, Kabarak University)
Goal: a single-page portfolio that helps land an entry-level SOC Analyst, Digital Forensic Investigator or Security Analyst role in Kenya.

## How to use
1. Make an empty folder, open it in Cursor, copy all these files into a `/stages` folder.
2. Open Agent mode and paste the "Message to paste" from stage 00, then stage 01, and so on. One stage per chat, in order.
3. After each stage: run `npm run dev`, look at the result, fix problems in the same chat, then commit.
4. Attach a screenshot of the reference section (from your video) whenever a stage says "visual reference".

## Stages
| File | What it builds |
|---|---|
| 00-rules.md | Stack, design rules, quality checks. Copy into `.cursor/rules` |
| 01-scaffold.md | Vite + React + TS + Tailwind, folders, theme tokens, layout shell |
| 02-content-data.md | Typed data files filled from your CV and resume |
| 03-navbar-hero.md | Sticky navbar, hero, stats, theme toggle |
| 04-process-stack.md | Interactive "My Process" layered stack |
| 05-toolbox.md | Skill category cards and soft skills |
| 06-projects.md | Filterable project cards |
| 07-map-optional.md | Kenya map and "Projects on the map" modal (optional) |
| 08-journey-education.md | Growth timeline, education, engagements |
| 09-polish.md | Responsive, accessibility, performance, SEO |
| 10-deploy.md | README, GitHub Pages or Vercel |

## Facts to confirm before you start
- Graduation: the CV says "Expected [12, 2026]". These stages assume December 2026.
- The resume summary ends with "Ai agents customizer, system developer". It looks unfinished. It is left out until you rewrite it.
- No paid jobs are listed, so there is no "Work Experience". Stage 08 builds a "Journey" timeline from training, projects and study instead.
- Your phone number is not used anywhere on the site. Publishing it invites spam. Email and LinkedIn are used.
- The CV has bracketed gaps: coursework, dataset, model choice and results. They show as `TODO` in the data files.
