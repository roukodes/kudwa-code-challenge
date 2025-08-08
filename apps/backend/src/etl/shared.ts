import { prisma } from '@/db';
import { dateToLabel } from '@/utils/helpers';

export async function upsertPeriod(start: Date, end: Date, label?: string) {
  const periodLabel = label ?? dateToLabel(start);

  const period = await prisma.period.upsert({
    where: { startDate_endDate: { startDate: start, endDate: end } },
    update: { label: periodLabel },
    create: { startDate: start, endDate: end, label: periodLabel },
  });
  return period;
}
