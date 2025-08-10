# Frontend Dockerfile - Kudwa Code Challenge
# Multi-stage build: Bun builder + Nginx runtime

# ---------- Builder ----------
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# For some node binaries on alpine
RUN apk add --no-cache libc6-compat

# Copy minimal files for better caching
COPY package.json bun.lock ./
COPY tsconfig.json tsconfig.base.json ./

# Copy workspaces
COPY apps ./apps
COPY packages ./packages

# Install dependencies
RUN bun install --frozen-lockfile --ignore-scripts

# Build shared workspace packages first (types, validators)
RUN bun run --filter @kudwa-code-challenge/types build \
 && bun run --filter @kudwa-code-challenge/validators build

# Build the frontend with configurable API URL
ARG VITE_API_URL=/api
ENV VITE_API_URL=${VITE_API_URL}
RUN sh -c "cd apps/frontend \
  && VITE_API_URL=\"${VITE_API_URL}\" bunx tsc -b \
  && VITE_API_URL=\"${VITE_API_URL}\" bunx vite build"

# ---------- Runtime ----------
FROM nginx:alpine AS runtime

# Nginx config for SPA + API proxy to backend
COPY apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Static assets
COPY --from=builder /app/apps/frontend/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --retries=5 CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
