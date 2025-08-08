import swaggerJsdoc from 'swagger-jsdoc';

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
        ReportHeader: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            reportName: { type: 'string' },
            startPeriod: { type: 'string', format: 'date-time' },
            endPeriod: { type: 'string', format: 'date-time' },
            currency: { type: 'string', nullable: true },
          },
        },
        ReportNode: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            accountName: { type: 'string' },
            type: { type: 'string', nullable: true },
            values: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  periodId: { type: 'integer' },
                  label: { type: 'string', nullable: true },
                  amount: { type: 'number', nullable: true },
                },
              },
            },
            children: { type: 'array', items: { $ref: '#/components/schemas/ReportNode' } },
          },
        },
        Period: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            label: { type: 'string' },
            startDate: { type: 'string', format: 'date-time' },
            endDate: { type: 'string', format: 'date-time' },
          },
        },
        Statement: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            period: { $ref: '#/components/schemas/Period' },
            grossProfit: { type: 'number', nullable: true },
            operatingProfit: { type: 'number', nullable: true },
            netProfit: { type: 'number', nullable: true },
          },
        },
        StatementCategory: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            type: { type: 'string' },
            totalValue: { type: 'number', nullable: true },
            lineItems: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  name: { type: 'string' },
                  value: { type: 'number', nullable: true },
                  accountId: { type: 'string', nullable: true },
                  children: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/StatementCategory' },
                  },
                },
              },
            },
          },
        },
        StatementResponse: {
          type: 'object',
          properties: {
            statement: { $ref: '#/components/schemas/Statement' },
            categories: {
              type: 'array',
              items: { $ref: '#/components/schemas/StatementCategory' },
            },
          },
        },
      },
    },
  },
  apis: ['src/routes/**/*.ts'], // scan route files for JSDoc
});
