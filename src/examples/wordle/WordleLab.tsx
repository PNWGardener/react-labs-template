import { Typography } from '@mui/material'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { WordleGame } from './components/WordleGame'
import { WordleGameProvider } from './context'
import { useWordList } from './hooks'

export const WordleLab: React.VFC = () => {
  const { words, isFetching } = useWordList()
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      {isFetching ? (
        <Typography variant="body1">Getting Words...</Typography>
      ) : (
        <WordleGameProvider words={words ?? []}>
          <WordleGame></WordleGame>
        </WordleGameProvider>
      )}
    </QueryClientProvider>
  )
}
