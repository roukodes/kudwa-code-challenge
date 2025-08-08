import { z } from 'zod';

const EnvSchema = z.object({
  PORT: z.string().transform(Number),
  CORS_ORIGIN: z.string().optional(), // comma-separated
  DATABASE_URL: z.url().or(z.string().startsWith('postgresql://')),
});

export const env = EnvSchema.parse(process.env);
