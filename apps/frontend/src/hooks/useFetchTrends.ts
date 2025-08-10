import type { GetTrendsResponseDTO } from '@kudwa-code-challenge/types';
import type { GetTrendsQueryType } from '@kudwa-code-challenge/validators';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/clients/axios.client';
import { getStatementsTrendsApi } from '@/services/apis';
import QUERY_KEYS from '@/services/queryKeys';

async function fetchTrends(params: GetTrendsQueryType) {
  const res = await axiosClient.get(getStatementsTrendsApi, { params });
  return res.data as GetTrendsResponseDTO;
}

export default function useFetchTrends(params: GetTrendsQueryType) {
  return useQuery({
    queryKey: QUERY_KEYS.STATEMENTS.TRENDS(params),
    queryFn: () => fetchTrends(params),
    enabled: !!params?.metric,
  });
}
