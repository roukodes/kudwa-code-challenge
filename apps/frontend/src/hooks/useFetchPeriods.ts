import type { GetPeriodsResponseDTO } from '@kudwa-code-challenge/types';
import type { PeriodsQueryType } from '@kudwa-code-challenge/validators';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/clients/axios.client';
import { getStatementsPeriodsApi } from '@/services/apis';
import QUERY_KEYS from '@/services/queryKeys';

async function fetchPeriods(params?: PeriodsQueryType) {
  const res = await axiosClient.get(getStatementsPeriodsApi, { params });
  return res.data as GetPeriodsResponseDTO;
}

export default function useFetchPeriods(params?: PeriodsQueryType) {
  return useQuery({
    queryKey: QUERY_KEYS.STATEMENTS.PERIODS(params),
    queryFn: () => fetchPeriods(params),
  });
}
