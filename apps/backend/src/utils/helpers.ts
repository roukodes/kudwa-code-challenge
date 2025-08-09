import { ReportAccountType } from '@prisma/client';
import fs from 'fs';
import path from 'path';

import { ACCOUNT_TYPE_MAP } from './constants';

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
  return ACCOUNT_TYPE_MAP[str];
}
