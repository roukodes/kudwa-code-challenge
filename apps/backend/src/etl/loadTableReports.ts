import type { PrismaClient, ReportAccountType } from '@prisma/client';
import type { ITXClientDenyList } from '@prisma/client/runtime/library';

import { prisma } from '@/db';
import type { TableReportJsonType } from '@/types/data.types';
import {
  COL_KEY_IDENTIFIER,
  END_DATE_COL_IDENTIFIER,
  START_DATE_COL_IDENTIFIER,
  TOTAL_COL_IDENTIFIER,
} from '@/utils/constants';
import { convertTypeStringToAccountType } from '@/utils/helpers';

import { upsertPeriod } from './shared';

type TransactionClient = Omit<PrismaClient, ITXClientDenyList>;

type ReportRows = TableReportJsonType['data']['Rows']['Row'];
type ReportColumns = TableReportJsonType['data']['Columns']['Column'];

interface WalkRowsParams {
  tx: TransactionClient;
  reportId: number;
  cols: ReportColumns;
  periodMap: Map<string, number>;
  rows: ReportRows;
  parentId?: number;
}

interface CreateAccountParams {
  tx: TransactionClient;
  reportId: number;
  name: string;
  type: ReportAccountType | null;
  parentAccountId?: number;
}

/**
 * Parses a value into a number
 */
function parseAmount(rawValue: any): number | undefined {
  if (rawValue === null || rawValue === undefined) {
    return undefined;
  }

  if (typeof rawValue === 'number') {
    return rawValue;
  }

  if (typeof rawValue === 'string') {
    const cleaned = rawValue.replace(/[,]/g, '');
    if (cleaned === '' || cleaned === '-') return undefined;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : undefined;
  }

  return undefined;
}

/**
 * Create a new report account (either a grouping or a leaf) for this report.
 * Supports hierarchical account structure by accepting an optional parentAccountId.
 */
async function createAccount({ tx, reportId, name, type, parentAccountId }: CreateAccountParams) {
  return tx.reportAccount.create({
    data: {
      reportId,
      parentAccountId,
      accountName: name,
      type: type ?? undefined,
    },
  });
}

/**
 * Recursively walks rows of the report table, creating account groups and leaf accounts,
 * and upserting account values for each period. Handles both group and leaf rows.
 */
async function walkRows(params: WalkRowsParams) {
  const { tx, reportId, cols, periodMap, rows, parentId } = params;
  for (const row of rows) {
    const colData = row?.Header?.ColData ?? [];
    const headerName = colData?.[0]?.value ?? null;
    const childRows = (row?.Rows?.Row as ReportRows | undefined) ?? [];

    // If this row is a group (has a header), create a parent account and process its children recursively
    if (headerName) {
      const groupAccount = await createAccount({
        tx,
        reportId,
        name: headerName,
        parentAccountId: parentId,
        type: convertTypeStringToAccountType(row?.group) ?? null,
      });

      for (let i = 1; i < colData.length && i < cols.length; i++) {
        const col = cols[i];
        if (!col) continue;

        const colKey = col.MetaData?.find(
          (m) => m.Name?.toLowerCase() === COL_KEY_IDENTIFIER,
        )?.Value?.trim();
        if (!colKey || colKey.toLowerCase() === TOTAL_COL_IDENTIFIER) continue;

        const periodId = periodMap.get(colKey);
        if (!periodId) continue;

        const amount = parseAmount(colData[i]?.value);
        await tx.reportAccountValue.upsert({
          where: { accountId_periodId: { accountId: groupAccount.id, periodId } },
          update: { amount },
          create: { accountId: groupAccount.id, periodId, amount },
        });
      }

      // Recurse into children
      if (childRows.length) {
        await walkRows({
          tx,
          reportId,
          cols,
          periodMap,
          rows: childRows,
          parentId: groupAccount.id,
        });
      }
      continue;
    }

    // If this row is a leaf (has column data), create a leaf account and upsert a value for each period column
    if (colData && colData.length > 0) {
      const name = String(colData[0]?.value ?? 'Unnamed');
      const leafAccount = await createAccount({
        tx,
        name,
        reportId,
        parentAccountId: parentId,
        type: convertTypeStringToAccountType(row?.type) ?? null,
      });

      // For each period column (skipping the first, which is the row label), upsert the value for this account and period
      for (let i = 1; i < colData.length && i < cols.length; i++) {
        const col = cols[i];
        if (!col) continue;

        const colKey = col.MetaData?.find(
          (m) => m.Name?.toLowerCase() === COL_KEY_IDENTIFIER,
        )?.Value?.trim();
        if (!colKey || colKey.toLowerCase() === TOTAL_COL_IDENTIFIER) continue;

        const periodId = periodMap.get(colKey);
        if (!periodId) continue;

        const amount = parseAmount(colData[i]?.value);
        // Upsert the value for this account and period (ensures idempotency and supports updates)
        await tx.reportAccountValue.upsert({
          where: { accountId_periodId: { accountId: leafAccount.id, periodId } },
          update: { amount },
          create: { accountId: leafAccount.id, periodId, amount },
        });
      }
      continue;
    }

    // Some rows are summaries/blank—just skip
  }
}

