import type { GetTrendsQueryType } from '@kudwa-code-challenge/validators';
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
 * Load JSON from an external URL.
 */
export async function loadJsonRemote<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: { accept: 'application/json', ...(init?.headers || {}) },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as T;
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
export function buildTree<T extends Record<string, any>>(
  items: T[],
  identifier: keyof T = 'id',
  childrenIdentifier: string = 'children',
  parentIdentifier: keyof T = 'parentLineItemId',
): T[] {
  const map = new Map<any, T>();

  const roots: T[] = [];

  // Step 1: Clone items and assign empty children array
  items.forEach((item) => {
    const clone = { ...item, [childrenIdentifier]: [] };
    map.set(item[identifier], clone);
  });

  // Step 2: Build the tree
  items.forEach((item) => {
    const parentId = item[parentIdentifier];
    const node = map.get(item[identifier]);

    if (parentId && map.has(parentId)) {
      const parent = map.get(parentId);
      if (parent) {
        parent[childrenIdentifier].push(node);
      }
    } else {
      if (node) {
        roots.push(node);
      }
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
