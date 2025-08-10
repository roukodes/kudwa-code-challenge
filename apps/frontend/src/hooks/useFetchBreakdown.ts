import type { GetBreakdownResponseDTO } from '@kudwa-code-challenge/types';
import type { BreakdownQueryType } from '@kudwa-code-challenge/validators';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/clients/axios.client';
import { getStatementsBreakdownApi } from '@/services/apis';
import QUERY_KEYS from '@/services/queryKeys';

async function fetchBreakdown(params: BreakdownQueryType) {
  const res = await axiosClient.get(getStatementsBreakdownApi, { params });
  return res.data as GetBreakdownResponseDTO;
}

export default function useFetchBreakdown(params: BreakdownQueryType) {
  return useQuery({
    enabled: !!params?.type,
    queryKey: QUERY_KEYS.STATEMENTS.BREAKDOWN(params),
    queryFn: () => fetchBreakdown(params),
  });
}
