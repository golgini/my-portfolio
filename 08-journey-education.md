# Stage 08: Journey, education and engagements

Visual reference: attach the screenshots of the experience growth curve, the education cards and the community engagements list.

## Goal
Show growth over time honestly. Sammy has no paid jobs yet, so this section is a "Journey" of study, projects and training.

## Steps
1. Section `#experience`: `SectionTitle` "My **Journey**" (use "Work **Experience**" only if real jobs are added later).
2. `GrowthCurve` SVG above the cards: a stepped line rising left to right with one labelled node per item in `journey` (title shortened). Use `viewBox` so it scales. Items with a TODO start date are placed in data order, evenly spaced, with no year axis shown. Decorative, with `aria-hidden="true"`, and the cards below carry the same information in text.
3. `TimelineCard` per item: title, `org`, date range (hide TODO parts), bullets (hide TODO bullets). A toggle collapses and expands the bullets (`aria-expanded`). First card expanded by default.
4. Section `#education`: `SectionTitle` "Education & **Training**". Cards from `education` (Kabarak) and `training` (Bandit, pwn.college): period, title, institution, notes. Hide TODO notes. Training cards link nowhere unless a URL exists.
5. Section `#engagements`: `SectionTitle` "Community **Engagements**". Cards from `engagements`. If only one real item exists, show it and add a short line below: "More coming as I join CTFs and local security communities." Do not invent events.
6. Section `#contact`: `SectionTitle` "Get in **touch**", a sentence about the roles Sammy is seeking (SOC Analyst, Digital Forensic Investigator, Security Analyst), and buttons for email (`mailto:`) and LinkedIn. No phone number, no contact form.
7. Footer: name, location, social icons, "Back to top" button.

## Done when
- Timeline expands and collapses with keyboard.
- No TODO text visible and no made-up dates, employers or events.
- Layout holds at 360px.
- Build and lint pass.

## Message to paste
"Read stages/00-rules.md and stages/08-journey-education.md. Do stage 08 only, reading from journey.ts, education.ts and engagements.ts. Run build and lint, then commit."
