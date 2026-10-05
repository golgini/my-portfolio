# Stage 06: Featured projects

Visual reference: attach the screenshot of the project card grid with the filter chip bar.

## Goal
A filterable project grid that shows the final-year project first and makes each project's depth clear.

## Steps
1. Section `#portfolio`: `SectionTitle` "Featured **Projects**".
2. Filter bar: chips "All" plus one per category found in `projects` (Security, Machine Learning, Trading). Use `aria-pressed` on the chips. The active chip is filled with the accent color. Selecting a chip filters the grid with no page reload. On the right of the bar, reserve space for a "View map" button; render it only if stage 07 is installed (a feature flag `SHOW_MAP = false` in `src/config.ts`).
3. `ProjectCard`:
   - Top row: category badge and status badge ("In progress" in amber, "Completed" in green; do not rely on color alone, include the text).
   - Title, then `role` and `context` on one line in muted text.
   - `description`, then up to 4 `highlights` as a short list (hide any that `isTodo`).
   - Tech chips (hide TODO chips).
   - Footer: "Repo" and "Demo" icon links only if present in `links`.
4. Sort: the `anti-phishing` project always first, then the rest in data order.
5. Clicking a card opens a `ProjectDialog` (accessible modal using the native `<dialog>`) with the full text. Close on Escape, click outside and the X button. Trap focus and return it to the card when closed.
6. Empty state: if a filter returns nothing, show "No projects in this category yet."

## Done when
- Filtering works, and the "All" chip resets it.
- Modal is fully keyboard accessible.
- No TODO text is visible anywhere.
- Build and lint pass.

## Message to paste
"Read stages/00-rules.md and stages/06-projects.md. Do stage 06 only, reading from src/data/projects.ts and src/data/utils.ts. Run build and lint, then commit."
