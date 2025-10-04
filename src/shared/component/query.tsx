import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export const QueryWrapper = ()=>{
    return (
        <QueryClientProvider client={queryClient} />
    )
}