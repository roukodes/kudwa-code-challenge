import type { StatementCategoryType } from '@prisma/client';

import { prisma } from '@/db';
import type { MonthlyStatementsJsonType } from '@/types/data.types';

import { upsertPeriod } from './shared';

export async function loadMonthlyStatements(data: MonthlyStatementsJsonType, companyId: number) {
  for (const s of data.data) {
    const period = await upsertPeriod(new Date(s.period_start), new Date(s.period_end));
    const statement = await prisma.statement.upsert({
      where: { companyId_periodId: { companyId, periodId: period.id } },
      update: {
        grossProfit: s.gross_profit ?? undefined,
        operatingProfit: s.operating_profit ?? undefined,
        netProfit: s.net_profit ?? undefined,
        earningsBeforeTaxes: s.earnings_before_taxes ?? undefined,
        taxes: s.taxes ?? undefined,
        customFields: s.custom_fields ?? undefined,
      },
      create: {
        companyId,
        periodId: period.id,
        rootfiId: s.rootfi_id ?? undefined,
        grossProfit: s.gross_profit ?? undefined,
        operatingProfit: s.operating_profit ?? undefined,
        netProfit: s.net_profit ?? undefined,
        earningsBeforeTaxes: s.earnings_before_taxes ?? undefined,
        taxes: s.taxes ?? undefined,
        customFields: s.custom_fields ?? undefined,
      },
    });

    async function insertCategoryArray(arr: any[], type: StatementCategoryType) {
      if (!Array.isArray(arr)) return;
      for (const cat of arr) {
        const catDb = await prisma.statementCategory.create({
          data: {
            statementId: statement.id,
            type,
            name: cat.name ?? 'Unnamed',
            totalValue: cat.value ?? undefined,
          },
        });

        async function insertLineItems(items: any[], parentId?: number) {
          if (!Array.isArray(items)) return;
          for (const li of items) {
            const liDb = await prisma.statementLineItem.create({
              data: {
                categoryId: catDb.id,
                parentLineItemId: parentId ?? undefined,
                name: li.name ?? 'Unnamed',
                value: li.value ?? undefined,
                accountId: li.account_id ?? undefined,
              },
            });
            if (li.line_items) {
              await insertLineItems(li.line_items, liDb.id);
            }
          }
        }

        await insertLineItems(cat.line_items ?? []);
      }
    }

    await insertCategoryArray(s.revenue ?? [], 'REVENUE');
    await insertCategoryArray(s.cost_of_goods_sold ?? [], 'COGS');
    await insertCategoryArray(s.operating_expenses ?? [], 'OPERATING_EXPENSE');
    await insertCategoryArray(s.non_operating_revenue ?? [], 'NON_OPERATING_REVENUE');
    await insertCategoryArray(s.non_operating_expenses ?? [], 'NON_OPERATING_EXPENSE');
  }
}
