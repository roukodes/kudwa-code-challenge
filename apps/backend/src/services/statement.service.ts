import { prisma } from '@/db';

function buildTree(items: Array<any>) {
  const map = new Map<number, any>();
  const roots: any[] = [];
  items.forEach((n) => map.set(n.id, { ...n, children: [] as any[] }));
  items.forEach((n) => {
    if (n.parentLineItemId && map.has(n.parentLineItemId)) {
      map.get(n.parentLineItemId).children.push(map.get(n.id));
    } else {
      roots.push(map.get(n.id));
    }
  });
  return roots;
}

/**
 * Get a statement (one month) with categories and nested line items.
 */
export async function getStatementByPeriod(periodId: number) {
  const statement = await prisma.statement.findFirst({
    where: { periodId },
    include: {
      period: true,
      categories: { select: { id: true, name: true, type: true, totalValue: true } },
    },
  });

  if (!statement) return null;

  // Fetch all line items for all categories in a single query
  const items = await prisma.statementLineItem.findMany({
    where: { categoryId: { in: statement.categories.map((c) => c.id) } },
    orderBy: { id: 'asc' },
  });

  // Group by category and build trees
  const byCat = new Map<number, any[]>();
  items.forEach((it) => {
    const arr = byCat.get(it.categoryId) ?? [];
    arr.push(it);
    byCat.set(it.categoryId, arr);
  });

  const categories = statement.categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    type: cat.type,
    totalValue: cat.totalValue,
    lineItems: buildTree(byCat.get(cat.id) ?? []),
  }));

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
