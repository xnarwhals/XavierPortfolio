# Xavier Portfolio

Personal portfolio site built to showcase projects, skills, and an interest form for new client work.

## Tech Stack
- React 18 + React Router
- Vite 7
- Sass + Tailwind CSS (via `@tailwindcss/vite`)
- Three.js + React Three Fiber/Drei + postprocessing
- GSAP, Motion
- Font Awesome + Devicon
- React DnD

## Features
- Multi-page layout with routed sections (About, Portfolio, Services, etc.)
- 3D scene and interactive UI elements
- Interest form routed to Formspree
- GitHub Pages deployment via Actions

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deployment
This repo deploys to GitHub Pages using a GitHub Actions workflow that builds the Vite app and publishes the `dist` folder.

## Notes
- Assets live under `public/`
