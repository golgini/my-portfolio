# Stage 03: Navbar and hero

Visual reference: attach the screenshot of the reference site's top of page (navbar, "Hi, I'm ..." headline, buttons, stats).

## Goal
A sticky navbar with theme toggle, and a hero that says who Sammy is and what role he wants, in one screen.

## Steps
1. `Navbar` component (sticky, blurred surface background, bottom border):
   - Left: `profile.shortName` in bold accent text, linking to `#home`.
   - Center links with smooth scroll: Home, About, Skills, Portfolio, Experience, Education, Engagements.
   - Right: theme toggle button (sun and moon icons, `aria-label="Toggle theme"`) and a filled accent "Contact me" button linking to `#contact`.
   - Highlight the link of the section currently in view (IntersectionObserver).
   - Under 768px: hamburger button opens a full-width menu; closes on link click and on Escape.
2. `Hero` section (`#home`), two columns on desktop, stacked on mobile:
   - Left: "Hi, I'm **Sammy Moseti Gesabo**" (name in accent), `profile.title` as subtitle, `profile.tagline` below (max width about 60 characters per line).
   - Two buttons: primary "View projects" (to `#portfolio`), secondary "Contact me".
   - Social icon row: LinkedIn and email always; GitHub only if not a TODO. Open external links in a new tab with `rel="noopener noreferrer"`.
   - Stats row from `profile.stats` (3 items, big value and small label).
   - Right: a visual panel. For now use a static "evidence terminal" card: a bordered panel with a fake, clearly harmless sample such as `$ analyze --email sample.eml` followed by three result lines (header check, link check, attachment scan: "no hidden data found"). Mark it decorative with `aria-hidden="true"`. Stage 07 may replace it with the map.
   - A small scroll-down mouse icon at the bottom center, hidden for reduced-motion users.
3. Add `scroll-margin-top` equal to the navbar height on all sections so anchors do not hide under it.

## Done when
- Navbar stays on top while scrolling; the active link changes; mobile menu works with keyboard.
- Theme toggle switches and remembers the choice after reload.
- Hero fits one screen at 1280x720 and reads cleanly at 360px wide.
- Build and lint pass.

## Message to paste
"Read stages/00-rules.md and stages/03-navbar-hero.md. Do stage 03 only, using data from src/data/profile.ts. Run build and lint, then commit."
