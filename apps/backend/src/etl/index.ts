import { env } from '@/config';
import { prisma } from '@/db';
import type { MonthlyStatementsJsonType, TableReportJsonType } from '@/types/data.types';
import { COMPANY_ID, COMPANY_NAME } from '@/utils/constants';
import { loadJsonFile, loadJsonRemote } from '@/utils/helpers';

import { loadMonthlyStatements } from './loadMonthlyStatements';
import { loadTableReport } from './loadTableReports';

export async function runETL() {
  const [tableData, monthlyData] = await Promise.all([
    env.ETL_TABLE_REPORT_URL
      ? loadJsonRemote<TableReportJsonType>(env.ETL_TABLE_REPORT_URL)
      : Promise.resolve(loadJsonFile<TableReportJsonType>('data/table-report.json')),
    env.ETL_MONTHLY_STATEMENTS_URL
      ? loadJsonRemote<MonthlyStatementsJsonType>(env.ETL_MONTHLY_STATEMENTS_URL)
      : Promise.resolve(loadJsonFile<MonthlyStatementsJsonType>('data/monthly-statements.json')),
  ]);

  const company = await prisma.company.upsert({
    where: { id: COMPANY_ID },
    update: { currency: tableData.data.Header?.Currency ?? undefined, name: COMPANY_NAME },
    create: {
      id: COMPANY_ID,
      currency: tableData.data.Header?.Currency ?? undefined,
      name: COMPANY_NAME,
    },
  });

  await loadTableReport(tableData, company.id);
  await loadMonthlyStatements(monthlyData, company.id);

  return { success: true, message: 'ETL completed' };
}
