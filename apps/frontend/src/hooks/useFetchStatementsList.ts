import type { ListStatementsResponseDTO } from '@kudwa-code-challenge/types';
import type { StatementsListQueryType } from '@kudwa-code-challenge/validators';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/clients/axios.client';
import { getStatementsApi } from '@/services/apis';
import QUERY_KEYS from '@/services/queryKeys';

async function fetchStatementsList(params?: StatementsListQueryType) {
  const res = await axiosClient.get(getStatementsApi, { params });
  return res.data as ListStatementsResponseDTO;
}

export default function useFetchStatementsList(params?: StatementsListQueryType) {
  return useQuery({
    queryKey: QUERY_KEYS.STATEMENTS.LIST(params),
    queryFn: () => fetchStatementsList(params),
  });
}
