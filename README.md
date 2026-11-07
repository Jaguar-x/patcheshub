# PatchesHub

Next.js App Router + React + TypeScript + Tailwind CSS. Node.js handles server behavior through Next.js; no separate API service is needed for the current scope.

## Development

Use Node.js 24 LTS (see `.nvmrc`).
The machine's default Node.js 18 does not meet the project requirement. Verification uses the existing bundled Node.js 24 runtime without changing the system installation.

```sh
npm ci
npm run dev
```

```sh
npm run typecheck
npm run build
npm start
```

## Structure

```text
assets/source/brand/        Unmodified supplied originals
docs/                      Brief, asset provenance, project decisions
public/assets/brand/       Public website logos
public/assets/products/    Images grouped by product category
public/assets/editorial/   Homepage and storytelling images
src/app/                   Routes, root layout, page metadata
src/components/brand/      Logo components
src/components/layout/     Shared header and footer
src/components/sections/   Page sections
src/config/                Site-wide settings
src/content/               Typed product content
src/lib/                   Shared utilities and asset references
src/styles/                Tailwind import and design tokens
```

Keep route files small and product copy in `src/content/`. Add shared UI components when needed rather than pre-creating unused abstractions.

Development and production scripts select Webpack explicitly for compatibility with this Windows environment.

## Current status

The homepage and `/contact` page now include original concept imagery, desktop product navigation, a mobile navigation dialog, product inquiry links, a three-step process, and expandable FAQs. Original supplied files are preserved in `assets/source/brand/`.

The studio redesign adds self-hosted Bricolage Grotesque/DM Sans, an original transparent merchandise collage, shaped category images, a pausable type ribbon, and a keyboard-accessible material explorer. Its motion respects reduced-motion preferences. Design decisions and the root recorder-attribute compatibility fix are documented in `docs/redesign-notes.md`.

The simple contact form validates required fields and shows an inquiry preview. Per the current scope, it does not send, store, or email any data. Product links preselect the appropriate category. Connect delivery only when the inbox and service are confirmed.

This draft disables search indexing; update robots metadata and configure canonical URLs before production launch. Asset generation prompts and provenance are in `docs/image-prompts.md` and `docs/asset-register.md`.
