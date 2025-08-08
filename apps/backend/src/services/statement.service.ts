import { prisma } from '@/db';
import { buildTree } from '@/utils/helpers';
import type { ListQueryType, PeriodParamsType } from '@/validators/statement.validator';

const STATEMENTS_MAX_LIMIT = 100;
const STATEMENTS_DEFAULT_LIMIT = 25;

/**
 * Retrieves a paginated list of financial statements with optional full detail.
 *
 * @param opts - Options for the query:
 *   - full: If true, include categories and nested line items for each statement.
 *   - limit: Maximum number of statements to return (default 25, max 100).
 *   - cursor: ID to paginate from (statements with id > cursor).
 * @returns An object containing items (statements) and nextCursor for pagination.
 */
export async function listStatements(opts: ListQueryType) {
  // Parse options and enforce safe defaults for pagination
  const withFullOptions = !!opts?.full;
  const limit = Math.min(
    Math.max(opts?.limit ?? STATEMENTS_DEFAULT_LIMIT, 1),
    STATEMENTS_MAX_LIMIT,
  );
  const cursor = opts?.cursor;

  // Fetch base statement records with associated period
  const baseStatements = await prisma.statement.findMany({
    where: cursor ? { id: { gt: cursor } } : undefined,
    orderBy: { id: 'asc' },
    take: limit,
    include: { period: true },
  });

  const isEmptyResult = baseStatements.length === 0;

  // If there are more results, provide the next cursor for pagination
  const nextCursor =
    baseStatements.length === limit ? baseStatements[baseStatements.length - 1].id : null;

  // If not requesting full detail or no results, return summary view
  if (!withFullOptions || isEmptyResult) {
    return {
      items: baseStatements.map((baseItem) => ({
        id: baseItem.id,
        period: {
          id: baseItem.period.id,
          label: baseItem.period.label,
          startDate: baseItem.period.startDate,
          endDate: baseItem.period.endDate,
        },
        grossProfit: baseItem.grossProfit,
        operatingProfit: baseItem.operatingProfit,
        netProfit: baseItem.netProfit,
      })),
      nextCursor,
    };
  }

  // Full mode: fetch categories and nested line items for each statement
  const statementIds = baseStatements.map((s) => s.id);
  // Fetch all categories for these statements
  const statementCategories = await prisma.statementCategory.findMany({
    where: { statementId: { in: statementIds } },
    orderBy: { id: 'asc' },
    select: { id: true, statementId: true, name: true, type: true, totalValue: true },
  });

  // Fetch all line items for these categories
  const categoriesItems = await prisma.statementLineItem.findMany({
    where: { categoryId: { in: statementCategories.map((c) => c.id) } },
    orderBy: { id: 'asc' },
  });

  // Group line items by their category
  const itemsByCategory = new Map<number, any[]>();
  categoriesItems.forEach((it) => {
    const arr = itemsByCategory.get(it.categoryId) ?? [];
    arr.push(it);
    itemsByCategory.set(it.categoryId, arr);
  });

  // Group categories by their statement
  const catsByStatement = new Map<number, any[]>();
  statementCategories.forEach((c) => {
    const arr = catsByStatement.get(c.statementId) ?? [];
    arr.push({
      id: c.id,
      name: c.name,
      type: c.type,
      totalValue: c.totalValue,
      // Use buildTree to organize line items into a hierarchy
      lineItems: buildTree(itemsByCategory.get(c.id) ?? []),
    });
    catsByStatement.set(c.statementId, arr);
  });

  // Return statements with their categories and nested line items
  return {
    items: baseStatements.map((baseItem) => ({
      statement: {
        id: baseItem.id,
        period: {
          id: baseItem.period.id,
          label: baseItem.period.label,
          startDate: baseItem.period.startDate,
          endDate: baseItem.period.endDate,
        },
        grossProfit: baseItem.grossProfit,
        operatingProfit: baseItem.operatingProfit,
        netProfit: baseItem.netProfit,
      },
      categories: catsByStatement.get(baseItem.id) ?? [],
    })),
    nextCursor,
  };
}

/**
 * Retrieves a single statement and its categories/line items for a given period.
 *
 * @param periodId - The period's unique identifier
 * @returns An object containing the statement and its categories with nested line items, or null if not found.
 */
export async function getStatementByPeriod(periodId: PeriodParamsType['periodId']) {
  // Fetch the statement for the given period, including its categories
  const statement = await prisma.statement.findFirst({
    where: { periodId },
    include: {
      period: true,
      categories: { select: { id: true, name: true, type: true, totalValue: true } },
    },
  });

  if (!statement) return null;

  // Fetch all line items for the statement's categories
  const categoriesItems = await prisma.statementLineItem.findMany({
    where: { categoryId: { in: statement.categories.map((c) => c.id) } },
    orderBy: { id: 'asc' },
  });

  // Group line items by category
  const itemsByCategory = new Map<number, any[]>();
  categoriesItems.forEach((it) => {
    const arr = itemsByCategory.get(it.categoryId) ?? [];
    arr.push(it);
    itemsByCategory.set(it.categoryId, arr);
  });

  // Attach tree-structured line items to each category
  const categories = statement.categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    type: cat.type,
    totalValue: cat.totalValue,
    lineItems: buildTree(itemsByCategory.get(cat.id) ?? []),
  }));

  // Return the statement and its categories with nested line items
  return {
    statement: {
      id: statement.id,
      period: {
        id: statement.period.id,
        label: statement.period.label,
        startDate: statement.period.startDate,
        endDate: statement.period.endDate,
      },
      grossProfit: statement.grossProfit,
      operatingProfit: statement.operatingProfit,
      netProfit: statement.netProfit,
    },
    categories,
  };
}
