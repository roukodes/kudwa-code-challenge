import { prisma } from '@/db';
import { dateToLabel } from '@/utils/helpers';

/**
 * Upserts a period (date range) in the database, using start and end dates as a unique key.
 * If a label is not provided, generates one from the start date.
 */
export async function upsertPeriod(start: Date, end: Date, label?: string) {
  // Use the provided label, or generate one from the start date if missing
  const periodLabel = label ?? dateToLabel(start);

  // Upsert the period in the database using the combination of start and end dates as a unique key
  // If the period exists, update its label; if not, create it
  const period = await prisma.period.upsert({
    where: { startDate_endDate: { startDate: start, endDate: end } },
    update: { label: periodLabel },
    create: { startDate: start, endDate: end, label: periodLabel },
  });

  // Return the upserted period record
  return period;
}
