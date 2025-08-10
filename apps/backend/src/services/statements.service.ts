// src/services/statements.service.ts
import type {
  BreakdownCategoryDTO,
  GetBreakdownResponseDTO,
  GetTopCategoriesResponseDTO,
  GetTrendsResponseDTO,
  ListStatementsResponseDTO,
  PeriodDTO,
  StatementCategoryDTO,
  StatementLineItemNodeDTO,
  StatementListEntryDTO,
  StatementSummaryDTO,
  SummaryRowDTO,
  TopCategoryDTO,
  TrendsPointDTO,
} from '@kudwa-code-challenge/types';
import { PeriodSchema, SummaryRowSchema } from '@kudwa-code-challenge/types';
import type {
  BreakdownQueryType,
  GetTrendsQueryType,
  PeriodsQueryType,
  StatementsListQueryType,
  StatementsSummaryQueryType,
  TopCategoriesQueryType,
} from '@kudwa-code-challenge/validators';
import { StatementCategoryType } from '@prisma/client';

import { prisma } from '@/db';
import { buildTree, sumByType, valueForMetric } from '@/utils/helpers';

const STATEMENTS_MAX_LIMIT = 100;
const STATEMENTS_DEFAULT_LIMIT = 25;

// percentage calculator
const pct = (num: number, den: number) => (den ? (num / den) * 100 : 0);

/**
 * Paginated list of statements (summary rows), optionally including categories + line-items.
 */
export async function listStatementsService(
  opts: StatementsListQueryType,
): Promise<ListStatementsResponseDTO> {
  const withFullOptions = !!opts.full;
  const limit = Math.min(Math.max(opts.limit ?? STATEMENTS_DEFAULT_LIMIT, 1), STATEMENTS_MAX_LIMIT);
  const cursor = opts.cursor;

  const baseStatements = await prisma.statement.findMany({
    where: cursor ? { id: { gt: cursor } } : undefined,
    orderBy: { id: 'asc' },
    take: limit,
    include: { period: true },
  });

  const nextCursor =
    baseStatements.length === limit ? baseStatements[baseStatements.length - 1].id : null;

  const toSummary = (s: (typeof baseStatements)[number]): StatementSummaryDTO => ({
    id: s.id,
    period: {
      id: s.period.id,
      label: s.period.label,
      startDate: s.period.startDate,
      endDate: s.period.endDate,
    },
    grossProfit: s.grossProfit,
    operatingProfit: s.operatingProfit,
    netProfit: s.netProfit,
  });

  if (!withFullOptions || baseStatements.length === 0) {
    const items: StatementListEntryDTO[] = baseStatements.map((s) => ({ statement: toSummary(s) }));
    return { items, nextCursor };
  }

  const statementIds = baseStatements.map((s) => s.id);

  const statementCategories = await prisma.statementCategory.findMany({
    where: { statementId: { in: statementIds } },
    orderBy: { id: 'asc' },
    select: { id: true, statementId: true, name: true, type: true, totalValue: true },
  });

  const categoriesItems = await prisma.statementLineItem.findMany({
    where: { categoryId: { in: statementCategories.map((c) => c.id) } },
    orderBy: { id: 'asc' },
    select: {
      id: true,
      categoryId: true,
      parentLineItemId: true,
      name: true,
      value: true,
      accountId: true,
    },
  });

  const itemsByCategory = new Map<number, StatementLineItemNodeDTO[]>();
  for (const it of categoriesItems) {
    const arr = itemsByCategory.get(it.categoryId) ?? [];
    arr.push({ ...it, children: [] });
    itemsByCategory.set(it.categoryId, arr);
  }

  const catsByStatement = new Map<number, StatementCategoryDTO[]>();
  for (const c of statementCategories) {
    const tree = buildTree(itemsByCategory.get(c.id) ?? []) as StatementLineItemNodeDTO[];
    const arr = catsByStatement.get(c.statementId) ?? [];
    arr.push({
      id: c.id,
      name: c.name,
      type: c.type,
      totalValue: c.totalValue,
      lineItems: tree,
    });
    catsByStatement.set(c.statementId, arr);
  }

  const items: StatementListEntryDTO[] = baseStatements.map((s) => ({
    statement: toSummary(s),
    categories: catsByStatement.get(s.id) ?? [],
  }));

  return { items, nextCursor };
}

/**
 * Periods for filters (only periods that have statements).
 */
export async function getPeriodsService({ from, to }: PeriodsQueryType): Promise<PeriodDTO[]> {
  const withPeriodFilter = from || to;

  const periods = await prisma.period.findMany({
    where: withPeriodFilter
      ? {
          AND: [from ? { startDate: { gte: from } } : {}, to ? { endDate: { lte: to } } : {}],
        }
      : {},
    orderBy: [{ startDate: 'asc' }, { id: 'asc' }],
    select: { id: true, label: true, startDate: true, endDate: true },
  });

  const payload: PeriodDTO[] = periods.map((p) => ({
    id: p.id,
    label: p.label,
    startDate: p.startDate,
    endDate: p.endDate,
  }));

  const check = PeriodSchema.array().safeParse(payload);
  if (!check.success) {
    throw new Error(`PeriodDTO validation failed: ${check.error.message}`);
  }

  return payload;
}

