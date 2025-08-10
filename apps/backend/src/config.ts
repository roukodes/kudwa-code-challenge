import { z } from 'zod';

const EnvSchema = z.object({
  PORT: z.string().transform(Number),
  CORS_ORIGIN: z.string().optional(), // comma-separated
  DATABASE_URL: z.url().or(z.string().startsWith('postgresql://')),
  ETL_TABLE_REPORT_URL: z.url().optional(),
  ETL_MONTHLY_STATEMENTS_URL: z.url().optional(),
});

export const env = EnvSchema.parse(process.env);
