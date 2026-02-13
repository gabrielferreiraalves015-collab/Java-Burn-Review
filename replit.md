# Overview

This is a **Java Burn product review/landing page** — a single-page marketing site built with React on the frontend and Express on the backend. The site is in Portuguese (Brazilian) and features product benefits, ingredients, user reviews, comparison tables, FAQs, and prominent call-to-action buttons. It includes a simple analytics system to track page views and CTA clicks.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend
- **Framework**: React 18 with TypeScript, bundled via Vite
- **Routing**: Wouter (lightweight client-side router) — currently just a home page and a 404 page
- **Styling**: Tailwind CSS with CSS variables for theming, using a custom color palette (vibrant yellow `#FFD814` + deep blue `#002B5C`)
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives — extensive component library already installed
- **Animations**: Framer Motion for scroll reveals and button interactions
- **Fonts**: Montserrat (headings) and Open Sans (body) via Google Fonts
- **State Management**: TanStack React Query for server state
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

## Backend
- **Framework**: Express 5 running on Node.js with TypeScript (via tsx)
- **Architecture**: Single `server/routes.ts` file registers API endpoints; storage layer abstracted via `IStorage` interface implemented by `DatabaseStorage`
- **API**: One endpoint — `POST /api/analytics` for recording view/click events
- **Development**: Vite dev server runs as middleware in development mode with HMR
- **Production**: Client is built to `dist/public`, server is bundled with esbuild to `dist/index.cjs`

## Shared Code
- **`shared/schema.ts`**: Drizzle ORM schema definitions and Zod validation schemas (via drizzle-zod)
- **`shared/routes.ts`**: API route definitions with path, method, and input/output schemas — acts as a contract between frontend and backend

## Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Connection**: `node-postgres` (pg) Pool, configured via `DATABASE_URL` environment variable
- **Schema**: Single `analytics` table with columns: `id` (serial), `event_type` (text), `location` (text), `timestamp` (auto-set)
- **Migrations**: Use `drizzle-kit push` (`npm run db:push`) to sync schema to database

## Build System
- **Client build**: Vite builds to `dist/public`
- **Server build**: esbuild bundles server code to `dist/index.cjs`, with commonly-used dependencies bundled inline (allowlist in `script/build.ts`) for faster cold starts
- **Scripts**: `npm run dev` for development, `npm run build` for production build, `npm start` to run production

# External Dependencies

- **PostgreSQL**: Required database, connected via `DATABASE_URL` environment variable. Must be provisioned before the app can start.
- **Google Fonts**: Montserrat and Open Sans loaded from `fonts.googleapis.com`
- **Replit Plugins** (dev only): `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` — only active in development on Replit
- **No authentication**: This is a public-facing landing page with no user accounts or auth system
- **No external APIs**: The app currently doesn't call any third-party APIs, though build config includes allowlisted deps for OpenAI, Stripe, Nodemailer, etc. suggesting possible future integrations