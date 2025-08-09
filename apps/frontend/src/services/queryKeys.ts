const QUERY_KEYS = {
  REPORTS: {
    ALL: ['reports'],
    ID: (id: number) => ['reports', 'id', id?.toString()],
  },
  STATEMENTS: {
    ALL: ['statements'],
    ID: (id: number) => ['statements', 'id', id?.toString()],
  },
};

export default QUERY_KEYS;
