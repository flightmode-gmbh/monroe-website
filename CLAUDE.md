# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monroe Zürich — a bar/restaurant website built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4. Deployed on Vercel at `monroe.zuerich`. All content is static (no CMS).

**SEO is a top priority.** All changes must be optimized for search engine discoverability. This includes semantic HTML, proper meta tags/descriptions, structured data (JSON-LD), meaningful alt text on images, canonical URLs, and clean URL structure. The site already uses JSON-LD schemas (BarOrPub, Menu, Reservation), a dynamic sitemap, and robots.txt — maintain and extend these patterns for any new pages or content.

## Commands

- **Dev server**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (Next.js ESLint config with core-web-vitals + TypeScript rules)

No test framework is configured.

## Architecture

- **Routing**: Next.js App Router with three pages: `/` (home with hero video), `/menu` (drink/food menu images), `/reservations` (booking via Aleno external service)
- **Layouts**: Root layout (`src/app/layout.tsx`) wraps all pages with Navigation and Footer. Page-specific layouts in `/menu` and `/reservations` add JSON-LD structured data for SEO.
- **Components**: `src/components/` contains shared UI — `navigation.tsx`, `footer.tsx`, `button.tsx` (with `primary`/`secondary` variants via `clsx`).
- **Sitemap**: Dynamic XML sitemap generated via API route at `src/app/sitemap.xml/route.ts`.

## Styling

Tailwind CSS v4 with `@tailwindcss/postcss`. Custom theme in `src/app/globals.css`:
- Background: `#fff7e7` (warm cream)
- Foreground/accent: `#F0866D` (coral)
- Hover color: `#59B073` (green)

Uses a mix of Tailwind utility classes and custom CSS in `globals.css` for navbar, footer, and responsive layouts. Mobile-first with 768px breakpoint.

## Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Static Assets

- `/public/assets/` — gallery images
- `/public/docs/` — menu PNGs, event PDFs
- `/public/monroe-slot.mp4` — hero video
