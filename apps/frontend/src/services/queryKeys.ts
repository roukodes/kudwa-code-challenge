const QUERY_KEYS = {
  REPORTS: {
    ALL: ['reports'],
    ID: (id: string) => ['reports', 'id', id],
  },
  STATEMENTS: {
    ALL: ['statements'],
    ID: (id: string) => ['statements', 'id', id],
  },
};

export default QUERY_KEYS;