/**
 * Summary KPIs per period
 */
export async function getStatementsSummaryService({
  from,
  to,
}: StatementsSummaryQueryType): Promise<SummaryRowDTO[]> {
  const withPeriodFilter = from || to;

  const statements = await prisma.statement.findMany({
    where: withPeriodFilter
      ? {
          period: {
            ...(from ? { startDate: { gte: from } } : {}),
            ...(to ? { endDate: { lte: to } } : {}),
          },
        }
      : {},
    include: {
      period: true,
      categories: { select: { type: true, totalValue: true } },
    },
    orderBy: [{ period: { startDate: 'asc' } }, { id: 'asc' }],
  });

  const rows: SummaryRowDTO[] = statements.map((s) => {
    const revenue = sumByType(s.categories, StatementCategoryType.REVENUE);
    const cogs = sumByType(s.categories, StatementCategoryType.COGS);
    const opex = sumByType(s.categories, StatementCategoryType.OPERATING_EXPENSE);

    const grossProfit = s.grossProfit ?? revenue - cogs;
    const operatingProfit = s.operatingProfit ?? grossProfit - opex;
    const netProfit = s.netProfit ?? 0;

    return {
      periodId: s.periodId,
      label: s.period.label,
      startDate: s.period.startDate,
      endDate: s.period.endDate,
      revenue,
      cogs,
      opex,
      grossProfit,
      operatingProfit,
      netProfit,
      grossMarginPct: pct(grossProfit, revenue),
      operatingMarginPct: pct(operatingProfit, revenue),
      netMarginPct: pct(netProfit, revenue),
    };
  });

  const check = SummaryRowSchema.array().safeParse(rows);
  if (!check.success) {
    throw new Error(`SummaryRowDTO validation failed: ${check.error.message}`);
  }

  return rows;
}

/**
 * Top categories for a given period.
 */
export async function getTopCategoriesService({
  type,
  limit,
  from,
  to,
}: TopCategoriesQueryType): Promise<GetTopCategoriesResponseDTO> {
  const withPeriodFilter = from || to;

  const categories = await prisma.statementCategory.findMany({
    where: {
      type,
      statement: {
        ...(withPeriodFilter
          ? {
              period: {
                ...(from ? { startDate: { gte: from } } : {}),
                ...(to ? { endDate: { lte: to } } : {}),
              },
            }
          : {}),
      },
    },
    select: {
      id: true,
      name: true,
      type: true,
      totalValue: true,
    },
    orderBy: { totalValue: 'desc' },
    take: limit,
  });

  const dtos: TopCategoryDTO[] = categories.map((c) => ({
    id: c.id,
    name: c.name,
    type: c.type,
    totalValue: c.totalValue ?? 0,
  }));

  return { categories: dtos };
}

/**
 * Trends (e.g. revenue, cogs, opex, grossProfit, operatingProfit, netProfit).
 */
export async function getTrendsService({
  metric,
  from,
  to,
}: GetTrendsQueryType): Promise<GetTrendsResponseDTO> {
  const withPeriodFilter = from || to;

  const statements = await prisma.statement.findMany({
    where: withPeriodFilter
      ? {
          period: {
            ...(from ? { startDate: { gte: from } } : {}),
            ...(to ? { endDate: { lte: to } } : {}),
          },
        }
      : {},
    include: { period: true, categories: { select: { type: true, totalValue: true } } },
    orderBy: [{ period: { startDate: 'asc' } }, { id: 'asc' }],
  });

  const points: TrendsPointDTO[] = statements.map((s) => ({
    periodId: s.periodId,
    label: s.period.label,
    startDate: s.period.startDate,
    endDate: s.period.endDate,
    value: valueForMetric(metric, s)!,
  }));

  return { metric, points };
}

/**
 * Breakdown of a given category for a given period.
 */
export async function getBreakdownService({
  type,
  from,
  to,
}: BreakdownQueryType): Promise<GetBreakdownResponseDTO> {
  const withPeriodFilter = from || to;

  const categories = await prisma.statementCategory.findMany({
    where: {
      type,
      statement: {
        ...(withPeriodFilter
          ? {
              period: {
                ...(from ? { startDate: { gte: from } } : {}),
                ...(to ? { endDate: { lte: to } } : {}),
              },
            }
          : {}),
      },
    },
    select: {
      id: true,
      name: true,
      totalValue: true,
    },
    orderBy: { totalValue: 'desc' },
  });

  const categoriesDTO: BreakdownCategoryDTO[] = categories.map((c) => ({
    id: c.id,
    name: c.name,
    value: c.totalValue ?? 0,
  }));

  const total = categoriesDTO.reduce((sum, c) => sum + c.value, 0);

  return {
    type,
    total,
    categories: categoriesDTO,
  };
}
