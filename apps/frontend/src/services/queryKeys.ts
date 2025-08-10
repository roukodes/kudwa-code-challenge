import type {
  BreakdownQueryType,
  GetTrendsQueryType,
  PeriodsQueryType,
  StatementsListQueryType,
  StatementsSummaryQueryType,
  TopCategoriesQueryType,
} from '@kudwa-code-challenge/validators';

const QUERY_KEYS = {
  REPORTS: {
    LIST: ['reports'],
    BY_ID: (id: number) => ['reports', 'id', `${id}`],
  },
  STATEMENTS: {
    LIST: (params?: StatementsListQueryType) => [
      'statements',
      `${params?.full}`,
      `${params?.limit}`,
      `${params?.cursor}`,
    ],
    PERIODS: (params?: PeriodsQueryType) => [
      'statements',
      'periods',
      `${params?.from}`,
      `${params?.to}`,
    ],
    SUMMARY: (params?: StatementsSummaryQueryType) => [
      'statements',
      'summary',
      `${params?.from}`,
      `${params?.to}`,
      `${params?.limit}`,
      `${params?.cursor}`,
    ],
    TOP_CATEGORIES: (params?: TopCategoriesQueryType) => [
      'statements',
      'top-categories',
      `${params?.type}`,
      `${params?.from}`,
      `${params?.to}`,
    ],
    TRENDS: (params?: GetTrendsQueryType) => [
      'statements',
      'trends',
      `${params?.metric}`,
      `${params?.from}`,
      `${params?.to}`,
    ],
    BREAKDOWN: (params?: BreakdownQueryType) => [
      'statements',
      'breakdown',
      `${params?.type}`,
      `${params?.from}`,
      `${params?.to}`,
    ],
  },
};

export default QUERY_KEYS;
