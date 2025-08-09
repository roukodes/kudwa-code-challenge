import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateManyCompanyInputEnvelopeSchema } from './ReportHeaderCreateManyCompanyInputEnvelopeSchema';
import { ReportHeaderCreateOrConnectWithoutCompanyInputSchema } from './ReportHeaderCreateOrConnectWithoutCompanyInputSchema';
import { ReportHeaderCreateWithoutCompanyInputSchema } from './ReportHeaderCreateWithoutCompanyInputSchema';
import { ReportHeaderUncheckedCreateWithoutCompanyInputSchema } from './ReportHeaderUncheckedCreateWithoutCompanyInputSchema';
import { ReportHeaderWhereUniqueInputSchema } from './ReportHeaderWhereUniqueInputSchema';

export const ReportHeaderCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.ReportHeaderCreateNestedManyWithoutCompanyInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportHeaderCreateWithoutCompanyInputSchema),
          z.lazy(() => ReportHeaderCreateWithoutCompanyInputSchema).array(),
          z.lazy(() => ReportHeaderUncheckedCreateWithoutCompanyInputSchema),
          z.lazy(() => ReportHeaderUncheckedCreateWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReportHeaderCreateOrConnectWithoutCompanyInputSchema),
          z.lazy(() => ReportHeaderCreateOrConnectWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => ReportHeaderCreateManyCompanyInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => ReportHeaderWhereUniqueInputSchema),
          z.lazy(() => ReportHeaderWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default ReportHeaderCreateNestedManyWithoutCompanyInputSchema;
