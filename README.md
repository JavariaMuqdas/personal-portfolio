# Javaria Muqadas — Portfolio (Dark Edition)

A full-stack developer portfolio with a dark, editorial visual language:
a tilted-cards hero collage of real project screenshots, compact expandable
project cards ("Read more" reveals full description + extra screens), and
scroll-triggered fade-in transitions — built with React + Vite + Tailwind CSS.

## Design at a glance

- **Palette:** near-black navy background (`bg`/`surface`/`raised`), off-white
  text (`ink`), muted slate for secondary text (`muted`/`faint`), a coral-red
  CTA accent (`coral`), and a mint-green highlight for tags/success states
  (`mint`).
- **Type:** Fraunces (display/headlines) + Inter (body/UI) + JetBrains Mono
  (tags, labels, stack pills).
- **Motion:** `useReveal` (an IntersectionObserver hook) fades sections in on
  scroll; project cards expand/collapse via a CSS grid-based accordion
  (`.accordion-grid` in `index.css`) with no JS height measuring needed.
- **Signature element:** the hero's tilted pinboard collage of real project
  screenshots, and compact project cards that stay small until "Read more"
  is clicked — no oversized cards up front.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Requires Node.js 18+.

## Folder structure

```
portfolio-pinterest/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── projects.js        ← edit your projects, skills, journey here
    ├── hooks/
    │   └── useReveal.js       ← scroll-triggered fade-in, used across sections
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── ProjectsGrid.jsx
        ├── ProjectCard.jsx    ← compact card with expandable "Read more"
        ├── Skills.jsx
        ├── Journey.jsx
        ├── Contact.jsx
        └── Footer.jsx
public/
└── projects/                  ← project screenshots (jpg) + the PassX SVG mockup
```

## What to customize before you deploy

1. **`src/data/projects.js`** — each project has `blurb` (always visible),
   `description` (an array of paragraphs shown in "Read more"), `highlights`
   (bullet points), `images` (first = cover, rest = "more screens" gallery),
   and `links.code` / `links.live`. Update these as projects change.
2. **TrustLocal** is marked `status: 'in-development'` with `links: { code: null, live: null }`
   — once you have a repo or a deployed link, fill those in and the card's
   badge/buttons update automatically.
3. **PassX** currently uses a hand-built SVG mockup (`passx-modern-mockup.svg`)
   instead of a real screenshot, since the original UI wasn't ready to show.
   Swap in a real screenshot once the redesign is actually built.
4. **`src/components/Contact.jsx`** — update the email, GitHub, LinkedIn,
   and resume links.
5. **Favicon / meta tags** — update `index.html`.

## Deploying

This is a static site once built (`npm run build` → `dist/`). You can host
the `dist/` folder on Vercel, Netlify, GitHub Pages, or any static host —
all free options that work well for a portfolio you'll link from Pinterest.

## About using this for Pinterest / freelancing

Pinterest works best here as a *traffic and discovery channel*, not the
host of the site itself:
- Pin your project screenshots (styled to match this palette) with a
  link back to this deployed portfolio.
- Create a board per project (e.g. "Skill Hive — Hiring Platform UI") so
  each pin can link to that project's section.
- Add a case-study style breakdown (problem → approach → stack → result)
  on each project card's linked page — Pinterest users who click through
  respond well to a clear before/after or process story.
