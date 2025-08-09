import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';

import { axiosClient } from '@/clients/axios.client';
import { invalidateQueries } from '@/clients/query.client';
import { runETLApi } from '@/services/apis';
import QUERY_KEYS from '@/services/queryKeys';

async function mutationFn() {
  const res = await axiosClient.post(runETLApi);
  return res.data as { status?: string; message?: string };
}

function onSuccess() {
  invalidateQueries(QUERY_KEYS.REPORTS.ALL);
  invalidateQueries(QUERY_KEYS.STATEMENTS.ALL);
}

function useRunETL() {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn,
    onSuccess,
  });

  const runETL = useCallback(() => {
    mutate();
  }, [mutate]);

  // TODO: handle toast messages on success and on Error
  return { runETL, isLoadingETL: isPending, isSuccessETL: isSuccess, isErrorETL: isError };
}

export default useRunETL;
