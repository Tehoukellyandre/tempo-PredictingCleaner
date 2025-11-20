import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterWrapper }from '@/shared/component/router.tsx'
import "./index.css";
import 'leaflet/dist/leaflet.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <ReactQueryDevtools position="bottom" initialIsOpen={true} buttonPosition = "bottom-left" />
      <RouterWrapper />
    </QueryClientProvider>

  </StrictMode>,
)
