# Frontend Walkthrough – Kudwa Code Challenge

This document explains the structure, decisions, and workflows for the React + Vite frontend.

---

## 0. Goal

Build a responsive SPA that consumes the backend API, visualizes financial data, and provides a smooth UX with good performance and DX.

---

## 1. Tech Stack

- React 19 + JSX
- Vite 7 (bundler/dev server)
- MUI 7 (UI kit) + Emotion
- React Query 5 (server state)
- Axios (HTTP)
- TypeScript 5
- Shared workspaces: `@kudwa-code-challenge/types`, `@kudwa-code-challenge/validators`

---

## 2. Project Structure

- `apps/frontend/src/`
  - `api/` – API clients and query keys
  - `components/` – reusable UI components
  - `pages/` – route-level pages
  - `routes/` – router setup
  - `hooks/` – custom hooks (React Query, helpers)
  - `theme/` – MUI theme configuration
  - `utils/` – utilities and helpers

Path aliases: `@/*` -> `apps/frontend/src/*` (see `apps/frontend/tsconfig.json`).

---

## 3. Data Flow

- React Query manages server state (caching, retries, background refetch).
- Axios clients encapsulate base URL and interceptors.
- Types and validators come from shared packages for type-safe data handling.

---

## 4. Environment Variables

- `VITE_API_URL`: Base URL for the API during dev/build.
  - Local dev: typically `http://localhost:3000` (via `.env` at repo root).
  - Docker build: image uses `VITE_API_URL=/api`; Nginx proxies `/api` -> backend.

---

## 5. Scripts

Defined in `apps/frontend/package.json` (run from repo root via Bun workspaces):

```bash
# Dev server with env from root .env
bun run --filter @kudwa-code-challenge/frontend dev

# Type-check + production build
bun run --filter @kudwa-code-challenge/frontend build

# Preview production build locally
bun run --filter @kudwa-code-challenge/frontend preview
```

Dockerized production runtime is Nginx (see `apps/frontend/Dockerfile`, `apps/frontend/nginx.conf`).

---

## 6. Routing

- React Router v7
- SPA fallback configured in Nginx so deep links work on refresh.

---

## 7. Styling & Theming

- MUI with Emotion CSS-in-JS
- Custom theme in `src/theme/` with palette/typography overrides.

---

## 8. Usage Examples

```ts
// api/client.ts
import axios from 'axios'

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL })
```

```ts
// api/queries.ts
import { useQuery } from '@tanstack/react-query'
import { api } from './client'
import type { Statement } from '@kudwa-code-challenge/types'

export function useStatements() {
  return useQuery({
    queryKey: ['statements'],
    queryFn: async () => (await api.get<Statement[]>('/api/statements')).data,
  })
}
```

---

## 9. Build & Deploy

- Production build: `vite build`
- Served by Nginx with API proxy: `/api` -> `backend:3000`
- See top-level Docker guide in `README.md` and `docker-compose.yml`.

---

## 10. Quality & DX

- TypeScript strict mode
- Linting via root `eslint.config.js`
- Fast HMR via Vite
