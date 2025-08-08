import { PrismaClient } from '@prisma/client';

import { dateRangeToLabel } from '@/utils/helpers';

const prisma = new PrismaClient();

export async function upsertPeriod(start: Date, end: Date, label?: string) {
  const periodLabel = label ?? dateRangeToLabel(start);

  const period = await prisma.period.upsert({
    where: { startDate_endDate: { startDate: start, endDate: end } },
    update: { label: periodLabel },
    create: { startDate: start, endDate: end, label: periodLabel },
  });
  return period;
}