/**
 * Loads a tabular report into the database for a company.
 * Steps:
 *  1) Upsert Periods from column metadata (by ColKey; skip "Total").
 *  2) Upsert ReportHeader.
 *  3) Wipe previous accounts/values for the header.
 *  4) Walk rows to create account tree + values.
 */
export async function loadTableReport(data: TableReportJsonType, companyId: number) {
  // Extract header, columns, and root rows from data
  const header = data.data.Header;
  const cols = data.data.Columns?.Column ?? [];
  const rowsRoot = data.data.Rows;

  // 1) Build period map (ColKey -> Period.id)
  const periodMap = new Map<string, number>();
  let periodsCreated = 0;

  // start at 1 to skip the label column
  for (let i = 1; i < cols.length; i++) {
    const col = cols[i];
    if (!col) continue;

    const title = col.ColTitle ?? '';
    const colKey = col.MetaData?.find((m) => m.Name?.toLowerCase() === COL_KEY_IDENTIFIER)?.Value; // stable key
    const start = col.MetaData?.find(
      (m) => m.Name?.toLowerCase() === START_DATE_COL_IDENTIFIER,
    )?.Value;
    const end = col.MetaData?.find((m) => m.Name?.toLowerCase() === END_DATE_COL_IDENTIFIER)?.Value;

    if (!colKey || colKey.toLowerCase() === TOTAL_COL_IDENTIFIER) continue; // don't make a Period for "Total"
    if (!start || !end) continue;

    const period = await upsertPeriod(new Date(start), new Date(end), title);
    periodMap.set(colKey, period.id);
    periodsCreated++;
  }

  // 2) Upsert ReportHeader
  const startPeriod = new Date(header.StartPeriod);
  const endPeriod = new Date(header.EndPeriod);

  // Upsert the report header (Profit and Loss) for the company and period range
  const report = await prisma.reportHeader.upsert({
    where: {
      companyId_startPeriod_endPeriod: {
        companyId,
        startPeriod,
        endPeriod,
      },
    },
    update: {
      currency: header.Currency ?? undefined,
      basis: header.ReportBasis ?? undefined,
    },
    create: {
      companyId,
      reportName: header.ReportName ?? 'ProfitAndLoss',
      basis: header.ReportBasis ?? undefined,
      currency: header.Currency ?? undefined,
      startPeriod,
      endPeriod,
    },
  });

  // 3) Wipe previous data + 4) Rebuild tree/values
  await prisma.$transaction(
    async (tx) => {
      // Find all account IDs for this report to prepare for cleanup
      const existingAccountIds = await tx.reportAccount.findMany({
        where: { reportId: report.id },
        select: { id: true },
      });

      // Remove all previous account values and accounts for this report to avoid stale data
      if (existingAccountIds.length) {
        const accountIds = existingAccountIds.map((a) => a.id);
        await tx.reportAccountValue.deleteMany({ where: { accountId: { in: accountIds } } });
        await tx.reportAccount.deleteMany({ where: { reportId: report.id } });
      }

      // Recursively walk the report rows to create the account hierarchy and insert values for each period
      const rows = Array.isArray(rowsRoot?.Row) ? rowsRoot.Row : [];
      await walkRows({ tx, reportId: report.id, periodMap, cols, rows });
    },
    // hitting timeout on render
    {
      timeout: 20_000,
      maxWait: 10_000,
    },
  );

  // Return the report ID and number of periods created
  return { reportId: report.id, periodsCreated };
}
