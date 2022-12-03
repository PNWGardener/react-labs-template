import './App.css'
import { MainLayout } from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Outlet } from 'react-router-dom'
import { Box, Button, Stack } from '@mui/material'

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
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: 'center',
          position: 'absolute',
          top: 16,
          left: 0,
          right: 0,
        }}
      >
        <Button variant="outlined" href="/labs/timer">
          Timer Lab
        </Button>
        <Button variant="outlined" href="/labs/wordle">
          Wordle Lab
        </Button>
      </Stack>

      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </MainLayout>
  )
}

export default App
