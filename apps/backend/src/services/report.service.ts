import type {
  AccountNodeDTO,
  GetReportTreeResponse,
  ReportsDTO,
  TableColumnDTO,
} from '@kudwa-code-challenge/types';

import { prisma } from '@/db';
import { TOTAL_COL_IDENTIFIER } from '@/utils/constants';
import { dateToLabel } from '@/utils/helpers';
import type { ReportByIdParamsType } from '@/validators/report.validator';

/**
 * Retrieves a list of all reports
 */
export async function listReportsService() {
  const reports = await prisma.reportHeader.findMany({
    orderBy: [{ startPeriod: 'desc' }],
  });

  const payload: ReportsDTO[] = reports.map((r) => ({
    id: r.id,
    name: r.reportName,
    basis: r.basis,
    currency: r.currency,
    endPeriod: r.endPeriod.toISOString(),
    startPeriod: r.startPeriod.toISOString(),
  }));

  return payload;
}

/**
 * Retrieves a report's details and builds a grid of accounts + values for each period
 */
export async function getReportDetailsService(reportId: ReportByIdParamsType['reportId']) {
  // 1) Load accounts + values
  const accounts = await prisma.reportAccount.findMany({
    where: { reportId },
    include: { values: true },
    orderBy: [{ parentAccountId: 'asc' }, { id: 'asc' }],
  });

  if (!accounts.length) {
    return { columns: [], nodes: [] } satisfies GetReportTreeResponse;
  }

  // 2) Distinct periods & fetch Period rows
  let periods = await prisma.period.findMany({
    where: { reportValues: { some: { account: { reportId } } } },
    orderBy: [{ startDate: 'asc' }, { id: 'asc' }],
  });

  if (!periods.length) {
    const report = await prisma.reportHeader.findUniqueOrThrow({ where: { id: reportId } });

    // Fallback A: by date range
    periods = await prisma.period.findMany({
      where: {
        AND: [{ startDate: { gte: report.startPeriod } }, { endDate: { lte: report.endPeriod } }],
      },
      orderBy: [{ startDate: 'asc' }, { id: 'asc' }],
    });

    // Fallback B: synthesize from options/columns metadata if you stored it
    if (!periods.length) {
      const opts = (report.options as any) ?? {};
      const colMeta: any[] = opts.ColMeta ?? [];
      if (colMeta.length) {
        periods = colMeta.map((c, i) => ({
          id: -1_000 - i,
          startDate: new Date(c.StartDate),
          endDate: new Date(c.EndDate),
          label: c.Label,
        })) as any[];
      }
    }
  }

  // 3) Build columns + columnKey map
  const columnKeyByPeriod = new Map<number, string>();
  const columns: TableColumnDTO[] = periods.map((p) => {
    const key = `period_${p.id}`;
    columnKeyByPeriod.set(p.id, key);
    return {
      key,
      label: p.label || dateToLabel(p.startDate),
      periodId: p.id,
      startDate: p.startDate.toISOString(),
      endDate: p.endDate.toISOString(),
    };
  });
  columns.push({ key: TOTAL_COL_IDENTIFIER, label: 'Total' });

  // 4) Prebuild node skeletons
  const emptyValues = Object.fromEntries(columns.map((c) => [c.key, null])) as Record<
    string,
    number | null
  >;

  const nodeById = new Map<number, AccountNodeDTO>();
  for (const a of accounts) {
    const values = { ...emptyValues };
    for (const v of a.values) {
      const key = columnKeyByPeriod.get(v.periodId);
      if (key) values[key] = v.amount ?? null;
    }

    const tot = Object.entries(values)
      .filter(([k]) => k !== TOTAL_COL_IDENTIFIER)
      .reduce((sum, [, n]) => sum + (n ?? 0), 0);
    values[TOTAL_COL_IDENTIFIER] = tot;

    nodeById.set(a.id, {
      accountId: a.id,
      name: a.accountName,
      type: a.type ?? null,
      parentAccountId: a.parentAccountId ?? null,
      hasChildren: false,
      values,
      children: [],
    });
  }

  // 5) Link children → parents; collect roots
  const roots: AccountNodeDTO[] = [];
  for (const a of accounts) {
    const node = nodeById.get(a.id)!;
    const parentId = a.parentAccountId ?? null;
    if (parentId && nodeById.has(parentId)) {
      const p = nodeById.get(parentId)!;
      p.children.push(node);
      p.hasChildren = true;
    } else {
      roots.push(node);
    }
  }

  // Keep children order stable (same order as accounts list)
  const sortChildren = (n: AccountNodeDTO) => {
    n.children.sort((x, y) => x.accountId - y.accountId);
    n.children.forEach(sortChildren);
  };
  roots.forEach(sortChildren);

  const payload: GetReportTreeResponse = { columns, nodes: roots };

  return payload;
}
