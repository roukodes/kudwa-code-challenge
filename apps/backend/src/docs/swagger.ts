import { dirname, join } from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import { fileURLToPath } from 'url';

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Kudwa Code Challenge',
      version: '1.0.0',
      description: 'ETL trigger + P&L report & statements',
    },
    servers: [{ url: '/api' }],
    components: {
      schemas: {
        ApiResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: {},
            message: { type: 'string' },
          },
        },
        ReportsDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            basis: { type: 'string' },
            endPeriod: { type: 'string', format: 'date-time' },
            startPeriod: { type: 'string', format: 'date-time' },
            currency: { type: 'string', nullable: true },
          },
        },
        TableColumn: {
          type: 'object',
          properties: {
            key: { type: 'string' },
            label: { type: 'string' },
          },
        },
        AccountNode: {
          type: 'object',
          properties: {
            accountId: { type: 'integer' },
            name: { type: 'string' },
            type: { type: 'string', enum: ['INCOME', 'EXPENSE', 'COGS', 'OTHER'], nullable: true },
            parentAccountId: { type: 'integer', nullable: true },
            hasChildren: { type: 'boolean' },
            values: {
              type: 'object',
              additionalProperties: { type: 'number', nullable: true },
            },
            children: { type: 'array', items: { $ref: '#/components/schemas/AccountNode' } },
          },
        },
        GetReportTreeResponse: {
          type: 'object',
          properties: {
            columns: { type: 'array', items: { $ref: '#/components/schemas/TableColumn' } },
            nodes: { type: 'array', items: { $ref: '#/components/schemas/AccountNode' } },
          },
        },
        Period: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            label: { type: 'string', nullable: true },
            startDate: { type: 'string', format: 'date-time' },
            endDate: { type: 'string', format: 'date-time' },
          },
        },
        StatementSummary: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            period: { $ref: '#/components/schemas/Period' },
            grossProfit: { type: 'number', nullable: true },
            operatingProfit: { type: 'number', nullable: true },
            netProfit: { type: 'number', nullable: true },
          },
        },
        StatementLineItemNode: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            categoryId: { type: 'integer' },
            parentLineItemId: { type: 'integer', nullable: true },
            name: { type: 'string' },
            value: { type: 'number', nullable: true },
            accountId: { type: 'string', nullable: true },
            children: {
              type: 'array',
              items: { $ref: '#/components/schemas/StatementLineItemNode' },
            },
          },
        },
        StatementCategory: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            type: {
              type: 'string',
              enum: [
                'REVENUE',
                'COGS',
                'OPERATING_REVENUE',
                'NON_OPERATING_REVENUE',
                'OPERATING_EXPENSE',
                'NON_OPERATING_EXPENSE',
              ],
              nullable: true,
            },
            totalValue: { type: 'number', nullable: true },
            lineItems: {
              type: 'array',
              items: { $ref: '#/components/schemas/StatementLineItemNode' },
            },
          },
        },
        StatementListEntry: {
          type: 'object',
          properties: {
            statement: { $ref: '#/components/schemas/StatementSummary' },
            categories: {
              type: 'array',
              items: { $ref: '#/components/schemas/StatementCategory' },
            },
          },
        },
        ListStatementsResponse: {
          type: 'object',
          properties: {
            items: { type: 'array', items: { $ref: '#/components/schemas/StatementListEntry' } },
            nextCursor: { type: 'integer', nullable: true },
          },
        },
        SummaryRow: {
          type: 'object',
          properties: {
            periodId: { type: 'integer' },
            label: { type: 'string', nullable: true },
            startDate: { type: 'string', format: 'date-time' },
            endDate: { type: 'string', format: 'date-time' },
            revenue: { type: 'number' },
            cogs: { type: 'number' },
            opex: { type: 'number' },
            grossProfit: { type: 'number' },
            operatingProfit: { type: 'number' },
            netProfit: { type: 'number' },
            grossMarginPct: { type: 'number' },
            operatingMarginPct: { type: 'number' },
            netMarginPct: { type: 'number' },
          },
        },
        GetStatementsSummaryResponse: {
          type: 'object',
          properties: {
            rows: { type: 'array', items: { $ref: '#/components/schemas/SummaryRow' } },
            nextCursor: { type: 'integer', nullable: true },
          },
        },
        TrendsPoint: {
          type: 'object',
          properties: {
            periodId: { type: 'integer' },
            label: { type: 'string', nullable: true },
            startDate: { type: 'string', format: 'date-time' },
            endDate: { type: 'string', format: 'date-time' },
            value: { type: 'number' },
          },
        },
        GetTrendsResponse: {
          type: 'object',
          properties: {
            metric: {
              type: 'string',
              enum: ['revenue', 'cogs', 'opex', 'grossProfit', 'operatingProfit', 'netProfit'],
            },
            points: { type: 'array', items: { $ref: '#/components/schemas/TrendsPoint' } },
          },
        },
        TopCategory: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            type: {
              type: 'string',
              enum: [
                'REVENUE',
                'COGS',
                'OPERATING_REVENUE',
                'NON_OPERATING_REVENUE',
                'OPERATING_EXPENSE',
                'NON_OPERATING_EXPENSE',
              ],
            },
            totalValue: { type: 'number' },
          },
        },
        GetTopCategoriesResponse: {
          type: 'object',
          properties: {
            categories: { type: 'array', items: { $ref: '#/components/schemas/TopCategory' } },
          },
        },
        BreakdownCategory: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            value: { type: 'number' },
          },
        },
        GetBreakdownResponse: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: [
                'REVENUE',
                'COGS',
                'OPERATING_REVENUE',
                'NON_OPERATING_REVENUE',
                'OPERATING_EXPENSE',
                'NON_OPERATING_EXPENSE',
              ],
            },
            total: { type: 'number' },
            categories: {
              type: 'array',
              items: { $ref: '#/components/schemas/BreakdownCategory' },
            },
          },
        },
      },
    },
  },
  apis:
    process.env.NODE_ENV === 'production'
      ? [join(__dirname, 'server.js')]
      : [join(__dirname, '../src/server.ts')],
});
