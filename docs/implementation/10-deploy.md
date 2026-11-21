# Stage 10: README and deploy

## Goal
A public repository and a live URL.

## Steps
1. Write `README.md`: one-paragraph description, screenshot placeholders (light and dark), tech stack, how to run (`npm install`, `npm run dev`), how to edit content (one line per data file), how to build, license (MIT).
2. Add `.gitignore` (node_modules, dist, .env, OS files) and confirm no secrets or personal files are committed.
3. Choose one deploy path (ask me which before doing it):
   - **GitHub Pages**: set `base` in `vite.config.ts` to the repo name, add a GitHub Actions workflow that builds and deploys `dist` on every push to `main`.
   - **Vercel**: add the project via the Vercel dashboard, framework preset Vite, no config needed.
4. Add a status line in the README with the live URL placeholder, to fill in after the first deploy.
5. Give me the exact commands to create the GitHub repo, push, and enable Pages or connect Vercel. Do not run any command that publishes anything without my confirmation.
6. After the first deploy, open the live URL checklist: navbar links, theme toggle, process stack, filters, mobile view, social preview.

## Done when
- The site is live and the README link works.
- The repo contains no phone number or private data.
- `docs/content-todo.md` is empty or has only items I chose to postpone.

## Message to paste
"Read docs/implementation/00-rules.md and docs/implementation/10-deploy.md. Do stage 10 only. Ask me which host to use before changing any deploy config, and do not publish anything without my confirmation."
