# Stage 04: "My Process" interactive layer stack

Visual reference: attach the screenshots of the isometric layer stack with the step card on the right.

## Goal
The signature interactive section: an isometric stack of six layers and a step card that changes when a layer is chosen.

## Steps
1. Section `#about`: `SectionTitle` "My **Process**", one intro line taken from `profile.about`.
2. Data: `processLayers` from `src/data/process.ts` (6 items). Display order top to bottom is the reverse of the array: Report at the top, Problem at the bottom. Step numbering follows the array: Problem is "Layer 1 of 6".
3. `LayerStack` component, inline SVG (no images):
   - Six rhombus-shaped plates stacked with a vertical gap, each drawn with an isometric transform (for example `transform: rotateX(60deg) rotateZ(-45deg)` in CSS, or computed SVG polygon points). Thin outline, translucent fill.
   - The active plate is filled with the accent color at about 35% opacity and its outline is solid accent. Other plates use the border color.
   - Each plate is a `<button>` (or has `role="button"` and `tabIndex=0`) with an `aria-label` like "Layer 4: Analysis". Hover lightens the plate. Enter and Space select it.
4. Beside the stack, a numbered list of the layer names (same order as the stack). Clicking a name selects the layer. The active name is bold with an accent marker.
5. `StepCard` on the right: step number in a small badge, layer name as heading, "Layer N of 6" label, `summary`, then a "What I do" paragraph from `whatIDo`, a row of six progress dots (active one filled), and Back and Next buttons (disabled at the ends).
6. State: `activeId` lives in the section. Left and right arrow keys move between layers while focus is inside the stack. The card has `aria-live="polite"`.
7. Animation: when the active layer changes, the chosen plate shifts a few pixels to the right over 200ms. Disable with `prefers-reduced-motion`.
8. Layout: stack and list on the left, card on the right on desktop; stack on top and card below on mobile. The stack must never overflow at 360px (scale the SVG with `viewBox`).

## Done when
- All three ways to change layers (click plate, click list name, Back/Next/arrow keys) stay in sync.
- Looks right in both themes and works with keyboard only.
- Build and lint pass.

## Message to paste
"Read docs/implementation/00-rules.md and docs/implementation/04-process-stack.md. Do stage 04 only. If the isometric look is off, tell me and propose a fix instead of leaving it broken. Run build and lint, then commit."
