import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateManyAccountInputEnvelopeSchema } from './ReportAccountValueCreateManyAccountInputEnvelopeSchema';
import { ReportAccountValueCreateOrConnectWithoutAccountInputSchema } from './ReportAccountValueCreateOrConnectWithoutAccountInputSchema';
import { ReportAccountValueCreateWithoutAccountInputSchema } from './ReportAccountValueCreateWithoutAccountInputSchema';
import { ReportAccountValueUncheckedCreateWithoutAccountInputSchema } from './ReportAccountValueUncheckedCreateWithoutAccountInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from './ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.ReportAccountValueCreateNestedManyWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountValueCreateWithoutAccountInputSchema),
          z.lazy(() => ReportAccountValueCreateWithoutAccountInputSchema).array(),
          z.lazy(() => ReportAccountValueUncheckedCreateWithoutAccountInputSchema),
          z.lazy(() => ReportAccountValueUncheckedCreateWithoutAccountInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReportAccountValueCreateOrConnectWithoutAccountInputSchema),
          z.lazy(() => ReportAccountValueCreateOrConnectWithoutAccountInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => ReportAccountValueCreateManyAccountInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default ReportAccountValueCreateNestedManyWithoutAccountInputSchema;
