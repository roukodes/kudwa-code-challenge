import { GetTrendsQueryType } from '@kudwa-code-challenge/validators';
import { ReportAccountType, StatementCategoryType } from '@prisma/client';
import fs from 'fs';
import path from 'path';

/**
 * Load JSON file from relative path.
 */
export function loadJsonFile<T>(relativePath: string): T {
  const p = path.join(process.cwd(), relativePath);
  const raw = fs.readFileSync(p, 'utf8');
  return JSON.parse(raw) as T;
}

/**
 * Convert date to label.
 */
export function dateToLabel(
  date: string | Date,
  format: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' },
) {
  try {
    const d = new Date(date);
    return d.toLocaleString('en-US', format);
  } catch (e) {
    console.error(e);
    return date.toString();
  }
}

/**
 * Build tree from flat array.
 */
export function buildTree<T>(
  items: Array<T>,
  identifier = 'id',
  childrenIdentifier = 'children',
  parentIdentifier = 'parentLineItemId',
) {
  const map = new Map<number, T>();
  const roots: T[] = [];
  items.forEach((n) => map.set(n[identifier], { ...n, [childrenIdentifier]: [] as T[] }));
  items.forEach((n) => {
    if (n[parentIdentifier] && map.has(n[parentIdentifier])) {
      map.get(n[parentIdentifier])[childrenIdentifier].push(map.get(n[identifier]));
    } else {
      roots.push(map.get(n[identifier]));
    }
  });
  return roots;
}

/**
 * Convert a string to a ReportAccountType.
 */
export function convertTypeStringToAccountType(str?: string | null): ReportAccountType | undefined {
  if (!str) return undefined;
  return Object.entries(ReportAccountType).find(
    ([_, v]) => v?.toLowerCase() === str?.toLowerCase(),
  )?.[1];
}

/**
 * Sums the totalValue of rows that match the given type.
 */
export const sumByType = (
  rows: { type: StatementCategoryType | null; totalValue: number | null }[],
  t: StatementCategoryType,
) => rows.filter((r) => r.type === t).reduce((s, r) => s + (r.totalValue ?? 0), 0);

/**
 * Returns the value for the given metric.
 */
export const valueForMetric = (
  metric: GetTrendsQueryType['metric'],
  s: {
    grossProfit: number | null;
    operatingProfit: number | null;
    netProfit: number | null;
    categories: any[];
  },
) => {
  const revenue = sumByType(s.categories, StatementCategoryType.REVENUE);
  const cogs = sumByType(s.categories, StatementCategoryType.COGS);
  const opex = sumByType(s.categories, StatementCategoryType.OPERATING_EXPENSE);
  const gp = s.grossProfit ?? revenue - cogs;
  const op = s.operatingProfit ?? gp - opex;
  const np = s.netProfit ?? 0;

  switch (metric) {
    case 'revenue':
      return revenue;
    case 'cogs':
      return cogs;
    case 'opex':
      return opex;
    case 'grossProfit':
      return gp;
    case 'operatingProfit':
      return op;
    case 'netProfit':
      return np;
  }
};
