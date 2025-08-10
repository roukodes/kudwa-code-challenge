import type { GetStatementsSummaryResponseDTO } from '@kudwa-code-challenge/types';
import type { StatementsSummaryQueryType } from '@kudwa-code-challenge/validators';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/clients/axios.client';
import { getStatementsSummaryApi } from '@/services/apis';
import QUERY_KEYS from '@/services/queryKeys';

async function fetchStatementsSummary(params?: StatementsSummaryQueryType) {
  const res = await axiosClient.get(getStatementsSummaryApi, { params });
  return res.data as GetStatementsSummaryResponseDTO;
}

export default function useFetchStatementsSummary(params?: StatementsSummaryQueryType) {
  return useQuery({
    queryKey: QUERY_KEYS.STATEMENTS.SUMMARY(params),
    queryFn: () => fetchStatementsSummary(params),
  });
}
