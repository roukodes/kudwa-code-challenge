import { z } from 'zod';

export const PeriodScalarFieldEnumSchema = z.enum(['id', 'startDate', 'endDate', 'label']);

export default PeriodScalarFieldEnumSchema;
