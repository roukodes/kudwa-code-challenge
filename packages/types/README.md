# @kudwa-code-challenge/types – Walkthrough

Shared TypeScript type definitions used by both backend and frontend.

---

## 0. Goal

Provide a single source of truth for domain models and API types to ensure end‑to‑end type safety across the monorepo.

---

## 1. What It Contains

- Core domain types: Company, Period, Statement, StatementCategory, StatementLineItem, ReportHeader, ReportAccount, ReportAccountValue, etc.
- DTOs for API requests/responses when applicable.
- Narrow utility types for common patterns.

> Note: Keep this package framework-agnostic (no React/Express imports).

---

## 2. Build & Scripts

This package uses `tsup` for fast builds and type declarations.

```bash
# Build (generates ESM + .d.ts into dist/)
bun run --filter @kudwa-code-challenge/types build

# Type check only
bun run --filter @kudwa-code-challenge/types type-check

# Clean artifacts
bun run --filter @kudwa-code-challenge/types clean
```

Outputs:
- `dist/index.js` (ESM)
- `dist/index.d.ts` (types)

---

## 3. Usage

Import from apps or other packages:

```ts
import type { Statement, Period } from '@kudwa-code-challenge/types'
```

Example:

```ts
function formatStatement(s: Statement): string {
  return `${s.period.label}: ${s.totals.netProfit}`
}
```

---

## 4. Development Notes

- Avoid runtime code; prefer pure type exports to keep bundle size negligible.
- If a runtime helper is needed, keep it minimal and tree-shakeable.
- Coordinate changes with backend/frontend maintainers to avoid breaking API contracts.

---

## 5. Versioning & Consumers

- Version is internal to the monorepo (workspace `*`).
- Consumers: `apps/backend`, `apps/frontend`, `packages/validators`.
