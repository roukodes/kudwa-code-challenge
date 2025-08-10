import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';

import { axiosClient } from '@/clients/axios.client';
import { invalidateQueries } from '@/clients/query.client';
import { runETLApi } from '@/services/apis';

async function mutationFn() {
  const res = await axiosClient.post(runETLApi);
  return res.data as unknown;
}

function onSuccess() {
  invalidateQueries();
}

function useRunETL() {
  const {
    mutate,
    // TODO: handle toast messages on success and on Error
    isError: isErrorETL,
    isSuccess: isSuccessETL,
    isPending: isLoadingETL,
  } = useMutation({
    mutationFn,
    onSuccess,
  });

  const runETL = useCallback(() => {
    mutate();
  }, [mutate]);

  return { runETL, isLoadingETL, isSuccessETL, isErrorETL };
}

export default useRunETL;
