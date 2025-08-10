import { ReportAccountType } from '@prisma/client';

// Single company mode
export const COMPANY_ID = 1;
export const COMPANY_NAME = 'Default Company';

export const API_STATUS_CODES = {
  OK: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

// kept as lowercase for comparison
export const COL_KEY_IDENTIFIER = 'colkey';
export const TOTAL_COL_IDENTIFIER = 'total';
export const START_DATE_COL_IDENTIFIER = 'startdate';
export const END_DATE_COL_IDENTIFIER = 'enddate';
