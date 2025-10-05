import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/reseau';
import type { Position, UserLocation } from '..';



export const useGetAtmosphericData = (params: Position | null ) => {
  return useQuery({
    queryKey: ['airData', params?.latitude, params?.longitude],
    queryFn: () => {
      if (!params) {
        return Promise.reject(new Error('params is null'));
      }
      return fetcher(`/atmospheric/status/user?latitude=${params.latitude}&longitude=${params.longitude}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }).then(({data})=> data.original);
    },
    enabled: !!params?.latitude && !!params?.longitude, 
    staleTime: 5 * 60 * 1000, // optional: data validity duration (5 minutes)
  })
};
