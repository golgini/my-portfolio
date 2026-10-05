# Stage 05: Toolbox and soft skills

Visual reference: attach the screenshot of "My Toolbox" with four category cards and the Soft Skills chip row.

## Goal
Show what Sammy can actually use, grouped so a recruiter can scan it in seconds.

## Steps
1. Section `#skills`: `SectionTitle` "My **Toolbox**", one short line: "Tools I use for security work, machine learning and automation."
2. Read `skillGroups` from `src/data/skills.ts`. Render a grid of cards: 1 column on mobile, 2 on tablet, 4 on wide screens.
3. Each card: lucide icon from the `icon` field (map `shield`, `code`, `brain`, `wrench` to `Shield`, `Code2`, `Brain`, `Wrench`), title, and the items as small rounded chips. No skill levels, no progress bars (they claim precision that does not exist).
4. Below the grid, a "Soft Skills" panel: title "Soft Skills", one short subtitle, and a row of chips from `softSkills`. On desktop the row scrolls slowly sideways (a CSS marquee that pauses on hover and focus). With `prefers-reduced-motion`, show the chips wrapped in normal lines instead.
5. Add a code comment above `softSkills` reminding Sammy to confirm those values.

## Done when
- Every skill from the CV appears once, none are invented.
- Cards align at equal height; chips wrap cleanly at 360px.
- Marquee pauses on hover and stops entirely for reduced-motion users.
- Build and lint pass.

## Message to paste
"Read stages/00-rules.md and stages/05-toolbox.md. Do stage 05 only, reading from src/data/skills.ts. Run build and lint, then commit."
