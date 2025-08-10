import type { GetReportTreeResponse } from '@kudwa-code-challenge/types';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/clients/axios.client';
import { getReportByIdApi } from '@/services/apis';
import QUERY_KEYS from '@/services/queryKeys';

async function queryFn({ id }: { id: number }) {
  const res = await axiosClient.get(getReportByIdApi(id));
  return res.data as GetReportTreeResponse;
}

function useFetchReportById({ id }: { id: number }) {
  return useQuery({
    enabled: !!id,
    queryFn: () => queryFn({ id }),
    queryKey: QUERY_KEYS.REPORTS.BY_ID(id),
  });
}

export default useFetchReportById;
