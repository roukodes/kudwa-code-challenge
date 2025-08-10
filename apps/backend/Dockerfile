# Backend Dockerfile - Kudwa Code Challenge
# Multi-stage build using Bun for install/build and Bun runtime

# ---------- Builder ----------
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Copy minimal files first for better layer caching
COPY package.json bun.lock ./
COPY tsconfig.json tsconfig.base.json ./

# Copy workspaces
COPY apps ./apps
COPY packages ./packages

# Install all dependencies using Bun (respects bun.lock)
RUN bun install --frozen-lockfile --ignore-scripts

# Build shared workspace packages first (types, validators)
RUN bun run --filter @kudwa-code-challenge/types build \
 && bun run --filter @kudwa-code-challenge/validators build

# Generate Prisma client and build backend
RUN bun run --filter @kudwa-code-challenge/backend prisma:generate
RUN bun run --filter @kudwa-code-challenge/backend build

# ---------- Runtime ----------
FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

## Install minimal runtime deps (Prisma needs openssl); curl for healthcheck
RUN apk add --no-cache curl openssl libc6-compat

# Copy lockfile and manifest to keep parity
COPY --from=builder /app/package.json /app/bun.lock ./
# Copy node_modules resolved by builder stage (contains prisma client)
COPY --from=builder /app/node_modules ./node_modules
## Copy workspace packages (symlink targets present in node_modules)
COPY --from=builder /app/packages ./packages

# Copy built backend, prisma assets, and local ETL data
COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY --from=builder /app/apps/backend/prisma ./apps/backend/prisma
# Local JSON data fallback (optional; safe if folder is empty/missing)
COPY apps/backend/data ./apps/backend/data

EXPOSE 3000

# Healthcheck hits Express health endpoint
HEALTHCHECK --interval=30s --timeout=5s --retries=5 CMD curl -fsS http://localhost:3000/health || exit 1

# Run migrations then start the server with Node runtime
CMD ["sh", "-c", "cd apps/backend && npx prisma migrate deploy && node dist/server.js"]
