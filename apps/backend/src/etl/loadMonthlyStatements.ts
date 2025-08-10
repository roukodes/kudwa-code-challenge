import type { PrismaClient, Statement, StatementCategory } from '@prisma/client';
import { StatementCategoryType } from '@prisma/client';
import type { ITXClientDenyList } from '@prisma/client/runtime/library';

import { prisma } from '@/db';
import type { MonthlyStatementsJsonType } from '@/types/data.types';

import { upsertPeriod } from './shared';

type TransactionClient = Omit<PrismaClient, ITXClientDenyList>;

type CategoriesType = MonthlyStatementsJsonType['data'][number]['revenue'];

type LineItemType = CategoriesType[number]['line_items'];

/**
 * Recursively insert all line items and their children for a given category.
 * This supports arbitrarily deep line item hierarchies as found in financial statements.
 */
async function insertLineItemsRecursively(
  transaction: TransactionClient,
  categoryRecord: StatementCategory,
  lineItemsArr: LineItemType,
  parentLineItemId?: number,
) {
  if (!Array.isArray(lineItemsArr)) return;
  for (const lineItemRaw of lineItemsArr) {
    // Insert a line item for this category or as a child of another line item
    const lineItemRecord = await transaction.statementLineItem.create({
      data: {
        categoryId: categoryRecord.id,
        parentLineItemId: parentLineItemId ?? undefined,
        name: lineItemRaw.name ?? 'Unnamed',
        value: lineItemRaw.value ?? undefined,
        accountId: lineItemRaw.account_id ?? undefined,
      },
    });

    // If this line item has children, recursively insert them as well
    if (lineItemRaw.line_items?.length) {
      await insertLineItemsRecursively(
        transaction,
        categoryRecord,
        lineItemRaw.line_items,
        lineItemRecord.id,
      );
    }
  }
}

/**
 * Inserts categories and their nested line items for a given statement section (e.g., revenue, expenses).
 * Handles recursion for nested line items.
 */
async function insertCategoriesWithLineItems(
  categoriesArr: CategoriesType,
  categoryType: StatementCategoryType,
  statementRecord: Statement,
  transaction: TransactionClient,
) {
  if (!Array.isArray(categoriesArr)) return;
  for (const categoryRaw of categoriesArr) {
    // Insert a new category for this section (e.g., one type of revenue/expense)
    const categoryRecord = await transaction.statementCategory.create({
      data: {
        statementId: statementRecord.id,
        type: categoryType,
        name: categoryRaw.name ?? 'Unnamed',
        totalValue: categoryRaw.value ?? undefined,
      },
    });

    await insertLineItemsRecursively(transaction, categoryRecord, categoryRaw.line_items ?? []);
  }
}

/**
 * Loads and upserts monthly financial statement data for a given company.
 *
 * For each statement period, this function:
 *   - Ensures the period exists in the database
 *   - Upserts the statement record (update or create)
 *   - Removes any previous categories and line items for that statement
 *   - Inserts new categories and nested line items from the provided data
 */
export async function loadMonthlyStatements(
  monthlyStatements: MonthlyStatementsJsonType,
  companyId: number,
) {
  // Process each monthly statement for the given company
  for (const statementRaw of monthlyStatements.data) {
    // Use a transaction to ensure all related DB operations for this statement are atomic
    await prisma.$transaction(
      async (transaction) => {
        // Ensure the period exists or create it if missing (idempotent upsert)
        const period = await upsertPeriod(
          new Date(statementRaw.period_start),
          new Date(statementRaw.period_end),
        );

        // Upsert the statement for this period and company (either updates or creates)
        const statementRecord = await transaction.statement.upsert({
          where: { companyId_periodId: { companyId, periodId: period.id } },
          update: {
            grossProfit: statementRaw.gross_profit ?? undefined,
            operatingProfit: statementRaw.operating_profit ?? undefined,
            netProfit: statementRaw.net_profit ?? undefined,
            earningsBeforeTaxes: statementRaw.earnings_before_taxes ?? undefined,
            taxes: statementRaw.taxes ?? undefined,
            customFields: statementRaw.custom_fields ?? undefined,
          },
          create: {
            rootfiId: statementRaw.rootfi_id ?? undefined,
            company: { connect: { id: companyId } },
            period: { connect: { id: period.id } },
            grossProfit: statementRaw.gross_profit ?? undefined,
            operatingProfit: statementRaw.operating_profit ?? undefined,
            netProfit: statementRaw.net_profit ?? undefined,
            earningsBeforeTaxes: statementRaw.earnings_before_taxes ?? undefined,
            taxes: statementRaw.taxes ?? undefined,
            customFields: statementRaw.custom_fields ?? undefined,
          },
        });

        // Find all existing categories for this statement to handle clean-up
        const existingCategories = await transaction.statementCategory.findMany({
          where: { statementId: statementRecord.id },
          select: { id: true },
        });

        // If categories exist, remove all their line items and then the categories themselves to avoid stale data
        if (existingCategories.length) {
          await transaction.statementLineItem.deleteMany({
            where: { categoryId: { in: existingCategories.map((c) => c.id) } },
          });
          await transaction.statementCategory.deleteMany({
            where: { statementId: statementRecord.id },
          });
        }

        // Insert all categories and their nested line items for each section of the statement.
        // Each call processes a major section (revenue, COGS, expenses, etc.)
        await insertCategoriesWithLineItems(
          statementRaw.revenue ?? [],
          StatementCategoryType.REVENUE,
          statementRecord,
          transaction,
        );
        await insertCategoriesWithLineItems(
          statementRaw.cost_of_goods_sold ?? [],
          StatementCategoryType.COGS,
          statementRecord,
          transaction,
        );
        await insertCategoriesWithLineItems(
          statementRaw.operating_expenses ?? [],
          StatementCategoryType.OPERATING_EXPENSE,
          statementRecord,
          transaction,
        );
        await insertCategoriesWithLineItems(
          statementRaw.non_operating_revenue ?? [],
          StatementCategoryType.NON_OPERATING_REVENUE,
          statementRecord,
          transaction,
        );
        await insertCategoriesWithLineItems(
          statementRaw.non_operating_expenses ?? [],
          StatementCategoryType.NON_OPERATING_EXPENSE,
          statementRecord,
          transaction,
        );
      },
      {
        // hitting timeout on render
        timeout: 20_000,
        maxWait: 10_000,
      },
    );
  }
}
