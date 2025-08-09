import { prisma } from '@/db';
import type { ReportParamsType } from '@/validators/report.validator';

/**
 * Retrieves a list of all report headers, sorted by start period descending.
 *
 * @returns Array of report headers with id, name, period, and currency info.
 */
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

/**
 * Retrieves the account hierarchy for a given report, including period values.
 *
 * Fetches all accounts for the report, including their values for each period, and
 * builds a tree structure based on parent-child relationships.
 *
 * @param reportId - The unique identifier for the report
 * @returns Array of root account nodes, each with nested children and period values
 */
export async function getReportHierarchy(reportId: ReportParamsType['reportId']) {
  // Fetch all accounts for the specified report, including period values
  const accounts = await prisma.reportAccount.findMany({
    where: { reportId },
    include: {
      values: { include: { period: { select: { id: true, label: true } } } },
    },
    orderBy: { id: 'asc' },
  });

  if (accounts.length === 0) return [];

  // Index accounts by their ID for fast lookup
  const accountsById = new Map<number, any>();
  accounts.forEach((a) =>
    accountsById.set(a.id, {
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

  // Build the hierarchy by attaching children to their parent nodes
  const roots: any[] = [];
  accountsById.forEach((node) => {
    if (node.parentAccountId && accountsById.has(node.parentAccountId)) {
      accountsById.get(node.parentAccountId).children.push(node);
    } else {
      roots.push(node);
    }
  });

  // Return the root nodes, each with nested children
  return roots;
}
