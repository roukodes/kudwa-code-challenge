import fs from 'fs';
import path from 'path';

/**
 * Load JSON file from relative path.
 *
 * @export
 * @template T
 * @param {string} relativePath
 * @returns {T}
 */
export function loadJsonFile<T>(relativePath: string): T {
  const p = path.join(process.cwd(), relativePath);
  const raw = fs.readFileSync(p, 'utf8');
  return JSON.parse(raw) as T;
}

/**
 * Convert date to label.
 *
 * @export
 * @param {string | Date} date
 * @param {Intl.DateTimeFormatOptions} [format={ month: 'short', year: 'numeric' }]
 * @returns {string}
 */
export function dateRangeToLabel(
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
