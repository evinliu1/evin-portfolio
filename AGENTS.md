# AGENTS.md - Evin Portfolio

## Project Overview

A React 19 portfolio website built with Vite and Tailwind CSS v4. The site showcases professional experience, projects, skills, and contact information.

## Build Commands

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production (outputs to dist/)
npm run lint     # Run ESLint on all JS/JSX files
npm run preview  # Preview the production build locally
```

**Single File Linting:**
```bash
npx eslint src/components/Hero.jsx
```

## Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.17** - Styling (via @tailwindcss/vite plugin)
- **ESLint 9.39.1** - Linting with flat config
- **PropTypes 15.8.1** - Runtime prop validation

## Code Style Guidelines

### File Structure
- Components live in `src/components/` with PascalCase names (e.g., `Hero.jsx`, `About.jsx`)
- One component per file; default export the component
- CSS files co-located or in `src/index.css` for global styles

### Imports
```jsx
import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
```

### Component Patterns
```jsx
// Functional component with arrow function
const ComponentName = ({ prop1, prop2 }) => {
  return (
    <section id="section-id" className="section">
      {/* JSX content */}
    </section>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.array,
};

export default ComponentName;
```

### PropTypes
All components use PropTypes for prop validation:
```jsx
ComponentName.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};
```

### JSX Conventions
- Use `className` (not `class`)
- Self-close tags: `<Component />`
- Use `htmlFor` instead of `for` on labels
- Boolean attributes: `disabled`, `checked`, etc.
- Fragment shorthand: `<>...</>` when no wrapper needed
- Escape entities: `&apos;`, `&nbsp;`, `&mdash;` or use JSX alternatives

### Tailwind CSS
- Tailwind v4 uses `@apply` directives in `@layer utilities`
- Use zinc color palette for dark theme (zinc-900 bg, zinc-50 text)
- Use sky-400 for accent colors
- Custom utility classes defined in `src/index.css`

### Naming Conventions
- **Components**: PascalCase (`Hero`, `About`, `ProjectCard`)
- **Props**: camelCase (`projectLink`, `imgSrc`, `ariaLabel`)
- **CSS Classes**: kebab-case (`.nav-link`, `.btn-primary`, `.section`)
- **Constants**: camelCase or SCREAMING_SNAKE_CASE for config values

### ESLint Rules
The ESLint config (`eslint.config.js`) enforces:
- `no-unused-vars`: Error on unused vars except those matching `^[A-Z_]`
- React Hooks rules enabled
- React Refresh compatibility

### Accessibility
- Use `aria-label` on icon-only buttons/links
- `aria-hidden="true"` on decorative elements
- Use semantic HTML (`<section>`, `<nav>`, `<main>`, `<figure>`)
- Always provide `alt` text for meaningful images

### Common Patterns

**Conditional class rendering:**
```jsx
className={"btn btn-primary " + classes}
```

**Map rendering with keys:**
```jsx
{items.map((item, i) => (
  <div key={item.id || i}>...</div>
))}
```

**Image with lazy loading:**
```jsx
<img src={imgSrc} alt={title} loading="lazy" className="..." />
```

## Directory Layout

```
src/
  components/     # React components
  App.jsx         # Root component
  main.jsx        # Entry point
  index.css       # Global styles + Tailwind
public/
  images/         # Static images
dist/             # Production build output (generated)
```

## Notes

- No TypeScript - plain JavaScript/JSX only
- No test suite currently configured
- `dist/` is gitignored, generated on build
- Resume PDF stored in `public/`
