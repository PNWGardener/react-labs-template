import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: Infinity,
    },
  },
})

export const LabProvider: React.FC = (props) => {
  const { children } = props
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
