import { useQuery } from 'react-query'
import { sanitizeWord } from '../utils'

export const useWordList = () => {
  // hard coded
  // const result = useQuery<string[]>('words', () => ['react', 'hooks', 'query', 'words'])

  // fetched
  const {
    isLoading,
    error,
    data: words,
    isFetching,
    ...other
  } = useQuery<string[]>(
    `words`,
    () =>
      fetch(
        'https://ostreactlabs.blob.core.windows.net/ostreactlabscdn/wordle/words.json'
      ).then((response) => response.json()),
    {
      select: (data) => data?.map(sanitizeWord),
    }
  )

  return {
    isLoading,
    error,
    words,
    isFetching,
    refresh: () => {
      other.refetch()
    },
  }
}
