import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: 1,
    },
    queries: {
      retry: 1,
      staleTime: 3 * 60 * 1000,
      refetchOnWindowFocus: false,
      // Our success response always looks like { success: true, data: ... }
      // Refer to "response.ts" in the backend middlewares for more
      select: (data: any) => data?.data,
    },
  },
});

function invalidateQueries(queryKeys?: string[]) {
  queryClient.invalidateQueries({ queryKey: queryKeys });
}

export default queryClient;
export { invalidateQueries };
