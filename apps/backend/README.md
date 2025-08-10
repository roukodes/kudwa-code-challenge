# Backend Walkthrough – Kudwa Code Challenge

This document explains **all the steps** taken to go from raw JSON data to a finished backend service that meets the project requirements.

---

## 0. Goal

Unify two JSON API sources into a single relational database schema, load them via an **ETL process**, and expose clean, documented APIs for the frontend.

**Data sources:**

1. **`monthly-statements.json`** – monthly statement totals with nested categories and line items.
2. **`table-report.json`** – Profit & Loss report with header, columns, and hierarchical rows.

---

## 1. Understanding the Data → Unified Schema

### Sources

- **Monthly Statements**
  - Per-month totals (gross profit, operating profit, net profit).
  - Categories (REVENUE, COGS, EXPENSES, etc.) with deeply nested line items.

- **Table Report**
  - Header: metadata like report name, date range, currency.
  - Columns: months, each with a title, start date, end date.
  - Rows: hierarchical row, each row has values for each column.

### Schema Design

We designed the Prisma schema to:

- Normalize periods so both sources align on month boundaries.
- Preserve hierarchies for accounts/rows and nested line items.
- Allow multiple companies but integrate a single-company setup.

### Key Models & JSON Mapping

The following table explains how each Prisma model maps to the provided JSON data sources.

| Model                  | Purpose                                                                             | Source JSON                                                                                              | Notes                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Company**            | Optional tenant for multi-company setups. Defaults to a single `"Default Company"`. | _Not explicitly in JSON_                                                                                 | Enables multi-company support if needed in the future.                              |
| **Period**             | Represents a time span (usually 1 month).                                           | `table-report.json → Columns[].ColTitle, StartDate, EndDate`<br>`monthly-statements.json → Period dates` | **`label`** = `ColTitle` from `table-report`. Shared key for aligning both sources. |
| **Statement**          | Header-level monthly statement for a company.                                       | `monthly-statements.json → totals and period info`                                                       | One per `(companyId, periodId)`. Contains aggregated financial totals.              |
| **StatementCategory**  | Top-level category in a statement (e.g., REVENUE, COGS).                            | `monthly-statements.json → Categories[]`                                                                 | Has a type (enum) and total value.                                                  |
| **StatementLineItem**  | Detailed line items under a category. Can be nested (self-relation).                | `monthly-statements.json → Categories[].Items[]`                                                         | Represents the granular breakdown of statement data.                                |
| **ReportHeader**       | Metadata for a P&L report.                                                          | `table-report.json → Header`                                                                             | Contains report name, currency, and date range.                                     |
| **ReportAccount**      | A row in the P&L report (can be nested).                                            | `table-report.json → Rows[]`                                                                             | Hierarchical structure; each account has values across multiple periods.            |
| **ReportAccountValue** | Numeric value for a given account in a specific period.                             | `table-report.json → Rows[].ColData[]`                                                                   | Linked to both `ReportAccount` and `Period`.                                        |

**Key point:**

- **ReportAccount** = rows in `table-report.json`.
- **StatementLineItem** = items in `monthly-statements.json`.
- **Period** is the shared link between both datasets.

**Indexes & Constraints:**

- `Period @@unique([startDate, endDate])`
- `ReportAccountValue @@unique([accountId, periodId], name: "accountId_periodId")`
- Indexes on all foreign keys for join performance.

---

## 2. Database Setup & Migrations

- Created local Postgres DB and user.
- `.env` with `DATABASE_URL` for Prisma.
- Common types and schemas shared between FE and BE.
- Migrations run with:
  ```bash
  npm run prisma:migrate:dev
  npm run prisma:migrate:deploy
  ```

---

## 3. ETL Process

The ETL process is **modular** and split into dedicated loaders:

### Extraction

- Read JSON files from `apps/backend/data/`.

### Transform

- **Periods**: derived from `table-report.Columns.Column[]`
- **Reports**:
  - Upsert `ReportHeader` from `Header`.
  - Recursively insert `ReportAccount` rows for each Row tree.
  - Upsert `ReportAccountValue` for each account-column pair, matched to a `Period` by `ColTitle`.
- **Statements**:
  - Upsert `Statement` for each month.
  - Insert `StatementCategory` entries.
  - Recursively insert `StatementLineItem`s (nested via `parentLineItemId`).

### Load

- Upserts for:
  - `Period`
  - `ReportHeader`
  - `ReportAccountValue`
  - `Statement`
- Categories and line items insertion.

---

## 4. Backend API

### Endpoints

- `POST /api/etl/run` – triggers ETL.
- `GET /api/reports` – lists report headers.
- `GET /api/reports/:reportId` – hierarchical accounts + values.
- `GET /api/statements` – list available periods.
- `GET /api/statements/:periodId` – statement totals + categories + nested line items.

### Structure

- `src/app.ts` – Express app, middleware, `/docs`, health checks.
- `src/server.ts` – start server + graceful shutdown.
- `src/routes` – define routes, handle validation, return standardized responses.
- `src/services` – database and business logic.
- `src/middleware` – error handling, validation, response helpers.

---

## 5 Middleware & Ops

CORS: enabled, origin configurable.

Security: helmet.

Logging: morgan in dev.

Health Checks: /health.

Error Handling: standardized JSON error structure.

Graceful Shutdown: close server & DB connections on SIGINT/SIGTERM.

---

## 6. API Documentation (Swagger)

- **Tools**: `swagger-jsdoc`, `swagger-ui-express`.
- Defined OpenAPI components for all major entities:
  - `ReportHeader`, `ReportNode`, `Statement`, `StatementCategory`, `Period`.
- Added endpoint JSDoc in route files, scanned by Swagger.
- Mounted at `/docs`.
