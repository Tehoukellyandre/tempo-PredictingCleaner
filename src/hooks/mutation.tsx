import {useMutation} from '@tanstack/react-query'
import { fetcher } from '@/reseau';
import type { Position } from '..';

export const usePostUserPosition = ()=>{
   return    useMutation({
    mutationKey : ['atmosphericStatus '],
    mutationFn: (data : Position) => {
      return   fetcher(`/atmospheric/status/user`, {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json", 
            },
             method: 'POST',
             body: JSON.stringify(data)
          })
    },
    })
}
        