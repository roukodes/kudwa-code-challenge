import { z } from 'zod';

export const CompanyScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'currency',
  'createdAt',
  'updatedAt',
]);

export default CompanyScalarFieldEnumSchema;
