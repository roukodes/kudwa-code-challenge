import { PrismaClient } from '@prisma/client';

import type { MonthlyStatementsJsonType, TableReportJsonType } from '@/types/data.types';
import { COMPANY_ID, COMPANY_NAME } from '@/utils/constants';
import { loadJsonFile } from '@/utils/helpers';

import { loadMonthlyStatements } from './loadMonthlyStatements';
import { loadTableReport } from './loadTableReports';

const prisma = new PrismaClient();

export async function runETL() {
  const monthlyData = loadJsonFile<MonthlyStatementsJsonType>('data/monthly-statements.json');
  const tableData = loadJsonFile<TableReportJsonType>('data/table-report.json');

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
