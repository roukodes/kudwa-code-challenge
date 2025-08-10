import type { GetTopCategoriesResponseDTO } from '@kudwa-code-challenge/types';
import type { TopCategoriesQueryType } from '@kudwa-code-challenge/validators';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/clients/axios.client';
import { getStatementsTopCategoriesApi } from '@/services/apis';
import QUERY_KEYS from '@/services/queryKeys';

async function fetchTopCategories(params: TopCategoriesQueryType) {
  const res = await axiosClient.get(getStatementsTopCategoriesApi, { params });
  return res.data as GetTopCategoriesResponseDTO;
}

export default function useTopCategories(params: TopCategoriesQueryType) {
  return useQuery({
    enabled: !!params?.type,
    queryKey: QUERY_KEYS.STATEMENTS.TOP_CATEGORIES(params),
    queryFn: () => fetchTopCategories(params),
  });
}
