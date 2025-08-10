# Kudwa Code Challenge – Docker Guide

This repo is a Bun-based monorepo with two apps and shared packages:

- apps/backend: Express + Prisma (PostgreSQL)
- apps/frontend: Vite + React (served by Nginx in production)
- packages/*: shared types and validators

Docker images are multi-stage (Bun builder, lightweight runtime) and orchestrated via docker-compose.

## Prerequisites

- Docker Desktop or Docker Engine running
- Make a copy of environment variables:

```bash
cp .env.example .env
```

Edit `.env` as needed. For Docker Compose, `DATABASE_URL` inside backend is pre-wired to `db:5432` in `docker-compose.yml`.

Optional ETL remotes (fallback to local JSON if empty):

- ETL_TABLE_REPORT_URL
- ETL_MONTHLY_STATEMENTS_URL

Hosting suggestions: GitHub Raw, S3+CloudFront, GCS, Azure Blob, Netlify/Cloudflare Pages.

## Run with Docker

```bash
docker compose up --build
```

Services and endpoints:

- Frontend (Nginx): http://localhost:8080
- Backend API: http://localhost:3000
- Backend health: http://localhost:3000/health
- Postgres: localhost:5432 (database: kudwa_db, user: postgres, pass: postgres)

Notes:

- The frontend is built with `VITE_API_URL=/api` and Nginx proxies `/api` -> `backend:3000` in the Docker network.
- CORS is configured; when using the Nginx proxy, CORS is typically not required by the browser.
- Prisma migrations run on backend container startup.

## Local development (without Docker)

```bash
# Install deps
bun install

# Start Postgres separately (e.g., local instance or `docker compose up db`)

# Set DATABASE_URL in .env to point to your DB (localhost recommended)

# Backend
dotenv -e ./.env -- bun run --filter @kudwa-code-challenge/backend dev

# Frontend
dotenv -e ./.env -- bun run --filter @kudwa-code-challenge/frontend dev
```

## Troubleshooting

- Docker daemon not running: start Docker Desktop/Engine and retry.
- Prisma client mismatch: remove `node_modules` and rebuild images (`docker compose build --no-cache`).
- Port conflicts: change published ports in `docker-compose.yml` (`3000`, `8080`, `5432`).
- Database persistence: data stored in the `pgdata` volume; remove with `docker volume rm <project>_pgdata` if needed.

## File references

- Dockerfiles: `apps/backend/Dockerfile`, `apps/frontend/Dockerfile`
- Nginx config: `apps/frontend/nginx.conf`
- Compose: `docker-compose.yml`
- Environment template: `.env.example`
