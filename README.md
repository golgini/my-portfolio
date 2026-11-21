# Sammy Moseti Gesabo — Cybersecurity Portfolio

Personal portfolio for Sammy Moseti Gesabo, a Computer Security and Forensics student focused on security analysis, digital forensics, automation, and practical machine-learning projects.

The site is designed for recruiters, hiring managers, and technical collaborators looking for an entry-level SOC Analyst, Security Analyst, or Digital Forensics candidate.

## Overview

This single-page portfolio presents:

- A concise professional introduction and contact links
- A layered view of Sammy’s security workflow
- Technical skills, tools, and working strengths
- Selected security, machine-learning, and trading projects
- A journey timeline covering education, independent work, and training
- Education, community engagement, and a direct contact section

Incomplete personal details are marked as `TODO` in the typed data files and are automatically hidden from the public interface until they are confirmed.

## Technology

- React 18 with TypeScript in strict mode
- Vite for development and production builds
- Tailwind CSS for styling and responsive layouts
- Lucide React for interface icons
- Self-hosted Plus Jakarta Sans via `@fontsource`
- No backend, database, analytics, or runtime CDN dependencies

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Vite will print the local development URL, normally `http://localhost:5173`.

### Production checks

```bash
npm run lint
npm run build
npm run preview
```

## Content management

Portfolio content is kept separate from the UI in typed files under [`src/data/`](src/data/):

- `profile.ts` — identity, summary, contact links, and headline statistics
- `process.ts` — security process layers
- `skills.ts` — toolbox groups and soft skills
- `projects.ts` — project cards and project details
- `journey.ts` — study, project, and training timeline
- `education.ts` — education records
- `engagements.ts` — training and community engagements

See [`docs/content-todo.md`](docs/content-todo.md) for the current list of details that still need confirmation.

## Project structure

```text
src/
├── components/   Reusable interface components
├── data/         Typed portfolio content
├── hooks/        Reusable React hooks
├── sections/     Page-level portfolio sections
└── styles/       Global styles and theme tokens
docs/             Implementation notes and content planning
public/           Static assets served as-is
scripts/          Local validation scripts
```

The numbered implementation notes are available in [`docs/implementation/`](docs/implementation/).

## License

This project is released under the MIT License. See [`LICENSE`](LICENSE).
