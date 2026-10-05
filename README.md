# Sammy Moseti Gesabo — Portfolio

Sammy Moseti Gesabo’s single-page portfolio presents Computer Security & Forensics work for recruiters and hiring managers seeking entry-level SOC Analyst, Digital Forensic Investigator, and Security Analyst candidates.

## Status

Live URL: `https://your-project.vercel.app/` (placeholder until the first Vercel deployment)

## Screenshots

Add light-theme and dark-theme screenshots here after the first visual review:

<!-- Light theme screenshot: docs/screenshots/light.png -->
<!-- Dark theme screenshot: docs/screenshots/dark.png -->

## Tech stack

- Vite, React 18, TypeScript (strict)
- Tailwind CSS and lucide-react
- Self-hosted Plus Jakarta Sans via `@fontsource`
- No backend, database, analytics, or runtime CDN dependencies

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run preview
```

## Edit content

All portfolio content lives in typed files under `src/data/`:

- `profile.ts` — identity, summary, contact links, and stats
- `process.ts` — process layers
- `skills.ts` — toolbox groups and soft skills
- `projects.ts` — project cards and details
- `journey.ts` — study, project, and training timeline
- `education.ts` — education records
- `engagements.ts` — training and community engagements

Replace `TODO` values only with confirmed information. TODO values are hidden from the UI. See [`CONTENT-TODO.md`](CONTENT-TODO.md) for the current inventory.

## Deploy with Vercel

Import this repository in the Vercel dashboard and use the Vite preset. No additional Vercel configuration is required.

To create a GitHub repository and push the current local history, run these commands after creating an empty repository on GitHub:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/sammy-portfolio.git
git push -u origin main
```

Then in Vercel: **Add New Project** → select the GitHub repository → confirm the Vite preset → **Deploy**. Update the Live URL above after deployment.

## License

MIT License. See [`LICENSE`](LICENSE).
