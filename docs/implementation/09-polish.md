# Stage 09: Responsive, accessibility, performance, SEO

## Goal
Raise the whole site to a hireable quality bar. Fix issues; do not add features.

## Steps
1. **Responsive**: test and fix at 360, 414, 768, 1024, 1440 px. No horizontal scroll at any width.
2. **Accessibility**:
   - Every interactive element reachable by keyboard with a visible focus ring.
   - Text contrast at least 4.5:1 in both themes (adjust muted text and the accent if needed).
   - One `<h1>` (the hero name), headings in order, landmarks present, skip-to-content link at the top.
   - Icon-only buttons have `aria-label`. Decorative graphics have `aria-hidden`.
   - Reduced-motion users get no marquee, no shifting plates, no smooth scrolling.
3. **Performance**: target Lighthouse 90+ on Performance, Accessibility, Best Practices and SEO (mobile). Self-host the font, preload only what is used, lazy-load anything below the fold (map data especially), no unused dependencies. Report the real Lighthouse numbers.
4. **SEO and sharing**: title "Sammy Moseti Gesabo | Computer Security & Forensics", meta description, canonical URL placeholder, Open Graph and Twitter tags, a favicon (simple SVG initials "SG"), `robots.txt`, and JSON-LD `Person` markup with name, jobTitle, email, `sameAs` LinkedIn. No phone number.
5. **Cleanup**: remove dead code, console logs and unused CSS. Search the codebase for the string "TODO" in the data files and list each one for me in `docs/content-todo.md`, grouped by file, so I know what to fill in.
6. Run `npm run build` and `npm run preview` and confirm there are no console errors.

## Done when
- Lighthouse numbers are reported and all four are 90 or above, or the reasons they are not are explained.
- `docs/content-todo.md` lists every remaining TODO.
- Build and lint pass.

## Message to paste
"Read docs/implementation/00-rules.md and docs/implementation/09-polish.md. Do stage 09 only. Report real Lighthouse scores and update docs/content-todo.md. Commit when done."
