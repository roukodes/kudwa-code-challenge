import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateManyReportAccountInputSchema } from './AccountMappingCreateManyReportAccountInputSchema';

export const AccountMappingCreateManyReportAccountInputEnvelopeSchema: z.ZodType<Prisma.AccountMappingCreateManyReportAccountInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => AccountMappingCreateManyReportAccountInputSchema),
        z.lazy(() => AccountMappingCreateManyReportAccountInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default AccountMappingCreateManyReportAccountInputEnvelopeSchema;
