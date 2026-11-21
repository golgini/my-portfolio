# Stage 07 (optional): Kenya map and "Projects on the map"

## Should you do this stage?
The reference site has a world map because its projects are in many countries. Sammy's projects are not tied to places, so a project map would show almost nothing real. Skip this stage unless you want a visual flourish. If you skip it, leave `SHOW_MAP = false` and keep the terminal card in the hero.

## Goal (if you do it)
A small interactive Kenya map in the hero or a modal, showing only true facts: where Sammy is based (Nairobi) and where he studies (Kabarak University, Nakuru County).

## Steps
1. Download a public-domain Kenya counties GeoJSON (Natural Earth or a county boundaries file) into `/public/data/kenya.json`. If you cannot download it, stop and tell me instead of drawing fake borders.
2. `KenyaMap` component using d3-geo (preferred, no tiles needed) to render the counties as SVG paths using theme colors. Highlight Nairobi and Nakuru with the accent color.
3. Two pins with labels: "Based in Nairobi" and "Studying at Kabarak University". Hover or focus a pin shows a small card with one line of text.
4. Do not place projects or employers on the map. Do not add any other markers.
5. Put the map in the hero's right column in place of the terminal card, or behind a "View map" button that opens a modal built like the project dialog. Keep the hero terminal card as a fallback if the GeoJSON fails to load.
6. Pins are focusable buttons; the map has a text alternative: "Map of Kenya showing Nairobi and Nakuru County."

## Done when
- Map renders in both themes at 360px and 1280px wide, loads lazily, and does not block page load.
- Only the two real locations are shown.
- Build and lint pass.

## Message to paste
"Read docs/implementation/00-rules.md and docs/implementation/07-map-optional.md. Do stage 07 only. Do not invent geographic data; if you cannot get a real GeoJSON, stop and ask me."
