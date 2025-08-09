import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: 1,
    },
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 3, // 3 minutes
    },
  },
});

function invalidateQueries(queryKeys: string[]) {
  queryClient.invalidateQueries({ queryKey: queryKeys });
}

export default queryClient;
export { invalidateQueries };
