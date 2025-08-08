import fs from 'fs';
import path from 'path';

/**
 * Load JSON file from relative path.
 *
 * @template T
 * @param {string} relativePath
 */
export function loadJsonFile<T>(relativePath: string): T {
  const p = path.join(process.cwd(), relativePath);
  const raw = fs.readFileSync(p, 'utf8');
  return JSON.parse(raw) as T;
}

/**
 * Convert date to label.
 *
 * @param {string | Date} date
 * @param {Intl.DateTimeFormatOptions} [format={ month: 'short', year: 'numeric' }]
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
 *
 * @param {Array<T>} items
 * @param {string} [identifier='id']
 * @param {string} [parentIdentifier='parentLineItemId']
 */
export function buildTree<T>(
  items: Array<T>,
  identifier = 'id',
  parentIdentifier = 'parentLineItemId',
) {
  const map = new Map<number, any>();
  const roots: any[] = [];
  items.forEach((n) => map.set(n[identifier], { ...n, children: [] as any[] }));
  items.forEach((n) => {
    if (n[parentIdentifier] && map.has(n[parentIdentifier])) {
      map.get(n[parentIdentifier]).children.push(map.get(n[identifier]));
    } else {
      roots.push(map.get(n[identifier]));
    }
  });
  return roots;
}
