# CCESA Website

Public website for the Centre for Civic Excellence and Social Advancement
(CCESA), built with Next.js 14 (App Router), React, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Structure

- `app/` — one folder per page (About, Programmes, Initiative, Events, News,
  Gallery, Resources, Contact, Privacy, Terms, plus placeholder Membership,
  Volunteer, and Donate routes).
- `components/Navbar.tsx` and `components/Footer.tsx` — shared site chrome
  used on every page.
- `public/` — the CCESA logo and the One Million Voters Initiative logo.
- `app/globals.css` — brand colors, fonts, and shared component classes
  (buttons, cards, badges, the initiative panel style).

## Notes for the next phase

- Contact, partnership/inquiry, membership, volunteer, and donation forms are
  visual-only placeholders — no backend or submission handling is wired up
  yet.
- The Resources page "Download" buttons and News "Read more" links are
  placeholders pending real files and articles.
- The Data & Progress dashboard on the Initiative page is intentionally
  empty pending real figures.
- Gallery and Events "past" photos are placeholder blocks — swap in real
  images under `public/` when available.
