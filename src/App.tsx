import React from 'react'
import './App.css'
import { MainLayout } from './layout'
import { WordleLab } from './examples/wordle'
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

function App() {
  return (
    <MainLayout showToolbar={false}>
      <QueryClientProvider client={queryClient}>
        <WordleLab></WordleLab>
      </QueryClientProvider>
    </MainLayout>
  )
}

export default App
