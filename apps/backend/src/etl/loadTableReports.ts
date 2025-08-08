import { prisma } from '@/db';
import type { TableReportJsonType } from '@/types/data.types';

import { upsertPeriod } from './shared';

type HeaderType = TableReportJsonType['data']['Header'] | null;

export async function loadTableReport(data: TableReportJsonType, companyId: number) {
  const cols = data.data.Columns?.Column ?? [];

  // Load periods from columns
  const periodMap = new Map<string, number>();
  for (const col of cols) {
    const meta = col.MetaData ?? [];
    const startMeta = meta.find((m) => m.Name === 'StartDate')?.Value;
    const endMeta = meta.find((m) => m.Name === 'EndDate')?.Value;
    if (!startMeta || !endMeta) continue;

    const period = await upsertPeriod(new Date(startMeta), new Date(endMeta), col.ColTitle);
    periodMap.set(col.ColTitle, period.id);
  }

  // Upsert report header
  const header: HeaderType = data.data.Header ?? null;
  const report = await prisma.reportHeader.upsert({
    where: {
      companyId_startPeriod_endPeriod: {
        companyId,
        startPeriod: new Date(header?.StartPeriod),
        endPeriod: new Date(header?.EndPeriod),
      },
    },
    update: { options: header?.Option ?? undefined, reportName: header?.ReportName },
    create: {
      companyId,
      reportName: header?.ReportName ?? 'Unknown',
      basis: header?.ReportBasis ?? 'Accrual',
      startPeriod: new Date(header?.StartPeriod),
      endPeriod: new Date(header?.EndPeriod),
      currency: header?.Currency ?? undefined,
      options: header?.Option ?? undefined,
    },
  });

  async function insertReportRows(rowsArray: any[], parentAccountId: number | null) {
    for (const row of rowsArray) {
      const colData = row.Header?.ColData ?? row.ColData ?? [];
      const accountName = colData[0]?.value ?? null;
      const account = accountName
        ? await prisma.reportAccount.create({
            data: {
              reportId: report.id,
              accountName,
              parentAccountId: parentAccountId ?? undefined,
            },
          })
        : null;

      if (account) {
        for (let colIndex = 1; colIndex < colData.length; colIndex++) {
          const valueCell = colData[colIndex];
          const label = cols[colIndex]?.ColTitle;
          const periodId = label ? periodMap.get(label) : undefined;
          if (!periodId) continue;

          const amount =
            valueCell?.value === undefined || valueCell?.value === null || valueCell?.value === ''
              ? null
              : Number(valueCell.value);

          await prisma.reportAccountValue.upsert({
            where: { accountId_periodId: { accountId: account.id, periodId } },
            update: { amount },
            create: { accountId: account.id, periodId, amount },
          });
        }
      }

      const nested = row.Rows?.Row ?? row.Row ?? [];
      if (Array.isArray(nested) && nested.length > 0) {
        await insertReportRows(nested, account?.id ?? parentAccountId);
      }
    }
  }

  await insertReportRows(data.data.Rows?.Row ?? [], null);
}
