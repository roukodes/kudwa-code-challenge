import type { ReportsDTO } from '@kudwa-code-challenge/types';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/clients/axios.client';
import { getReportsApi } from '@/services/apis';
import QUERY_KEYS from '@/services/queryKeys';

async function queryFn() {
  const res = await axiosClient.get(getReportsApi);
  return res.data as ReportsDTO[];
}

function useFetchReports() {
  return useQuery({
    queryFn,
    queryKey: QUERY_KEYS.REPORTS.LIST,
  });
}

export default useFetchReports;
