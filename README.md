# Kudwa Code Challenge

This repo is a Bun-based monorepo with two apps and shared packages:

- apps/backend: Express + Prisma (PostgreSQL)
- apps/frontend: Vite + React (served by Nginx in production)
- packages/*: shared types and validators

---

## Overview & Scope

This project ingests two financial JSON sources, models them in PostgreSQL via Prisma, exposes a typed REST API, and renders insights in a React SPA.

- Project goals and acceptance criteria are documented in `REQUIREMENTS.md`.
- Backend provides ETL to load data from local JSON or remote URLs.
- Frontend consumes the API and visualizes data using MUI and React Query.

---

## Live URLs

- Frontend: https://kudwa-code-challenge-frontend.onrender.com/
- Backend Swagger UI: https://kudwa-code-challenge-backend.onrender.com/docs

## Data Sources (remote JSON)

- monthly-statements.json: https://gist.githubusercontent.com/roukodes/64a94cbcc567da9671bf9bed3a9ee297/raw/d51c4cadb29080795e03f2981e5e4a1dfe919a03/monthly-statements.json
- table-report.json: https://gist.githubusercontent.com/roukodes/64a94cbcc567da9671bf9bed3a9ee297/raw/d51c4cadb29080795e03f2981e5e4a1dfe919a03/table-report.json

---

## Monorepo Structure

- apps/backend: Express API with Prisma, ETL, Swagger docs.
- apps/frontend: Vite + React SPA, Nginx in production.
- packages/types: shared TypeScript domain types.
- packages/validators: Zod schemas for runtime validation.

Check each workspace's `package.json` and local `README.md` for detailed scripts and notes.

---

Docker images are multi-stage (Bun builder, lightweight runtime) and can be orchestrated via docker-compose.

## Run with Docker

### Prerequisites

- Docker Desktop or Docker Engine running
- Make a copy of environment variables:

```bash
cp .env.example .env
```

Edit `.env` as needed. For Docker Compose, `DATABASE_URL` inside backend is typically set to `postgres://postgres:postgres@db:5432/kudwa_db`.

Optional ETL remotes (fallback to local JSON if empty):

- ETL_TABLE_REPORT_URL
- ETL_MONTHLY_STATEMENTS_URL

Hosting suggestions: GitHub Raw, S3+CloudFront, GCS, Azure Blob, Netlify/Cloudflare Pages.

### Start

```bash
docker compose up --build
```

Services and endpoints (default):

- Frontend (Nginx): http://localhost:8080
- Backend API: http://localhost:3000
- Backend health: http://localhost:3000/health
- Postgres: localhost:5432 (database: kudwa_db, user: postgres, pass: postgres)

Notes:

- The frontend can be built with `VITE_API_URL=/api` and Nginx proxies `/api` -> `backend:3000` in the Docker network.
- CORS is configured; when using the Nginx proxy, CORS is typically not required by the browser.
- Prisma migrations may run on backend container startup depending on the start command.

## Local development (without Docker)

### Prerequisites

- Bun >= 1.x installed
- PostgreSQL (local or hosted, e.g., Neon). Set `DATABASE_URL` in `.env`.

### Steps

1) Install dependencies

```bash
bun install
```

2) Configure environment

- Copy `.env.example` to `.env` and set `DATABASE_URL`.
- Optional: set remote ETL URLs
  - `ETL_TABLE_REPORT_URL`
  - `ETL_MONTHLY_STATEMENTS_URL`

3) Run database migrations

```bash
bun run --filter @kudwa-code-challenge/backend prisma:migrate:dev
```

4) Start services

```bash
# Backend (dev)
dotenv -e ./.env -- bun run --filter @kudwa-code-challenge/backend dev

# Frontend (dev)
dotenv -e ./.env -- bun run --filter @kudwa-code-challenge/frontend dev
```

## Troubleshooting

- Docker daemon not running: start Docker Desktop/Engine and retry.
- Prisma client mismatch: remove `node_modules` and rebuild images (`docker compose build --no-cache`).
- Port conflicts: change published ports in your compose file (`3000`, `8080`, `5432`).
- Database persistence (when using Docker): data stored in the `pgdata` volume; remove with `docker volume rm <project>_pgdata` if needed.

## Docs

- Requirements: `REQUIREMENTS.md`
- Backend docs: `apps/backend/README.md`
- Frontend docs: `apps/frontend/README.md`
- Types package docs: `packages/types/README.md`
- Validators package docs: `packages/validators/README.md`
- Environment template: `.env.example`
