# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## Architecture

Single-page personal portfolio site built with React 19 + Vite 7 + Tailwind CSS 4.

**Entry point:** `src/main.jsx` renders `<App />` into `#root`.

**App structure:** `src/App.jsx` composes the page as a flat list of section components in order: Header, SocialSidebar, Hero, About, Experience, Work, Skill, Contact. There is no routing — navigation uses anchor links with smooth scrolling.

**Styling approach:** Tailwind CSS 4 via `@tailwindcss/vite` plugin. Global styles and custom component classes (`.btn`, `.text-field`, `.navbar`, `.headline-1`, etc.) are defined in `src/index.css` using `@apply`. Components use Tailwind utility classes directly. The font is Inter, loaded via Google Fonts.

**Contact form:** Uses Web3Forms API (`https://api.web3forms.com/submit`). The access key is stored in `.env` as `VITE_WEB3FORMS_KEY`.

**Static assets:** Images in `public/images/` (tech logos, project screenshots, people photos, favicon, logo).

**No TypeScript, no tests, no component library.** All components are functional React components using JSX. `prop-types` is available as a dependency.
