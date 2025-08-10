# @kudwa-code-challenge/validators – Walkthrough

Runtime validation schemas built with Zod to ensure input/output correctness for APIs and data pipelines.

---

## 0. Goal

Provide reusable, type‑safe validation for data boundaries (HTTP requests/responses, ETL inputs), derived from shared domain types where applicable.

---

## 1. What It Contains

- Zod schemas for core entities (aligned with `@kudwa-code-challenge/types`).
- Parsers and small helpers for safe decoding of external data.
- Minimal transform helpers (e.g., coercions) when needed.

---

## 2. Build & Scripts

This package uses `tsup` for building ESM + d.ts.

```bash
# Build
bun run --filter @kudwa-code-challenge/validators build

# Type check only
bun run --filter @kudwa-code-challenge/validators type-check

# Clean artifacts
bun run --filter @kudwa-code-challenge/validators clean
```

Outputs:
- `dist/index.js`
- `dist/index.d.ts`

---

## 3. Usage

Basic example:

```ts
import { z } from 'zod'
import { StatementSchema } from '@kudwa-code-challenge/validators'

// Parse unknown data at runtime
const parsed = StatementSchema.parse(unknownJson)
```

In React Query:

```ts
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api/client'
import { StatementsSchema } from '@kudwa-code-challenge/validators'

export function useStatements() {
  return useQuery({
    queryKey: ['statements'],
    queryFn: async () => {
      const res = await api.get('/api/statements')
      return StatementsSchema.parse(res.data)
    },
  })
}
```

---

## 4. Development Notes

- Keep schemas in sync with `@kudwa-code-challenge/types`.
- Prefer composition and reuse; avoid large monolithic schemas.
- Use `z.infer<typeof Schema>` to derive static types where needed.

---

## 5. Consumers

- `apps/backend` (validating inputs/outputs at API boundary, ETL safety)
- `apps/frontend` (decoding API responses before use)
