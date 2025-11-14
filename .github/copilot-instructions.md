<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Repo snapshot
- **Framework:** Next.js 13 (App Router) using TypeScript.
- **App root:** `app/` (uses `app/layout.tsx` + `app/page.tsx`).
- **Styling:** TailwindCSS configured in `tailwind.config.ts`, globals in `app/globals.css`.
- **Scripts:** `npm run dev`, `npm run build`, `npm run start`, `npm run lint` (see `package.json`).

# Quick start (what an agent can assume/do)
- Run locally: `npm install` then `npm run dev` and open `http://localhost:3000`.
- Edit pages under `app/<Feature>/page.tsx`. Top-level entry is `app/page.tsx`.
- UI components live in `app/components/` — navigation components are under `app/components/navigation/` (see `navbar/`, `sidebar/`).

# Project-specific conventions (do not guess — follow these patterns)
- Use the App Router conventions: file-based routes inside `app/` with `page.tsx`, `layout.tsx`, `loading.tsx` when needed.
- Keep presentational components under `app/components/` and pages under `app/<Section>/page.tsx` (example: `app/Contact/page.tsx`).
- Use TypeScript `.tsx` files consistently — the repo is strict TypeScript (`tsconfig.json` has `strict: true`).
- Tailwind utility classes are used in JSX; don't replace with plain CSS unless adding a new component-level stylesheet and updating `globals.css`.
- Path alias: `@/*` maps to project root (see `tsconfig.json`). Use it only if already used in nearby files.

# Files to inspect for context (examples)
- `app/layout.tsx` — global layout and providers.
- `app/globals.css` — global Tailwind imports and overrides.
- `app/page.tsx` — main landing page (quick edit point).
- `app/components/navigation/navbar/Logo.tsx` — example small component style.
- `tailwind.config.ts` and `postcss.config.js` — Tailwind build configuration.
- `next.config.js` — currently empty; environment-specific flags live here.

# Build & deploy notes
- Standard Next.js build: `npm run build` then `npm run start` for production preview.
- There's a devDependency `@cloudflare/next-on-pages` — repository may target Cloudflare Pages in some deployments. Do not change deployment infra without checking with maintainers.

# What this repo does NOT contain (so avoid assumptions)
- No API routes under `pages/api` or `app/api` were found — assume integrations are external unless an API folder appears.
- No test runner or test scripts are present in `package.json` — do not add tests without owner approval.

# Guidance for editing and PRs
- Keep changes minimal and local to the feature you're modifying.
- Preserve existing component export styles and TypeScript typings.
- When adding UI, follow the directory pattern: `app/components/<feature>/` and import from the nearest relative path.
- If you modify build configs (`next.config.js`, `tailwind.config.ts`, `postcss.config.js`) validate locally with `npm run build`.

# Debugging hints
- Use `console.log` and React DevTools during `npm run dev` — source maps are enabled by default in Next dev.
- For CSS issues, inspect `app/globals.css` and `tailwind.config.ts` content paths.

# Agent behavior rules (short, actionable)
- Do not invent external services or credentials; if a change requires secrets or infra changes, ask the user.
- Make minimal, focused commits with clear messages (one feature/fix per PR).
- Do not add or run CI changes or new tooling without confirmation.
- Respect existing styling and TypeScript patterns; match indentation and naming.

# When in doubt
- Open the root `README.md` and the files listed above for context.
- Ask the repository owner before introducing tests, CI, or infra changes.

---
If any of the above is unclear or you want me to expand sections (for example, examples of component edits or a suggested PR checklist), tell me which parts to expand.
