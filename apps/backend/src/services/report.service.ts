import { prisma } from '@/db';

export async function listReports() {
  return prisma.reportHeader.findMany({
    orderBy: [{ startPeriod: 'desc' }],
    select: {
      id: true,
      reportName: true,
      startPeriod: true,
      endPeriod: true,
      currency: true,
    },
  });
}

export async function getReportHierarchy(reportId: number) {
  const accounts = await prisma.reportAccount.findMany({
    where: { reportId },
    include: {
      values: { include: { period: { select: { id: true, label: true } } } },
    },
    orderBy: { id: 'asc' },
  });

  if (accounts.length === 0) return [];

  const byId = new Map<number, any>();
  accounts.forEach((a) =>
    byId.set(a.id, {
      id: a.id,
      accountName: a.accountName,
      type: a.type,
      values: a.values.map((v) => ({
        periodId: v.periodId,
        label: v.period?.label,
        amount: v.amount,
      })),
      children: [] as any[],
      parentAccountId: a.parentAccountId ?? null,
    }),
  );

  const roots: any[] = [];
  byId.forEach((node) => {
    if (node.parentAccountId && byId.has(node.parentAccountId)) {
      byId.get(node.parentAccountId).children.push(node);
    } else {
      roots.push(node);
    }
  });

  return roots;
}
